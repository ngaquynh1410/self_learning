# Tổng hợp các Actions trong Cypress

Cypress "Actions" là các lệnh mô phỏng hành động của người dùng trên trang web, chẳng hạn như click chuột, gõ phím, hoặc scroll trang. Hầu hết các action đều có thể được nối chuỗi (chainable) sau các lệnh truy vấn như `cy.get()`, `cy.xpath()`.

## I. Tương tác với Phần tử (Element Interactions)

Đây là nhóm actions phổ biến nhất, dùng để tương tác trực tiếp với các phần tử trên DOM.

### `.click()`
Click chuột vào một phần tử DOM.

```javascript
// Click vào một button
cy.get('button').click();

// Click vào vị trí cụ thể (góc trên bên trái)
cy.get('#my-element').click('topLeft');

// Bắt buộc Click chuột, ngay cả khi phần tử bị che khuất
cy.get('button').click({ force: true });
```

### `.dblclick()`
Click đúp chuột vào một phần tử DOM.

```javascript
cy.get('div.user-profile').dblclick();
```

### `.rightclick()`
Click chuột phải vào một phần tử DOM.

```javascript
cy.get('canvas').rightclick();
```

### `.type()`
Gõ một chuỗi văn bản vào một phần tử DOM (thường là `<input>` hoặc `<textarea>`).

```javascript
// Gõ vào ô input
cy.get('input[name="email"]').type('example@email.com');

// Gõ chậm hơn (100ms mỗi ký tự)
cy.get('input[name="password"]').type('my-secret-pass', { delay: 100 });

// Gõ các phím đặc biệt
cy.get('input[name="search"]').type('Cypress is awesome{enter}');
```

### `.clear()`
Xóa giá trị của một `<input>` hoặc `<textarea>`.

```javascript
cy.get('input[name="email"]').type('wrong@email.com').clear();
```

### `.check()`
Chọn một checkbox hoặc radio button.

```javascript
// Chọn một checkbox
cy.get('input[type="checkbox"]').check();

// Chọn radio button có giá trị (value) cụ thể
cy.get('input[type="radio"]').check('admin');
```

### `.uncheck()`
Bỏ chọn một checkbox hoặc radio button.

```javascript
// Bỏ chọn checkbox đã chọn
cy.get('input[type="checkbox"]').uncheck();

// Bỏ chọn checkbox có giá trị cụ thể
cy.get('input[type="checkbox"]').uncheck(['red', 'blue']);
```

### `.select()`
Chọn một `<option>` trong một `<select>` (dropdown).

```javascript
// Chọn theo giá trị (value)
cy.get('select').select('user-1');

// Chọn theo nội dung text
cy.get('select').select('Admin');

// Chọn nhiều option
cy.get('select').select(['user-1', 'user-2']);
```

### `.scrollIntoView()`
Cuộn trang cho đến khi phần tử được hiển thị trong khung nhìn (viewport).

```javascript
cy.get('#footer').scrollIntoView();
```

### `.scrollTo()`
Cuộn cửa sổ hoặc một phần tử có thể cuộn đến một vị trí cụ thể.

```javascript
// Cuộn cửa sổ xuống 500px
cy.scrollTo(0, 500);

// Cuộn đến cuối trang
cy.scrollTo('bottom');

// Cuộn một phần tử cụ thể
cy.get('div.scrollable').scrollTo('center');
```

### `.trigger()`
Kích hoạt một sự kiện trên một phần tử DOM (ví dụ: `mouseover`, `mousedown`).

```javascript
// Kích hoạt sự kiện mouseover để hiển thị tooltip
cy.get('button').trigger('mouseover');

cy.get('button').trigger('mouseout');
```

### `.focus()`
Focus vào một phần tử DOM.

```javascript
cy.get('input.form-control').focus();
```

### `.blur()`
Làm mất focus khỏi một phần tử DOM.

```javascript
cy.get('input.form-control').focus().blur();
```

### `dragNdrop`
- Cài đặt plugin
```bash
npm install --save-dev @4tw/cypress-drag-drop
```
- Cấu hình trong file `cypress/support/e2e.js`:
```js
require('@4tw/cypress-drag-drop');
```
- Nếu dùng TypeScript, thêm vào `tsconfig.json`:
```js
{
  "compilerOptions": {
    "types": ["cypress", "@4tw/cypress-drag-drop"]
  }
}
```
#### Cách 1: dùng `drag`
- Ex:
```js
cy.get('#userTable tbody tr td:nth-child(2)')
  .should('be.visible')
  .drag('#drop-zone', { force: true });
```
- `cy.get('#userTable tbody tr td:nth-child(2)')`: Chọn ô Username (cột thứ 2).
- `.drag('#drop-zone', { force: true })`: Kéo ô này đến `#drop-zone`. `force: true` bỏ qua kiểm tra hiển thị/actionability.

