# Getting started with API
## API?

### Là gì?
- Viết tắt của Application Programing Interface.
- Bộ quy tắc giúp phần mềm giao tiếp với nhau.

### Lịch sử?
- 1960s: khi các HĐH cần có 1 cách để các chương trình giao tiếp với nhau.
- Trở nên phổ biến khi web phát triển.

### Giải quyết bài toán gì?
- Các hệ thống, phần mềm có thể giao tiếp với nhau → phát triển độc lập và nhanh.
- Hiểu đơn giản: API giúp việc xây dựng hệ thống như chơi trò lắp ghép.

### Tại sao cần test API?
- Đảm bảo dữ liệu hoạt động đúng mong đợi.
- Phát hiện lỗi sớm.
- Đảm bảo hiệu năng.
- Bảo mật.

## Các hình thức test API phổ biến
- Functional Testing
- Load Testing
- Security Testing
- Integration Testing

## Các loại API phổ biến
- Web APIs (REST, SOAP, GraphQL)
    - REST API: 
        - Sử dụng các phương thức HTTP.
        - Đơn giản, dễ sử dụng và khả năng mở rộng cao.

    - SOAP API:
        - Giao thức XML.
        - Hệ thống enterprise cần tính bảo mật và có độ tin cậy cao.
    - GraphQL:
        - Ngôn ngữ do Facebook phát triển năm 2012.
        - Cấu trúc query phản ánh cấu trúc data trả về, dễ hiểu và maintain

- Library/Framework APIs
    - Cho phép lập trình viên sử dụng các chức năng có sẵn.
    - VD: Java API, .NET, Framework API., React API.

- Operating System APIs
    - Cho phép ứng dụng tương tác với HĐH.
    - VD: Window API, Linux Kernel API.

- Hardware APIs:
    - Cho phép phần mềm giao tiếp với phần cứng.
    - VD: Camera API, Printer API, USB API.

## Các công cụ phổ biến
- API manual:
    - cURL
    - Postman
    - IntelliJ IDE
    - Jmeter
    - SOAP UI

- API auto:
    - Playwright
    - RestAssured
    - Cypress
    - Karate
    - Katalon
    - Selenium

## XML?
- XML = eXtensible Markup Language.
- Một "ngôn ngữ đánh dấu", "tự giải thích".
- Chuẩn được W3 gợi ý dùng.
- Nếu lưu dạng file, thường có đuôi `.xml`


## Json?
- JSON = JavaScript Object Notation
- Là định dạng text, dùng format của Javascript Object
- Dùng để truyền dữ liệu, tương tự như xml, nhẹ hơn xml
- Không phụ thuộc vào ngôn ngữ lập trình.
- JSON cũng "tự giải thích" thông qua các key
- key - value
- Nếu lưu dạng file, thường có đuôi `.json`
