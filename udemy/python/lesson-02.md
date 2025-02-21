# Cài đặt môi trường
## 1. Cài đặt Python và IDE
### Cài Python
- Truy cập trang chủ của Python tại python.org.
- Tải về phiên bản Python mới nhất dành cho hệ điều hành của bạn (Windows, macOS, Linux).
- Trong quá trình cài đặt, nhớ đánh dấu vào tùy chọn "Add Python to PATH" để Python được thêm vào biến môi trường.
- Hoàn tất cài đặt và kiểm tra bằng cách mở terminal (hoặc Command Prompt trên Windows) và gõ lệnh:
    ```
    python --version
    ```
- Nếu Python được cài đặt thành công, bạn sẽ thấy thông tin phiên bản Python.

### Cài đặt IDE
- VS Code
- PyCharm

## 2. Cách kiểm tra version Python
- Mở terminal gõ lệnh:
```
python --version
```
or
```
python3 --version
```

## 3. Cài đặt công cụ hỗ trợ pip (quản lý thư viện)
- `pip` là công cụ quản lý thư viện trong Python => dễ cài đặt và quản lý các thư viện bên ngoài để sự dụng trong project.
- Nếu dùng python 3 thì lệnh là pip3
- Kiểm tra pip:
```
pip --version
```
- Cài đặt thư viện bằng pip
```
pip install <tên_thư_viện>
```
- Ex:
```
pip install requests
```
- Update pip
```
python -m pip install --upgrade pip
```