#### Cách 2: dùng `trigger()`: `mousedown`, `mousemove`, `mouseup`
- Ex:
```js
describe('Drag and Drop Test with Trigger', () => {
    it('Drags a table cell to a drop zone', () => {
        cy.visit('https://material.playwrightvn.com/01-xpath-register-page.html');

        // Thêm dữ liệu vào bảng
        cy.get('#username').type('testuser');
        cy.get('#email').type('test@example.com');
        cy.get('button[type="submit"]').click();

        // Lấy vị trí của source và target
        cy.get('#userTable tbody tr td:nth-child(2)').then(($source) => {
            cy.get('#drop-zone').then(($target) => {
                const sourceRect = $source[0].getBoundingClientRect();
                const targetRect = $target[0].getBoundingClientRect();

                cy.wrap($source)
                    .trigger('mousedown', {
                        which: 1,
                        clientX: sourceRect.left + sourceRect.width / 2,
                        clientY: sourceRect.top + sourceRect.height / 2,
                        force: true,
                    })
                    .trigger('mousemove', {
                        clientX: targetRect.left + targetRect.width / 2,
                        clientY: targetRect.top + targetRect.height / 2,
                        force: true,
                    })
                    .trigger('mouseup', { force: true });

                // Kiểm tra kết quả
                cy.get('#drop-zone').should('contain', 'testuser');
            });
        });
    });
});
```
- `.getBoundingClientRect()`: Lấy tọa độ của phần tử source và target để mô phỏng di chuyển chuột chính xác.
- `.trigger('mousedown', { which: 1, clientX, clientY })`: Bắt đầu kéo.
- `.trigger('mousemove', { clientX, clientY })`: Di chuyển chuột đến vị trí target.
- `.trigger('mouseup')`: Thả chuột.
- `force: true`: Bỏ qua kiểm tra actionability nếu phần tử không hiển thị hoàn toàn.


## II. Thao tác với Form

### `.submit()`
Gửi (submit) một form.

> **Lưu ý:** Cách tốt nhất là `.click()` vào nút submit của form để mô phỏng chính xác hành vi người dùng. Tuy nhiên, `.submit()` vẫn hữu ích trong một số trường hợp.

```javascript
cy.get('form').submit();
```

## III. Tương tác với Trình duyệt (Browser Interactions)

### `.visit()`
Truy cập một URL. Đây thường là lệnh đầu tiên trong mỗi test.

```javascript
cy.visit('https://example.com');
```

### `.go()`
Di chuyển tới lui trong lịch sử trình duyệt.

```javascript
// Quay lại trang trước
cy.go('back');
// hoặc
cy.go(-1);

// Tới trang sau
cy.go('forward');
// hoặc
cy.go(1);
```

### `.reload()`
Tải lại trang.

```javascript
cy.reload();

// Tải lại trang và bỏ qua cache
cy.reload(true);
```

### `.viewport()`
Thay đổi kích thước của khung nhìn (viewport). Rất hữu ích cho việc kiểm thử responsive.

```javascript
cy.viewport('iphone-6');
cy.viewport(1280, 720);
```

## IV. Chờ đợi (Waiting)

### `.wait()`
Tạm dừng test trong một khoảng thời gian nhất định hoặc chờ một tài nguyên mạng (route alias).

> **Cảnh báo:** Hạn chế dùng `cy.wait(number)` vì nó có thể làm test bị chậm và không ổn định (flaky). Thay vào đó, hãy dựa vào cơ chế tự động chờ của Cypress. Chỉ dùng khi thực sự cần thiết hoặc khi chờ alias.

```javascript
// Chờ 2 giây (KHÔNG KHUYẾN KHÍCH)
cy.wait(2000);

// Chờ một route alias hoàn thành (CÁCH TỐT NHẤT)
cy.intercept('POST', '/login').as('userLogin');
cy.get('#login-btn').click();
cy.wait('@userLogin'); // Chờ cho đến khi request /login hoàn thành
```

## V. Cookies & Lưu trữ (Storage)

### `.getCookie()`, `.getCookies()`
Lấy một hoặc nhiều cookies.

```javascript
cy.getCookie('session_id').should('have.property', 'value', '12345');
```

### `.setCookie()`
Thiết lập một cookie.

```javascript
cy.setCookie('token', 'my-secret-token');
```

### `.clearCookie()`, `.clearCookies()`
Xóa một hoặc tất cả cookies.

```javascript
cy.clearCookie('token');
cy.clearCookies();
```

### `.clearLocalStorage()`
Xóa toàn bộ dữ liệu trong `localStorage`.

```javascript
cy.clearLocalStorage();
```

## VI. Alerts
- Docs: https://docs.cypress.io/api/cypress-api/catalog-of-events#__docusaurus_skipToContent_fallback
### Click for JS Alert
- Event: window:alert
- Yields: the alert text (String)
- Desc: Fires when your app calls the global window.alert() method. Cypress will auto accept alerts. You cannot change this behavior.
- Cú pháp:
```js
cy.on("window:alert", (dialog) => {
    expect(dialog).to.contains('Alert text');
})
```


### Click for JS Confirm - OK
- Confirm
```js
cy.on("window:confirm", (dialog) => {
    expect(dialog).to.contains('Alert text');
})
```

- Cancel
```js
// cypress closes alert window using cancel button
cy.on("window:confirm", () => false);
```

### Click for JS Prompt

```js
// cypress will automatically close prompted alert - it will use OK button - be default
cy.window().then((win) => {
  cy.stub(win, 'prompt').returns('welcome');
})
```

### Authenticated Alert
- Cách 1:
```js
cy.visit("https://url_data", {
  auth: {
    username: "admin",
    password: "password"
  }
});
```

- Cách 2:
```js
cy.visit("https://admin:password@url_data");
```