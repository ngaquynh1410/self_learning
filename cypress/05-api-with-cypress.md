# API Testing with Cypress
## `cy.request()`
- Lệnh `cy.request()` cho phép gửi request HTTP trực tiếp tới server.
- Cú pháp:
```typescript
cy.request(method, url, body, options)
```
- Trong đó:
    - `method`: HTTP Method (GET, POST, PUT, DELETE)
    - `url`: Đường dẫn API endpoint
    - `body`: Request body
    - `options`: Headers, query params, timeout,...

- Response: `cy.request` trả về 1 object chứa các thuộc tính như `status`, `body`, `headers`, `duration`, ...

## Sử dụng với các HTTP Method
### 1. GET Request
- Mục đích: Get data
- Ví dụ: Gửi yêu cầu GET để lấy danh sách người dùng từ API.

```typescript
describe('GET API Test', () => {
  it('should fetch users', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
    }).then((response) => {
      // Kiểm tra status
      expect(response.status).to.eq(200);
      // Kiểm tra body có phải mảng
      expect(response.body).to.be.an('array');
      // Kiểm tra số lượng người dùng
      expect(response.body).to.have.length(10);
      // Kiểm tra một thuộc tính cụ thể của người dùng đầu tiên
      expect(response.body[0]).to.have.property('name');
    });
  });
});
```

### 2. POST Request
- Mục đích: create new data
- Ví dụ: Gửi yêu cầu POST để tạo một bài viết mới.

```typescript
describe('POST API Test', () => {
  it('should create a new post', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'New Post',
        body: 'This is a test post',
        userId: 1,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      // Kiểm tra status
      expect(response.status).to.eq(201);
      // Kiểm tra data response
      expect(response.body).to.have.property('title', 'New Post');
      expect(response.body).to.have.property('body', 'This is a test post');
      expect(response.body).to.have.property('userId', 1);
      // Kiểm tra ID được tạo
      expect(response.body).to.have.property('id');
    });
  });
});
```

### 3. PUT Request
- Mục đích: Update data
- Ví dụ: Gửi yêu cầu PUT để cập nhật thông tin một bài viết.

```typescript
describe('PUT API Test', () => {
  it('should update a post', () => {
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        id: 1,
        title: 'Updated Post',
        body: 'This is an updated post',
        userId: 1,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      // Kiểm tra status
      expect(response.status).to.eq(200);
      // Kiểm tra data được update
      expect(response.body).to.have.property('title', 'Updated Post');
      expect(response.body).to.have.property('body', 'This is an updated post');
      expect(response.body).to.have.property('id', 1);
    });
  });
});
```

### 4. DELETE Request
- Mục đích: Xoá 1 resoure
- Ví dụ: Gửi yêu cầu DELETE để xóa một bài viết.

```typescript
describe('DELETE API Test', () => {
  it('should delete a post', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    }).then((response) => {
      // Kiểm tra status code
      expect(response.status).to.eq(200);
      // Kiểm tra body response
      expect(response.body).to.be.empty;
    });
  });
});
```

## Thêm query parameters
- Bạn có thể thêm query parameters vào `url` hoặc sử dụng tùy chọn `qs`
```typescript
cy.request({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/posts',
  qs: {
    userId: 1,
  },
}).then((response) => {
  expect(response.status).to.eq(200);
});
```

## Thêm Headers vào option
- Thêm headers vào tùy chọn headers:
```typescript
cy.request({
  method: 'POST',
  url: 'https://api.example.com/endpoint',
  headers: {
    Authorization: 'Bearer your_token',
    'Content-Type': 'application/json',
  },
  body: { key: 'value' },
});
```

## Xử lý fail
- Dùng tùy chọn `failOnStatusCode: false` để cho phép kiểm tra các status lỗi (như 404, 500)
```typescript
cy.request({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/invalid-endpoint',
  failOnStatusCode: false,
}).then((response) => {
  expect(response.status).to.eq(404);
});
```

## Chaining các requests
- Có thể lưu trữ dữ liệu từ một request để sử dụng trong request khác.
```typescript
cy.request('POST', '/posts', { title: 'Test' }).then((response) => {
  const postId = response.body.id;
  cy.request('GET', `/posts/${postId}`).then((getResponse) => {
    expect(getResponse.body.id).to.eq(postId);
  });
});
```

## Mock API với `cy.intercept()`
- Nếu cần mock response từ API để test, sử dụng cy.intercept():
```typescript
cy.intercept('GET', '/users', { fixture: 'users.json' }).as('getUsers');
cy.visit('/page-that-calls-users');
cy.wait('@getUsers').its('response.statusCode').should('eq', 200);
```

## Lưu ý
- `Timeout`: Mặc định, `cy.request()` có timeout 30s. Có thể tùy chỉnh bằng `timeout` trong options:
```typescript
cy.request({ url: '/slow-endpoint', timeout: 60000 });
```

- `Authentication`: Nếu API yêu cầu xác thực, thêm token vào headers hoặc sử dụng `auth`:
```typescript
cy.request({
  url: '/protected-endpoint',
  auth: { username: 'user', password: 'pass' },
});
```
