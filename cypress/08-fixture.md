# Fixture
- Load dữ liệu tĩnh trong file

## Syntax
```ts
cy.fixture(filePath)
cy.fixture(filePath, encoding)
cy.fixture(filePath, options)
cy.fixture(filePath, encoding, options)
```

### Usage
```ts
cy.fixture('users').as('usersJson') // load data from users.json
cy.fixture('logo.png').then((logo) => {
  // load data from logo.png
})
```

## Arguments
### `filePath` (String)
- fixturesFolder có giá trị default là: `cypress/fixtures`
```ts
cy.fixture('users/admin.json') // Get data from {fixturesFolder}/users/admin.json
```

### `encoding` (String)
- 'ascii'
- 'base64'
- 'binary'
- 'hex'
- 'latin1'
- 'utf8'
- 'utf-8'
- 'ucs2'
- 'ucs-2'
- 'utf16le'
- 'utf-16le'
- null

Sử dụng null sẽ return về fixture dạng như `Cypress.Buffer`.

### `options` (Object)
- Truyền vào 1 object để thay đổi behavior mặc định của `cy.fixture()`
- Ví dụ:
    - Option: `timeout`
    - Default: `responseTimeout`
    - Description: `Time to wait for cy.fixture() to resolve before timing out`

## Example
### JSON
#### Load a `user.json` fixture
```ts
cy.fixture('users.json').as('usersData')
```

### Bỏ qua fixture file's extension
- Khi fixture file's extension không được. Cypress sẽ search file dựa trên `fixturesFolder` (defaults: `cypress/fixtures`) và resolve cái đầu tiên.
```ts
cy.fixture('admin').as('adminJSON')
```
- Ví dụ nó sẽ resolve theo thứ tự dưới đây:
1. cypress/fixtures/admin.json
2. cypress/fixtures/admin.js
3. cypress/fixtures/admin.coffee
4. cypress/fixtures/admin.html
5. cypress/fixtures/admin.txt
6. cypress/fixtures/admin.csv
7. cypress/fixtures/admin.png
8. cypress/fixtures/admin.jpg
9. cypress/fixtures/admin.jpeg
10. cypress/fixtures/admin.gif
11. cypress/fixtures/admin.tif
12. cypress/fixtures/admin.tiff
13. cypress/fixtures/admin.zip

### Sử dụng import statement
- Nếu bạn load Json fixture, bạn có thể sử dụng `import` vào file cần sử dụng
```ts
// cypress/e2e/spec.cy.js
import user from '../fixtures/user.json';

it('loads the same object', () => {
  cy.fixture('user').then((userFixture) => {
    expect(user, 'the same data').to.deep.equal(userFixture)
  })
})
```

### Images
#### Image fixtures are sent as base64 by default
- Cách dữ liệu hình ảnh được trả về phụ thuộc vào encoding được chỉ định khi gọi `cy.fixture()`.
- Mã hóa mặc định: Base64
    - Theo mặc định, khi bạn sử dụng cy.fixture() để đọc một file hình ảnh (như logo.png), Cypress sẽ trả về dữ liệu dưới dạng chuỗi base64.
    - Base64 là gì?: Base64 là một cách mã hóa dữ liệu nhị phân (như hình ảnh) thành một chuỗi ký tự ASCII, thường được dùng để truyền dữ liệu qua các giao thức không hỗ trợ dữ liệu nhị phân trực tiếp (như JSON hoặc HTML).
    - 
```ts
cy.fixture('images/logo.png').then((logo) => {
  // logo will be encoded as base64
  // and should look something like this:
  // aIJKnwxydrB10NVWqhlmmC+ZiWs7otHotSAAAOw==...
})
```
- Giải thích đoạn code:
    - `cy.fixture('images/logo.png')`: Đọc file logo.png từ thư mục cypress/fixtures/images.
    - `.then((logo) => { ... })`: Dữ liệu hình ảnh được trả về dưới dạng chuỗi base64 trong biến logo.
    - Chuỗi base64 có thể được sử dụng để:
        - Gửi dữ liệu hình ảnh qua API (ví dụ: trong payload của request).
        - So sánh hoặc hiển thị hình ảnh trong giao diện (bằng cách nhúng vào src của thẻ <img> với định dạng data:image/png;base64,...).
- Ứng dụng:
    - Kiểm thử tải ảnh lên (upload file).
    - Mock dữ liệu API trả về hình ảnh.
    - Kiểm tra hiển thị hình ảnh trên giao diện.

- Ví dụ thực tế: Sử dụng base64 để kiểm thử upload ảnh
```ts
it('should upload an image', () => {
  cy.fixture('images/logo.png').then((image) => {
    // Chuyển base64 thành Blob để upload
    const blob = Cypress.Blob.base64StringToBlob(image, 'image/png');
    const file = new File([blob], 'logo.png', { type: 'image/png' });
    
    cy.get('input[type="file"]').attachFile({
      fileContent: file,
      fileName: 'logo.png',
      mimeType: 'image/png',
    });
    cy.get('button[type="submit"]').click();
    cy.get('.success').should('contain', 'Image uploaded');
  });
});
```
- Giải thích:
    - `Cypress.Blob.base64StringToBlob`: Chuyển chuỗi base64 thành đối tượng Blob để mô phỏng file upload.
    - `cy.get('input[type="file"]').attachFile`: Sử dụng plugin cypress-file-upload (cần cài đặt) để gắn file vào input.

