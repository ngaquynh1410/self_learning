Các lệnh trong Cypress sẽ không được run ngay lập tức khi thời điểm con trỏ lệnh gọi tới nó. Thay vào đó, các lệnh sẽ được lần lượt cho vào hàng đợi, và run về sau. Tức là các lệnh trong Cypress là bất đồng bộ.

# Mixing async and sync code
- Nếu như muốn sử dụng code đồng bộ trong Cypress thì đây là cách triển khai. Bởi vì những lệnh đồng bộ sẽ được chạy luôn mà không đợi các lệnh cypress được chạy.

```js
it('does not work as we expect', () => {
  cy.visit('/my/resource/path')    // Nothing happens yet

  cy.get('.awesome-selector')      // Still nothing happening
    .click()                       // Nope, nothing
    .then(() => {
      // placing this code inside the .then() ensures
      // it runs after the cypress commands 'execute'
      let el = Cypress.$('.new-el') // evaluates after .then()

      if (el.length) {
        cy.get('.another-selector')
      } else {
        cy.get('.optional-selector')
      }
    })
})

// Ok, the test function has finished executing...
// We've queued all of these commands and now
// Cypress will begin running them in order!

```
- Những xử lý đồng bộ thì nên thêm vào callback function được truyền vào lệnh `then()`. Khi đó các element DOM cũng đã được get và các câu lệnh đồng bộ sẽ có data mong muốn để xử lý.

# Commands run serially
- Mặc dù các lệnh Cypress là bất đồng bộ, nhưng chúng lại không được chạy song song. Thay vào đó sẽ lần lượt được thêm vào hàng đợi, đồng nghĩa với việc khi run thì các câu lệnh cũng được lần lượt lấy ra khỏi hàng đợi.

- Hơn nữa các câu lệnh của cypress khi chạy, ngoài những xử lý mà chúng ta biết sẽ được thực thi (ví dụ `cy.get('.awesome-selector').click()` là get DOM và click) thì cypress cũng sẽ thực hiện thêm các xử lý phía sau ở từng câu lệnh.

- Thông thường, các xử lý đó là `wait` hay `retry`. Ví dụ `cy.visit()` sẽ wait load đủ dữ liệu rồi mới thực hiện những câu lệnh tiếp theo. Hay `cy.get('.awesome-selector')` cũng sẽ retry việc lấy DOM trong khoảng thời gian timeout (đã đề cập ở trên).

- Các xử lý `wait` hoặc `retry` để đảm bảo các câu lệnh được run thành công - tức gọi lên được kết quả mà chúng ta mong muốn, trước khi câu lệnh tiếp theo được run. Nếu không hoàn thành thành công trước khi quá timeout, thì quá trình kiểm tra sẽ fail.

# Commands are Promises
- Cypress được xây dựng bằng việc sử dụng Promises của Bluebird. Tuy nhiên, các câu lệnh cypress sẽ không trả về instance của Promise, mà trả về 1 `Chainer`, bao lại instance của Promise. Ví dụ nếu các xử lý viết theo Promise:
```js
it('changes the URL when "awesome" is clicked', () => {
  // THIS IS NOT VALID CODE.
  // THIS IS JUST FOR DEMONSTRATION.
  return cy.visit('/my/resource/path')
  .then(() => {
    return cy.get('.awesome-selector')
  })
  .then(($element) => {
    // not analogous
    return cy.click($element)
  })
})
```

- Ta thấy các instance của promise được trả về rồi lại tiếp tục được truyền vào những xử lý tiếp sau. Ví dụ viết đúng trong cypress:
```js
it('changes the URL when "awesome" is clicked', () => {
  cy.visit('/my/resource/path')

  cy.get('.awesome-selector')
    .click()
    })

```
- Cypress sẽ gói lại những đoạn code xử lý lồng nhau và khó hiểu đấy lại và ẩn đi.

# Commands are not Promises
- Cypress không implement hoàn toàn giống hệt Promises. Sau đây là 1 số điểm khác:
1. Không thể run nhiều câu lệnh trong cùng 1 đơn vị thời gian (Không song song). Giống như việc người dùng thao tác từng step trên app của chúng ta, mọi thứ sẽ được thực hiện tuần tự.
2. Bạn sẽ không thể vô tình quên return hay nối các câu lệnh. VÌ trong cypress cũng không cần phải điều đó.
3. Bạn sẽ không thể bắt các lỗi đẻ xử lý nếu như câu lệnh ấy chạy fail. Trong Cypress, 1 khi có câu lệnh fail toàn bộ file test đó fail và dừng chạy. Nếu bạn muốn test theo các luồng điều khiển - luồng điều kiện thì có thể tham khảo condition testing
```js
it('does something different based on the class of the button', () => {
  // RERUN THIS TEST OVER AND OVER AGAIN
  // AND IT WILL SOMETIMES BE TRUE, AND
  // SOMETIMES BE FALSE.

  cy.get('button').then(($btn) => {
    if ($btn.hasClass('active')) {
      // do something if it's active
    } else {
      // do something else
    }
  })
})
```
