> https://www.udemy.com/course/manual-and-automation-software-testing-with-help-of-chatgpt/learn/lecture/43343284#overview

# Assistance with test monitoring and control

## Status reporting 
- Có thể sử dụng ChatGPT để tạo 1 report về status của quá trình testing
- Ví dụ, bạn là QE của 1 team đang thực hiện kiểm thử cho 1 e-commerce website. Hiện dự án đang trong giai đoạn thực hiện integration testing, bao gồm kiểm thử integrate API và e2e flows. Trong lúc này, khách hàng yêu cầu được biết tiến độ testing của giai đoạn này để lên kế hoạch kiểm thử cho giai đoạn system testing. Sau đây là flow dùng chatGPT để build test report: 
    - Đặt yêu cầu với ChatGPT: Can you help me summarize our testing status progress and mention any challenges we're currently facing by writing the status report? (Bạn có thể tổng hợp trạng thái kiểm thử và những thách thức hiện chúng tôi đang đối mặt qua 1 test report được không?)
    - ChatGPT sẽ yêu cầu bạn cung cấp thêm thông tin về dự án, trang thái hiện tại, kỹ thuật test được sử dụng, những issue đang gặp phải. Sau khi được cung cấp, ChatGPT sẽ tạo 1 test report dựa trên những thông tin bạn cung cấp.
    - Không được đề cập trong khóa học nhưng với kinh nghiệm cá nhân, bạn hoàn toàn có thể cung cấp thêm thông tin và yêu cầu cho ChatGPT cho đến khi nhận được test report sát nhất với yêu cầu. 

## Metric analysis
- Trong quá trình thực hiện test, ví dụ với vai trò QE lead, có nhiều lúc bạn phải thực hiện phân tích những phase test của cả team xem có vấn đề gì không và có thể improve gì không, và ChatGPT có thể hỗ trợ chúng ta. 
- Ví dụ, hiện team bạn đang làm việc theo Scum, và cần thực hiện system testing 2 tuần 1 lần. Sau khi tổng hợp thời gian test, số lượng issue và phần trăm case passed trong 3 lần test gần đây, bạn thấy thời gian test lần đầu là 6h lại ít hơn lần thứ 3 là 7h. Để phân tích, chúng ta có thể dùng ChatGPT với: 
    - Prompt: I'd like to analyze our test metrics. I will provide you an identify any trends or patterns. We have data on test execution times, the tag density, and pass rates. Can you help me gain insights and suggest areas for improvement based on these metrics? (Đặt vấn đề - Nêu những data hiện có để phân tích - Nêu yêu cầu, mong muốn).
    - Sau khi bạn đặt vấn đề, ChatGPT sẽ hỏi lại để yêu cầu thêm thông tin cụ thể. Bạn cung cấp những thông tin về 3 lần kiểm thử phía trên, ChatGPT sẽ phân tích những yếu tố sẽ ảnh hưởng đến thời gian test, lỗi hay tỉ lệ passed (kết quả phân tích sẽ phụ thuộc rất lớn vào data bạn gửi cho ChatGPT). Ở đây, chatGPT sẽ tập trung vào những nguyên nhân khiến thời gian kiểm thử của lần 3 lâu hơn lần 1. 