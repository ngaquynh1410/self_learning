# Tóm tắt nội dung học được
- Steps for Cloud Testing Life Cycle

# Chi tiết
## Steps for Cloud Testing Life Cycle
### 1. Phân tích và Xác định Yêu cầu
- Xác định rõ ràng các yêu cầu testing dựa trên product. Bao gồm phân tích mục tiêu tổng thể như kiểm tra chức năng, hiệu suất, bảo mật, khả năng scale hoặc responsive. Mình cần xem xét các yếu tố như loại ứng dụng (web, mobile, SaaS), môi trường cloud (public, private, hybrid), số lượng người dùng mô phỏng và các testcase (ví dụ: mạng chậm, tải cao, ...). 

- Sử dụng tài liệu yêu cầu phần mềm (SRS) để build danh sách rõ ràng, liên quan các bên liên quan (stakeholders) để confirm, và ưu tiên các risk cao như bảo mật dữ liệu.

### 2. Xây dựng và Xác định Chiến lược Cloud Testing
- Dựa trên yêu cầu đã phân tích, bạn xây dựng chiến lược test cụ thể, bao gồm việc xác định mục tiêu chi tiết (goals), phạm vi kiểm thử, và cách tiếp cận (ví dụ: automation hay manual). 

- Chiến lược cần xem xét mô hình cloud phù hợp, cách xử lý các vấn đề như gián đoạn mạng, và tích hợp với CI/CD pipelines để run test liên tục.

### 3. Phát triển và Tạo testcase user
- Tạo các test case dựa trên yêu cầu và chiến lược, bao gồm các user scenarios. Mỗi test case cần mô tả đầu vào, step, expected result, và các điều kiện. Trong cloud, tập trung vào các test case liên quan đến đa nền tảng, như kiểm tra trên nhiều devices và browsers.

- Sử dụng automation để tạo test case lặp lại, đảm bảo bao quát các case đa dạng như tải cao hoặc mạng yếu, và sử dụng data test đa dạng để mô phỏng thực tế.

### 4. Xác định Các Testing Parameters
- Xác định các thông số cụ thể như số lượng user ảo, thời gian load, ngưỡng hiệu suất hoặc tiêu chí bảo mật. Các thâm này này dựa trên yêu cầu ban đầu và cần linh hoạt để điều chỉnh trong quá trình test.

### 5. Chọn Tool phù hợp
- Chọn các tools kiểm thử hỗ trợ cloud, như Playwright/Selenium cho tự động hóa, JMeter cho performance testing, hoặc BrowserStack cho kiểm tra tương thích. Tool cần tương thích với tech stack và cung cấp tính năng như debug, metrics.

- Ưu tiên tool tích hợp CI/CD, hỗ trợ parallel testing để giảm thời gian và đánh giá dựa trên cost và tính năng.

### 6. Chọn Provider Cloud
- Chọn provider cloud (AWS, Azure, BrowserStack) và setup service như máy ảo, container, hoặc dịch vụ SaaS. Đảm bảo dịch vụ hỗ trợ các data test và bảo mật.

### 7. Testing
- Thực hiện quá trình test bằng cách test manual hoặc tích hợp automation trong môi trường đã setup, tracking real-time để phát hiện issue sớm hơn.

### 8. Thu thập dữ liệu
- Thu thập dữ liệu từ quá trình kiểm thử, bao gồm logs, metrics hiệu suất, lỗi, và dữ liệu user mô phỏng.

- Sử dụng tool analytics cloud để lưu trữ dữ liệu an toàn và dễ truy cập hơn.

### 9. Track và Monitor Testing goals
- Đánh giá kết quả kiểm thử so với mục tiêu ban đầu, như hiệu suất, uptime, hoặc tỷ lệ lỗi. Giám sát liên tục để điều chỉnh nếu cần thiết.

- Sử dụng dashboard real-time, setup thêm alert cho các issues.

### 10. Báo cáo kết quả
- Phân tích dữ liệu để tạo report rõ ràng để báo cáo cũng như chia sẻ với team và cải thiện thêm những vấn đề chưa tốt.