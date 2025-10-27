# Tổng hợp các Assertions trong Cypress

| Loại Assertion | Thư viện/Phong cách | Mục đích | Ví dụ cú pháp | Ghi chú |
| :--- | :--- | :--- | :--- | :--- |
| **`.equal` / `.eq`** | Chai (BDD, expect/should) | Kiểm tra giá trị bằng (`===`) | `cy.get('input').should('have.value', 'hello');` <br> `expect(1 + 1).to.equal(2);` | Dùng cho số, chuỗi, hoặc đối tượng (so sánh tham chiếu). |
| **`.not.equal`** | Chai (BDD, expect/should) | Kiểm tra giá trị không bằng | `cy.get('input').should('not.have.value', 'world');` | Ngược lại của `.equal`. |
| **`.exist`** | Chai (BDD) + Cypress | Kiểm tra phần tử tồn tại trong DOM | `cy.get('button').should('exist');` | Thường dùng cho các phần tử DOM. |
| **`.not.exist`** | Chai (BDD) + Cypress | Kiểm tra phần tử không tồn tại trong DOM | `cy.get('.error').should('not.exist');` | Dùng để xác minh phần tử đã bị xóa hoặc không hiển thị. |
| **`.be.true`** | Chai (BDD) | Kiểm tra giá trị là `true` | `cy.get('input').should('be.checked');` | Dùng cho boolean hoặc các trạng thái (như `checked`). |
| **`.be.false`** | Chai (BDD) | Kiểm tra giá trị là `false` | `cy.get('input').should('not.be.checked');` | Ngược lại của `.be.true`. |
| **`.be.null`** | Chai (BDD) | Kiểm tra giá trị là `null` | `expect(null).to.be.null;` | Dùng cho kiểm tra giá trị `null`. |
| **`.be.undefined`** | Chai (BDD) | Kiểm tra giá trị là `undefined` | `expect(window.nonExistent).to.be.undefined;` | Dùng cho kiểm tra biến chưa được định nghĩa. |
| **`.be.empty`** | Chai (BDD) | Kiểm tra chuỗi, mảng, hoặc đối tượng rỗng | `cy.get('ul').should('be.empty');` | Áp dụng cho DOM elements, arrays, strings. |
| **`.contain` / `.include`** | Chai (BDD) | Kiểm tra chuỗi/mảng chứa giá trị | `cy.get('p').should('contain', 'Hello');` | Dùng cho văn bản (chỉ cần chứa) hoặc mảng. |
| **`.match`** | Chai (BDD) | Kiểm tra chuỗi khớp với regex | `cy.get('input').should('have.value', /test/);` | Dùng biểu thức chính quy (Regular Expression). |
| **`.have.length`** | Chai (BDD) + Cypress | Kiểm tra độ dài của mảng, chuỗi, hoặc danh sách DOM | `cy.get('li').should('have.length', 3);` | Rất hữu ích khi kiểm tra số lượng phần tử. |
| **`.be.greaterThan` / `.gt`** | Chai (BDD) | Kiểm tra giá trị lớn hơn | `expect(5).to.be.greaterThan(3);` | Dùng cho so sánh số. |
| **`.be.lessThan` / `.lt`** | Chai (BDD) | Kiểm tra giá trị nhỏ hơn | `expect(2).to.be.lessThan(3);` | Dùng cho so sánh số. |
| **`.be.at.least` / `.gte`** | Chai (BDD) | Kiểm tra giá trị lớn hơn hoặc bằng | `expect(5).to.be.at.least(5);` | Dùng cho so sánh số. |
| **`.be.at.most` / `.lte`** | Chai (BDD) | Kiểm tra giá trị nhỏ hơn hoặc bằng | `expect(5).to.be.at.most(5);` | Dùng cho so sánh số. |
| **`.be.instanceOf`** | Chai (BDD) | Kiểm tra đối tượng là instance của constructor | `expect(new Error()).to.be.instanceOf(Error);` | Dùng cho kiểm tra kiểu đối tượng. |
| **`.have.property`** | Chai (BDD) | Kiểm tra đối tượng có thuộc tính | `expect({ name: 'John' }).to.have.property('name', 'John');` | Có thể kiểm tra cả giá trị của thuộc tính. |
| **`.have.all.keys`** | Chai (BDD) | Kiểm tra đối tượng có tất cả các key | `expect({ a: 1, b: 2 }).to.have.all.keys('a', 'b');` | Dùng cho đối tượng. |
| **`.be.a` / `.be.an`** | Chai (BDD) | Kiểm tra kiểu dữ liệu | `expect('test').to.be.a('string');` | Hỗ trợ các kiểu như `string`, `number`, `object`, etc. |
| **`assert.equal`** | Chai (TDD, assert) | Kiểm tra giá trị bằng | `assert.equal(1 + 1, 2);` | Phong cách TDD, ít phổ biến hơn trong Cypress. |
| **`assert.isTrue`** | Chai (TDD, assert) | Kiểm tra giá trị là `true` | `assert.isTrue(true);` | Tương tự `.be.true`. |
| **`assert.isOk`** | Chai (TDD, assert) | Kiểm tra giá trị là "truthy" | `assert.isOk('value');` | Kiểm tra giá trị không phải là `false`, `0`, `""`, `null`. |
| **`.have.value`** | Cypress-Specific | Kiểm tra giá trị của `input`/`textarea` | `cy.get('input').should('have.value', 'hello');` | Dành riêng cho các phần tử nhập liệu. |
| **`.have.text`** | Cypress-Specific | Kiểm tra văn bản chính xác của phần tử | `cy.get('p').should('have.text', 'Hello World');` | Văn bản phải khớp 100%. |
| **`.contain.text`** | Cypress-Specific | Kiểm tra phần tử chứa văn bản | `cy.get('p').should('contain.text', 'Hello');` | Tương tự `.contain` nhưng dành riêng cho DOM. |
| **`.have.class`** | Cypress-Specific | Kiểm tra phần tử có class | `cy.get('button').should('have.class', 'active');` | Dùng cho kiểm tra CSS class. |
| **`.be.visible`** | Cypress-Specific | Kiểm tra phần tử hiển thị | `cy.get('div').should('be.visible');` | Kiểm tra `visibility` trong DOM. |
| **`.be.enabled`** | Cypress-Specific | Kiểm tra phần tử có thể tương tác | `cy.get('button').should('be.enabled');` | Ngược lại của `.be.disabled`. |
| **`.be.checked`** | Cypress-Specific | Kiểm tra `checkbox`/`radio` được chọn | `cy.get('input[type=checkbox]').should('be.checked');` | Dùng cho `input` dạng `checkbox`/`radio`. |
| **`.have.attr`** | Cypress-Specific | Kiểm tra thuộc tính HTML | `cy.get('a').should('have.attr', 'href', '/home');` | Có thể kiểm tra cả giá trị thuộc tính. |
| **`.have.css`** | Cypress-Specific | Kiểm tra thuộc tính CSS | `cy.get('div').should('have.css', 'color', 'rgb(0, 0, 255)');` | Dùng cho style của phần tử. |
| **`.have.focus`** | Cypress-Specific | Kiểm tra phần tử đang được focus | `cy.get('input').focus().should('have.focus');` | Dùng cho kiểm tra trạng thái `focus`. |
| **`.be.selected`** | Cypress-Specific | Kiểm tra `option` trong `<select>` được chọn | `cy.get('select').find('option:selected').should('have.value', 'id');` | Dành riêng cho `<select>` elements. |
| **`.called`** | Sinon-Chai | Kiểm tra hàm/spy đã được gọi | `cy.spy(window, 'alert').as('alert');` <br> `cy.get('@alert').should('have.been.called');` | Dùng cho testing spies/mocks. |
| **`.calledWith`** | Sinon-Chai | Kiểm tra hàm được gọi với đối số cụ thể | `cy.get('@alert').should('have.been.calledWith', 'Hello');` | Dùng cho kiểm tra tham số của hàm được gọi. |
| **`.calledOnce`** | Sinon-Chai | Kiểm tra hàm được gọi đúng một lần | `cy.get('@alert').should('have.been.calledOnce');` | Dùng để kiểm tra chính xác số lần gọi. |
| **`.data`** | Chai-jQuery | Kiểm tra `data-*` attribute | `cy.get('div').should('have.data', 'id', '123');` | Dùng cho thuộc tính `data-*`. |

# Custom Assertions

Bạn có thể tự định nghĩa các assertion tùy chỉnh bằng cách sử dụng `Cypress.Commands.add`.

**Định nghĩa command:**
```typescript
Cypress.Commands.add('haveBackgroundColor', { prevSubject: 'element' }, (subject, color) => {
  cy.wrap(subject).should('have.css', 'background-color', color);
});
```

