# Test retries
- Tự động retries các tests fail để xác định sự flasky, tiết kiệm thời gian và tài nguyên.
## Cách hoạt động
- Theo mặc định, test không retries khi fail. Cần bật tính năng retries trong cấu hình.
- Khi bật, Cypress sẽ retries test tối đa X lần (tổng số lần chạy = X + 1).
    - Ví dụ: Nếu cấu hình retries: 2, test chạy tối đa 3 lần (1 lần ban đầu + 2 lần retries).
- Các hook beforeEach và afterEach được chạy lại mỗi lần retries, nhưng lỗi trong hook before hoặc after không kích hoạt retries.
- Quy trình:
    - Chạy test lần đầu. Nếu thành công, chuyển sang test tiếp theo.
    - Nếu fail, Cypress thông báo và retries (lần 2).
    - Nếu lần 2 thành công, tiếp tục. Nếu fail, thử lần cuối (lần 3).
    - Nếu lần 3 fail, đánh dấu test fail và tiếp tục các test khác.

- Trong `cypress open`, Command Log hiển thị số lần retries và cho phép xem chi tiết từng lần để debug.

## Config Test Retries
### 1. Global
- Định nghĩa số lần thử lại cho cypress run (runMode) và cypress open (openMode).
```js
const { defineConfig } = require('cypress')
module.exports = defineConfig({
  retries: {
    runMode: 2, // Thử lại 2 lần khi chạy cypress run
    openMode: 0, // Không thử lại khi chạy cypress open
  },
})
```
- Nếu chỉ định số lần thử chung (không phân biệt mode):
```js
module.exports = defineConfig({
  retries: 1, // Thử lại 1 lần cho cả hai mode
})
```
### Custom
#### For Individual Test
```js
it('allows user to login', {
  retries: { runMode: 2, openMode: 1 },
}, () => {
  // ...
})
```

#### For Test Suite
```js
describe('User bank accounts', {
  retries: { runMode: 2, openMode: 1 },
}, () => {
  it('allows a user to view their transactions', () => { /* ... */ })
  it('allows a user to edit their transactions', () => { /* ... */ })
})
```


