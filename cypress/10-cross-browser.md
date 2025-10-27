# Cross Browser Testing trong Cypress
## a. Cài đặt các browser cần test
- Đảm bảo các trình duyệt như Chrome, Firefox, Edge được cài đặt trên máy cục bộ hoặc môi trường CI/CD.
- Cypress tự động phát hiện các trình duyệt được cài đặt trên máy.

## b. Cấu hình chạy test trên nhiều browser
- Cypress cho phép chạy kiểm thử trên các trình duyệt khác nhau thông qua tham số `--browser` trong lệnh `cypress run`
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```
