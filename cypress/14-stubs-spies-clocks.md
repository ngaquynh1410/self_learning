# Stubs, Spies và Clocks
- Cypress build sẵn stub, spy thông qua `cy.stub()`, `cy.spy()`, hoặc điều chỉnh time của app bằng `cy.clock()`, cho phép can thiệp vào `Date`, `setTimeout`, `clearTimeout`, `setInterval` hoặc `clearInterval`.

- Những lệnh này dùng được khi viết unit tests và intergration tests.

## Libraries và Tools
- Cypress tự động đóng gói và wraps các thư viện này:
    - `sinon`: cung cấp `cy.stub()` và `cy.spy` APIs
    - `lolex`: cung cấp `cy.clock()` và `cy.tick()`
    - `sinon-chai`: adds `chai` assertion cho stubs và spies

## Common scenarios
### Stubs
- `stub` là 1 cách modify 1 function và delegate kiểm soát hành vi của function.
- `stub` là 1 common dùng trong unit test nhưng vẫn useful trong 1 vài integration/e2e tests.
```js
// create a standalone stub (generally for use in unit test)
cy.stub()

// replace obj.method() with a stubbed function
cy.stub(obj, 'method')

// force obj.method() to return "foo"
cy.stub(obj, 'method').returns('foo')

// force obj.method() when called with "bar" argument to return "foo"
cy.stub(obj, 'method').withArgs('bar').returns('foo')

// force obj.method() to return a promise which resolves to "foo"
cy.stub(obj, 'method').resolves('foo')

// force obj.method() to return a promise rejected with an error
cy.stub(obj, 'method').rejects(new Error('foo'))
```

- Stub thường được sử dụng khi function có các side effects mà bạn muốn kiểm soát.
- Common scenarios:
    - Hàm nhận một callback và bạn muốn gọi callback đó.
    - Hàm trả về một Promise và bạn muốn tự động resolve hoặc reject nó.
    - Hàm bao bọc `window.location` và bạn không muốn ứng dụng bị chuyển hướng.
    - Kiểm tra failure path của ứng dụng bằng cách forcing lỗi.
    - Kiểm tra happy path của ứng dụng bằng cách forcing thành công.
    - Trick ứng dụng nghĩ rằng nó đã đăng nhập hoặc đăng xuất.
    - Sử dụng OAuth và muốn tạo stub cho các phương thức đăng nhập.

### Spy
- Spy cho phép theo dõi một hàm, ghi lại và xác nhận rằng hàm được gọi với đúng tham số, số lần gọi, giá trị trả về, hoặc ngữ cảnh (context) mà hàm được gọi.
- Spy không thay đổi hành vi của hàm – hàm vẫn hoạt động bình thường. Spy hữu ích khi bạn kiểm tra giao tiếp giữa các hàm và không quan tâm đến tác dụng phụ của hàm (nếu có).
```js
cy.spy(obj, 'method')
```

### Clock
- Với `cy.clock()`, ta có thể kiểm soát:
    - `Date`
    - `setTimeout`
    - `setInterval`

- Ứng dụng:
    - Kiểm soát `setInterval` trong ứng dụng (ví dụ: polling).
    - Điều khiển các hàm bị giới hạn tốc độ (throttled) hoặc chống rung (debounced).
    - Giảm thời gian chờ trong kiểm tra.

```js
cy.clock();
cy.visit('http://localhost:3333');
cy.get('#search').type('Acme Company');
cy.tick(1000); // Tiến thời gian 1000ms
```