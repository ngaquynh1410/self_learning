# Lesson 02: REST API

## 1. REST API?

*   REST API là một kiến trúc cho việc xây dựng các ứng dụng web.
*   Mô hình Client - Server:
    *   Client gửi **request** đến Server.
    *   Server xử lý request và trả về **response** cho Client.

## 2. Thành phần của Request

*   **Method:** Phương thức HTTP (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)
    *   GET: Lấy dữ liệu.
    *   POST: Tạo mới dữ liệu.
    *   PUT: Cập nhật toàn bộ dữ liệu.
    *   PATCH: Cập nhật một phần dữ liệu.
    *   DELETE: Xóa dữ liệu.
    *   HEAD: Lấy metadata của resource.
    *   OPTIONS: Lấy thông tin về các methods được hỗ trợ.
*   **URL:** (Uniform Resource Locator) Đường dẫn đến tài nguyên.
    *   **Scheme:** `http` (không bảo mật) hoặc `https` (bảo mật)
    *   **Domain:** Tên miền
    *   **Path:** Đường dẫn tới dữ liệu con trong resource.
    *   **Query:** Các tham số bổ sung cho dữ liệu (ví dụ: `?key=value&key2=value2`).
    *   **Fragment:** Một vị trí neo trên trang web (không gửi lên server).
*   **Header:** Các thông tin metadata đi kèm request.
    *   Authorization Headers: Xác thực người dùng (ví dụ: Bearer token, Basic Auth)
    *   Content Headers: Mô tả kiểu dữ liệu của body (ví dụ: `Content-Type: application/json`)
    *   Caching Headers: Liên quan đến việc caching dữ liệu.
    *   Security Headers: Liên quan đến bảo mật.
    *   CORS Headers: Liên quan đến việc chia sẻ dữ liệu giữa các domain khác nhau.
*   **Body:** Dữ liệu được gửi lên server (ví dụ: JSON, XML, Form-Data).

    *   **Tại sao cần Request Body?**
        *   Tối ưu hóa giao tiếp.
        *   Tăng bảo mật (ví dụ: chứa mật khẩu).
        *   Tăng hiệu quả xử lý.
    *   **Lưu ý khi làm việc với Request Body:**
        *   Sử dụng đúng định dạng.
        *   Xác thực dữ liệu.
        *   Mã hóa dữ liệu nhạy cảm.
        *   Kiểm tra lỗi từ server.

## 3. Thành phần của Response

*   **Status Code:** Mã trạng thái HTTP (ví dụ: 200 OK, 404 Not Found, 500 Internal Server Error)
    *   1xx: Informational
    *   2xx: Success
    *   3xx: Redirection
    *   4xx: Client Error
    *   5xx: Server Error
*   **Header:** Các thông tin metadata đi kèm response.
    *   Response header có tác dụng gì?
        *   Cung cấp thông tin về nội dung response.
        *   Kiểm soát caching.
        *   Thiết lập các chính sách bảo mật.
        *   Quản lý phiên và cookie.
        *   Hướng dẫn browser cách xử lý dữ liệu.
        *   Hỗ trợ CORS.
*   **Body:** Dữ liệu trả về từ server.

    *   **Các định dạng Response Body phổ biến:**
        *   JSON
        *   XML
        *   HTML
        *   Plain Text
        *   Binary
    *   **Các trường hợp sử dụng Response Body:**
        *   Trả về dữ liệu từ database.
        *   Thông báo kết quả xử lý.
        *   Trả về danh sách dữ liệu.
        *   Thông báo lỗi.
    *   **Test response body thì test gì?**
        *   Cấu trúc
        *   Nội dung
        *   Xử lý lỗi
        *   Hiệu năng
## 4. Javascript - Getting Started

*   Compiler online: [https://jsfiddle.net/](https://jsfiddle.net/)
*   Khai báo biến:
    *   `const <tên biến> = <giá trị>;`
    *   Ví dụ:
        *   `const name = "Phong";`
        *   `const age = 10;`
        *   `const isLoveCoding = true;`
    *   Lưu ý:
        *   Đặt tên biến có ý nghĩa.
        *   Sử dụng quy tắc camelCase.
        *   Luôn có dấu `;` kết thúc mỗi câu lệnh.
*   In ra dữ liệu: `console.log(<tên biến>)`