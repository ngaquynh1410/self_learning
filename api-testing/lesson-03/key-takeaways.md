# Authentication & Authorization

## Hiểu về Authen và Author
### Authentication
- Là quá trình xác minh danh tính của user hoặc hệ thống.
- Xác minh "bạn là ai?"

### Authorization
- Là quá trình xác định quyền truy cập của người dùng sau khi xác thực.
- Xác minh "bạn có quyền làm gì?"

## Terms
### Username, password
- Là tài khoản và mật khẩu để xác minh thông tin của 1 user.

### Session, cookie
- Là 1 phương pháp xác thực dựa trên trạng thái (stateful authen), trong đó server duy trì trạng thái đăng nhập của ng dùng bằng session, còn client lưu session ID dạng cookie
- Session lưu ở Server, khi đăng nhập sẽ sinh ra và sẽ gửi cho client giá trị tương ứng với sessio này là cookie.
- Cookie lưu ở Client.

### Base64 encode/decode
- Là việc biến đổi 1 chuỗi gốc thành 1 chuỗi mã hoá theo thuật toán mã hoá Base64.
- Tham khảo: https://minhphong306.wordpress.com/2022/02/19/base64-phan-1-tim-hieu-ve-nguyen-li-hoat-dong-cung-hang-beo/

### Token
- Là 1 chuỗi ký tự ngẫu nhiên dùng để xác thực ng dùng hoặc ứng dụng.
- Được tạo ra sau khi ng dùng đăng nhập thành công.
- Có thể chứa thông tin về user, quyền hạn, thời gian hết hạn.
- Các dạng token phổ biến:
    - Session Token: dùng trong session-cookie authentication
    - Bearer Token: thường dùng trong OAuth 2.0 (đc mã hoá Base64) = Bearer + format(header.body.signature)
    - JWT (Json Web Token): chứa dữ liệu được mã hoá (jwt.io)

### Refresh Token
- LÀ 1 loại token dùng để cấp mới Access Token khi Access Token hết hạn, giúp ng dùng không phải đăng nhập lại.

### API Key
- Là 1 chuỗi ký tự duy nhất đc cấp cho ứng dụng hoặc ng dùng để truy cập API.
- Thường ko thay đổi và được sử dụng để nhận diện ứng dụng.
- Không chứa thông tin ng dùng mà chỉ xác định ứng dụng nào đang gọi API.
- Thường được cấp khi đăng ký API và lưu trong header hoặc query parameters.
- API Key khác OTP (One Time Password).

## Authentication methods
### Session - Cookie Auth
- Quy trình hoạt động từ đăng nhập đến xác thực API:
   -    1. Người dùng đăng nhập.
   -    2. Server xử lý và tạo Session.
   -    3. Trình duyệt gửi request kèm Cookie trong các API cần xác thực.
   -    4. Server kiểm tra Session và xác thực ng dùng.
   -    5. Đăng xuất.

### Basic Auth
- Là 1 phương thức xác thực đơn giản của HTTP, trong đó thông tin đăng nhập (username và password) được mã hoá bằng Base64 và gửi trong mỗi request.
- Cách hoạt động:
    -   1. Client gửi request không có thông tin xác thực.
    -   2. Server phản hồi yêu cầu xác thực (401 Unauthorized)
    -   3. Client gửi lại request với thông tin xác thực trong header
    -   4. Server kiểm tra thông tin đăng nhập.
            - Nếu hợp lệ: trả về 200 OK
            - Nếu sai: trả về 401 Unauthoried

### API Key
1. Tạo API Key
2. Gắn API key trong request
3. Gọi API
