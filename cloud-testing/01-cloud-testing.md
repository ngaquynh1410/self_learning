# Tóm tắt nội dung học được
- Cloud Testing là gì?
- Sự khác nhau giữa traditional testing và cloud testing
- Các loại testing trong Cloud Testing

# Chi tiết
## Cloud Testing là gì?
### Định nghĩa
- Cloud Testing là quá trình thực hiện kiểm thử phần mềm (software testing) bằng cách sử dụng các resource, công cụ và service được cung cấp trên nền tảng cloud (cloud). Thay vì build và maintain cơ sở hạ tàng testing on premise, cloud testing cho phép run các test trên env ảo, được cung cấp bởi 1 số provider cloud như BrowserStack, SauceLabs, AWS Device Farm, hoặc LambdaTest.

### Đặc điểm
- Tính linh hoạt: Dễ dàng scale để test trên nhiều devices, browser, hoặc hệ điều hành khác nhau.
- Tiết kiệm chi phí: Không cần đầu tư phần cứng hoặc maintain server.
- Tốc độ: Hỗ trợ run parallel testing (test song song) để tiết kiệm time test.
- Khả năng truy cập: Có thể truy cập từ bất kỳ đâu, chỉ cần có kết nối internet.
- Loại testing: functional testing, performance testing, compatibility testing, security testing, ...

### Ví dụ:
- Run test Playwright để verify UI web trên nhiều browsers khác nhau thông qua BrowserStack.
- Test mobile trên nhiều devices Android/IOS qua AWS Device Farm.

## Traditional Testing với Cloud Testing
| Tiêu chí | Traditional Testing | Cloud Testing |
| :--- | :--- | :--- |
| **Cơ sở hạ tầng** | Yêu cầu phần cứng (máy chủ, thiết bị kiểm thử) và cài đặt môi trường local. | Sử dụng cloud, không cần đầu tư phần cứng, chỉ cần tài khoản dịch vụ. |
| **Chi phí** | Chi phí ban đầu cao (mua server, thiết bị) và chi phí bảo trì liên tục. | Chi phí thấp hơn, trả theo nhu cầu (pay-as-you-go), phù hợp với project ngắn hạn. |
| **Khả năng mở rộng** | Khó mở rộng nhanh, cần mua thêm thiết bị hoặc cấu hình thủ công. | Dễ dàng mở rộng, hỗ trợ hàng trăm devices/browsers. |
| **Tốc độ triển khai**| Chậm, cần thời gian thiết lập môi trường (cài đặt OS, browser, driver, ...). | Nhanh, môi trường sẵn sàng từ provider, hỗ trợ parallel testing. |
| **Tính linh hoạt** | Giới hạn bởi số lượng thiết bị có sẵn, khó kiểm thử đa nền tảng. | Linh hoạt, hỗ trợ kiểm thử cross-browser, cross-device (web, mobile, desktop). |
| **Bảo trì** | Cần team IT để quản lý, cập nhật phần mềm/phần cứng. | Provider cloud chịu trách nhiệm bảo trì và cập nhật. |
| **Khả năng truy cập**| Giới hạn ở mạng nội bộ hoặc thiết bị local, khó làm việc remote. | Truy cập từ bất kỳ đâu qua internet, phù hợp với team remote. |
| **Nhược điểm** | Chi phí cao, chậm triển khai, khó mở rộng cho project lớn. | Phụ thuộc vào kết nối internet, có thể phát sinh chi phí nếu không qxuản lý tốt. |

### Khi nào nên dùng Traditional Testing?
- Phù hợp cho các hệ thống yêu cầu bảo mật cao ví dụ như ngân hàng hay quân sự hoặc khi cần test trên các thiết bị nội bộ không thể tái hiện trên cloud.

### Khi nào nên dùng Cloud Testing?
- Khi cần test cross-browser, cross-device testing.
- Khi project yêu cầu triển khai, tối ưu chi phí hoặc tích hợp với CI/CD pipeline.

## Các loại testing trong Cloud Testing
### 1. Functional Testing
#### 1.1. System Verification Testing
- System Verification Testing verify các tính năng của ứng dụng tích hợp và hoạt động đúng như yêu cầu không.
- Mục đích:
    - Đảm bảo các chức năng (ví dụ: btn Login, form gửi data) hoạt động có đúng không.
    - Verify tích hợp các modules với các hệ thốngd bên ngoài

- Ví dụ: Sử dụng Playwright (TypeScript) hoặc Selenium (Python) để chạy các test end-to-end trên BrowserStack hoặc LambdaTest.

#### 1.2. Acceptance Testing
- Kiểm thử được thực hiện trên môi trường cloud để confirm rằng ứng dụng đáp ứng expect của end user trước khi bàn giao.
- Mục đích: Đảm bảo sản phẩm đáp ứng các yêu cầu nghiệp vụ và sẵn sàng triển khai.
- Ví dụ: Chạy UAT trên LambdaTest để kiểm tra xem giao diện ứng dụng e-commerce có đáp ứng yêu cầu user trên iOS và Android không. Sau đó thu thập phản hồi từ user thực tế thông qua dashboard của cloud provider.