#### Change encoding of Image fixture
- Nếu bạn không muốn dữ liệu hình ảnh được trả về dưới dạng base64, bạn có thể chỉ định encoding là null để Cypress trả về dữ liệu dưới dạng Buffer (đối tượng nhị phân trong Node.js).
- Buffer là gì?: Buffer là một lớp trong Node.js để xử lý dữ liệu nhị phân trực tiếp, thường được dùng khi bạn cần thao tác với dữ liệu thô (raw data) của hình ảnh.
```ts
cy.fixture('images/logo.png', null).then((logo) => {
  // logo will be read as a buffer
  // and should look something like this:
  // Buffer([0, 0, ...])
  expect(Cypress.Buffer.isBuffer(logo)).to.be.true
})
```
- Giải thích đoạn code:
    - `cy.fixture('images/logo.png', null)`: Đọc file logo.png và trả về dữ liệu dưới dạng Buffer thay vì base64.
    - `Cypress.Buffer.isBuffer(logo)`: Kiểm tra xem logo có phải là đối tượng Buffer hay không.
    - Dữ liệu Buffer là một mảng các byte ([0, 0, ...]) đại diện cho nội dung nhị phân của file hình ảnh.
- Ứng dụng:
    - Thao tác với dữ liệu nhị phân (ví dụ: so sánh byte, phân tích metadata của ảnh).
    - Gửi dữ liệu thô qua API hoặc xử lý trong các trường hợp cần dữ liệu nhị phân trực tiếp.
    - Tích hợp với các thư viện xử lý ảnh (như sharp hoặc jimp trong Node.js).
- Ví dụ thực tế: Kiểm tra kích thước ảnh bằng Buffer
    - Buffer cho phép bạn kiểm tra các thuộc tính của file như kích thước hoặc nội dung nhị phân, hữu ích khi cần xác minh file trước khi sử dụng.
```ts
it('should verify image buffer', () => {
  cy.fixture('images/logo.png', null).then((buffer) => {
    expect(Cypress.Buffer.isBuffer(buffer)).to.be.true;
    // Kiểm tra kích thước file (tính bằng byte)
    expect(buffer.length).to.be.greaterThan(1000); // Giả sử file lớn hơn 1KB
  });
});
```

### Playing MP3 file
```ts
cy.fixture('audio/sound.mp3', 'base64').then((mp3) => {
  const uri = 'data:audio/mp3;base64,' + mp3
  const audio = new Audio(uri)

  audio.play()
})
```

### Accessing Fixture Data
#### Using `.then()` to access fixture data
```ts
cy.fixture('users').then((json) => {
  cy.intercept('GET', '/users/**', json)
})
```
- Giải thích:
    - Mục đích: Đoạn code này sử dụng lệnh cy.fixture() để tải dữ liệu từ file fixture (ở đây là users.json) và sau đó sử dụng dữ liệu này để mock (giả lập) phản hồi của một yêu cầu mạng (network request) thông qua cy.intercept().
- Chi tiết từng phần:
    - `cy.fixture('users')`: Lệnh này đọc file users.json từ thư mục cypress/fixtures (hoặc thư mục tùy chỉnh nếu bạn đã thay đổi trong cấu hình).
    - Theo mặc định, nếu file là JSON, Cypress sẽ tự động parse nội dung thành một đối tượng JavaScript.
    - Ví dụ nội dung file users.json:
        ```json
        [
        { "id": 1, "name": "John Doe" },
        { "id": 2, "name": "Jane Doe" }
        ]
        ```
    - `.then((json) => { ... })`:
        - `cy.fixture()` trả về một Promise, và `.then()` được dùng để xử lý dữ liệu sau khi file được đọc.
    - Biến json chứa dữ liệu từ file `users.json` (trong ví dụ trên, là một mảng các đối tượng user).
    - `cy.intercept('GET', '/users/**', json)`:
        - Lệnh cy.intercept() chặn (intercept) các yêu cầu mạng phù hợp với phương thức GET và URL khớp với mẫu /users/** (dùng wildcard ** để khớp với bất kỳ đường dẫn nào bắt đầu bằng /users/).
        - Thay vì để ứng dụng gửi yêu cầu đến server thật, Cypress trả về dữ liệu từ json (dữ liệu từ file users.json) như là phản hồi của API.
        - Điều này giúp mô phỏng phản hồi API mà không cần server thực.
- Ứng dụng:
    - Kiểm thử giao diện (UI) khi dữ liệu API được mock.
    - Đảm bảo ứng dụng xử lý đúng dữ liệu trả về mà không cần gọi API thật, giúp test nhanh hơn và độc lập với server

- Ví dụ thực tế: Giả sử bạn muốn kiểm tra danh sách người dùng hiển thị trên giao diện:
```ts
it('should display users from fixture', () => {
  cy.fixture('users').then((json) => {
    cy.intercept('GET', '/users/**', json).as('getUsers');
  });
  cy.visit('/users');
  cy.wait('@getUsers');
  cy.get('.user-list').should('have.length', 2); // Giả sử users.json có 2 user
});
```
- Giải thích:
    - `cy.intercept()` mô phỏng API trả về dữ liệu từ users.json.
    - `.wait('@getUsers')` đợi yêu cầu mạng hoàn tất.
    - Giao diện sẽ hiển thị danh sách người dùng dựa trên dữ liệu fixture.

