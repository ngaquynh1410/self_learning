# Khởi tạo test
- Mỗi `it()` đại diện cho một test case cụ thể.

- Cú pháp:
```javascript
    it('tên của test case', () => {
    // Code kiểm thử
    });
```

# Test describe
- Hàm `describe()` được sử dụng để nhóm các test case liên quan lại với nhau, giúp tổ chức code test một cách rõ ràng.

- Cú pháp:
```javascript
describe('tên nhóm test', () => {
  it('test case 1', () => {
    // Code kiểm thử
  });

  it('test case 2', () => {
    // Code kiểm thử
  });
});
```

# Test hooks
- Cypress cung cấp các hook để thực hiện các tác vụ trước hoặc sau các test case, bao gồm `before`, `beforeEach`, `after`, và `afterEach`.

- Cú pháp:
```javascript
describe('Test Suite', () => {
  before(() => {
    // Chạy một lần trước tất cả các test trong describe
  });

  beforeEach(() => {
    // Chạy trước mỗi test case
  });

  afterEach(() => {
    // Chạy sau mỗi test case
  });

  after(() => {
    // Chạy một lần sau tất cả các test trong describe
  });

  it('test case', () => {
    // Code kiểm thử
  });
});
```

Trong đó:
- `before`: Chạy một lần trước khi tất cả các test case trong describe bắt đầu.
- `beforeEach`: Chạy trước mỗi test case.
- `afterEach`: Chạy sau mỗi test case.
- `after`: Chạy một lần sau khi tất cả test case trong describe hoàn tất.


# Tags
- `it.skip`: Bỏ qua (skip) một test case hoặc nhóm test cụ thể.
- `it.only`: Chỉ chạy test case hoặc nhóm test được đánh dấu bằng it.only, bỏ qua tất cả các test khác trong test suite.
```ts
describe.skip('Nhóm test bị bỏ qua', () => {
  it('test 1', () => { /* Không chạy */ });
  it('test 2', () => { /* Không chạy */ });
});

describe.only('Nhóm test được chạy', () => {
  it('test 1', () => { /* Chạy */ });
  it('test 2', () => { /* Chạy */ });
});
```
