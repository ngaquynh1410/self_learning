# Run test trong Cypress bằng Command Line (CMD)
## 1. Mở Cypress Test Runner (chế độ giao diện)
- Sau khi chạy, bạn sẽ thấy giao diện để chọn file test và trình duyệt.
```
npx cypress open
```

## 2. Chạy tất cả test trong chế độ headless
```
npx cypress run
```

## 3. Chạy test trên một trình duyệt cụ thể
- Chạy test trên trình duyệt được chỉ định (chrome, firefox, edge, electron).
```
npx cypress run --browser <browser-name>
```

## 4. Chạy một file test cụ thể
- Chỉ chạy một file test cụ thể thay vì toàn bộ test suite.
```
npx cypress run --spec <path-to-spec>
```

## 5. Chạy nhiều file test cụ thể
- Chạy nhiều file test được liệt kê, cách nhau bằng dấu phẩy.
```
npx cypress run --spec <path-to-spec1>,<path-to-spec2>
```

# Sử dụng grep để lọc test case qua dòng lệnh
- Cypress không có tùy chọn dòng lệnh trực tiếp để chạy một test case cụ thể, nhưng bạn có thể sử dụng plugin như `cypress-grep` để lọc test theo tiêu đề (title) của test case.
```
npm install -D cypress-grep
```

- Cấu hình plugin: Thêm vào file cypress/support/e2e.js:
```
require('cypress-grep')();
```

- Sử dụng tùy chọn `--env grep=<test-title>` để chạy test case có tiêu đề khớp với chuỗi được chỉ định.
```
npx cypress run --spec "cypress/integration/login.spec.js" --env grep="should show error on invalid login"
```
