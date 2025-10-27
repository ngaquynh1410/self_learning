# Cấu trúc của Error trong Cypress
1. `Error name`: Loại lỗi (e.g. AssertionError, CypressError)
2. `Error message`: Mô tả vấn đề, có thể ngắn gọn hoặc chi tiết, đôi khi có solution.
3. `Learn more`: Một số error msg chứa Learn more link để giúp bạn xem các tài liệu liên quan trong docs Cypress
4. `Code frame file`: Dòng đầu tiên của stack trace, hiển thị file, line number, và số cột được đánh dấu trong code. Click vào link này sẽ mở tới file mà bạn preferred mở và highlight dòng và cột trong editors nếu được support
5. `Code frame`: Cái này show đoạn code có lỗi xảy ra, với 1 vài dòng liên quan và cột được highlighted.
6. `View stack trace`: Click vào toggles này để bật/tắt stack trace. Click vào file path màu xanh sẽ mở file mà bạn preferred mở. 
7. `Print to console button`: Click vào đây sẽ in toàn bộ lỗi vào DevTools console. Nó sẽ thường cho phép bạn click vào dòng trong stack trace và mở file trong DevTools của bạn.

![image](https://docs.cypress.io/img/app/core-concepts/open-mode/command-failure-error.png)