#### 1.3. Interoperability Testing
- Kiểm tra khả năng hoạt động của ứng dụng trên các nền tảng khác nhau và khi chuyển đổi giữa các cơ sở hạ tầng cloud mà không gặp vấn đề.
- Mục đích: Đảm bảo tính linh hoạt và hiệu suất ổn định khi ứng dụng tích hợp với các hệ thống hoặc di chuyển giữa các provider cloud.
- Ví dụ: Kiểm tra ứng dụng web trên SauceLabs khi tích hợp với database trên Azure, đảm bảo không có lỗi kết nối.

### 2. Non-Functional Testing
#### 2.1. Availability Testing
- Đảm bảo ứng dụng trên cloud luôn sẵn sàng hoạt động (uptime 24/7), kể cả khi có thay đổi hạ tầng từ các provider cloud.
    - Mô phỏng các testcase thay đổi hạ tầng (vd: chuyển region trên AWS) và kiểm tra uptime.
    - Sử dụng công cụ giám sát như AWS CloudWatch hoặc dashboard của BrowserStack để đo lường tính khả dụng.
- Mục đích: Ngăn chặn tác động tiêu cực đến user trong các hoạt động quan trọng (mission-critical tasks).

#### 2.2. Multi-Tenancy Testing
- Kiểm tra hiệu suất và bảo mật của ứng dụng khi nhiều người dùng (tenants) truy cập đồng thời trên cùng một cá thể cloud.
    - Sử dụng JMeter hoặc Locust để mô phỏng nhiều tenant truy cập cùng lúc trên provider cloud.
    - Kiểm tra quyền truy cập và bảo mật dữ liệu trên provider cloud với secure tunnel.
- Mục đích: Đảm bảo data isolation và hiệu suất không bị ảnh hưởng khi có nhiều người dùng.

#### 2.3. Performance Testing
- Đánh giá tốc độ, khả năng đáp ứng, và độ ổn định của ứng dụng dưới các điều kiện load khác nhau, bao gồm các loại kiểm thử cụ thể:
    - Load Testing: Đo lường response với lượng người dùng mô phỏng.
    - Stress Testing: Đánh giá khả năng hoạt động dưới tải cực đại.
    - Endurance/Volume Testing (Kiểm thử độ bền/khối lượng): Kiểm tra hiệu suất trong thời gian dài hoặc với khối lượng dữ liệu lớn.
    - Scalability Testing (Kiểm thử tính mềm dẻo và khả năng mở rộng): Đánh giá khả năng scale up hoặc scale down tài nguyên theo nhu cầu.

- Mục đích: Phát hiện điểm tắc nghẽn, đảm bảo ứng dụng hoạt động tối ưu dưới các điều kiện khác nhau, kể cả khi mạng chậm hoặc tải giảm.

#### 2.4. Security Testing
- Kiểm tra để đảm bảo dữ liệu người dùng và ứng dụng trên cloud được bảo vệ khỏi truy cập trái phép, duy trì tính toàn vẹn và quyền riêng tư.
    - Sử dụng công cụ như OWASP ZAP hoặc Burp Suite để quét lỗ hổng.
    - Đảm bảo tuân thủ GDPR/SOC2.
- Mục đích: Ngăn chặn các lỗ hổng bảo mật như SQL injection, XSS, hoặc rò rỉ dữ liệu.

#### 2.5. Disaster Recovery Testing
- Kiểm tra khả năng khôi phục của ứng dụng sau các sự cố như mất mạng, lỗi server, hoặc tải cực đại, đảm bảo không mất dữ liệu và giảm thiểu downtime.
    - Mô phỏng lỗi server trên provider cloud và kiểm tra khả năng khôi phục từ backup.
    - Kiểm tra failover để đảm bảo ứng dụng chuyển sang server dự phòng mượt mà.
- Mục đích: Đánh giá thời gian khôi phục (RTO) và mức độ mất dữ liệu (RPO).

#### 2.6. Scalability Testing
- Kiểm tra khả năng của ứng dụng trong việc scale up hoặc scale down tài nguyên theo nhu cầu mà vẫn duy trì hiệu suất.
    - Tăng số lượng thiết bị hoặc người dùng để kiểm tra scale up.
    - Giảm tài nguyên để kiểm tra scale down.

#### 2.7. Compatibility Testing
- Đảm bảo ứng dụng hoạt động tốt trên các trình duyệt, hệ điều hành, thiết bị, ngôn ngữ, và vùng miền khác nhau.
   -  Kiểm thử khả năng tương thích với quy trình nghiệp vụ: Đảm bảo ứng dụng hỗ trợ các luồng công việc cụ thể (vd: quy trình thanh toán).
    - Kiểm thử tương thích với trình duyệt: Kiểm tra trên Chrome, Firefox, Safari, Edge, ...
    - Kiểm thử tương thích với hệ điều hành: Kiểm tra trên Windows, macOS, Android, iOS.
    - Localization Testing: Đảm bảo ứng dụng hỗ trợ ngôn ngữ và định dạng vùng miền (vd: tiếng Việt, định dạng ngày giờ).
    - Internationalization Testing: Kiểm tra khả năng hỗ trợ đa ngôn ngữ và vùng miền mà không cần thay đổi source code.
    - Backward Compatibility Testing: Đảm bảo ứng dụng hoạt động trên các phiên bản cũ của trình duyệt/hệ điều hành.
- Mục đích: Cung cấp trải nghiệm người dùng đồng nhất trên mọi nền tảng và đáp ứng các yêu cầu nghiệp vụ.

