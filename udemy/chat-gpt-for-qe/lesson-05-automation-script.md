> https://www.udemy.com/course/manual-and-automation-software-testing-with-help-of-chatgpt/learn/lecture/43343346#overview

# Assistance while writing automation test scripts

# Nội dung chính
- ChatGPT có thể support tester: 
    - Đưa ra ví dụ về 1 test cases auto với 1 tools/framework auto cụ thể với 1 ngôn ngữ nhất định
        - Prompt: Give me example automation script Python with selenium for same functionality of a web application.
        - Với kinh nghiệm cá nhân, mình thấy nếu chỗ này mn muốn có 1 example sát nhất với test case cần automate thì cần cung cấp càng chi tiết càng tốt domain và steps trong TCs.
    - Support tester trace lỗi auto khi có issue xảy ra: Nếu trong quá trình code có issue (compline error) có thể cop cả đoạn code ấy lên ChatGPT để xem code có đang gặp vấn đề gì ko?
        - Prompt: Find the bug or error on the test script.

# Kinh nghiệm cá nhân
- Ngoài các issue trong quá trình code (compline error), ChatGPT có thể support tester trace các issue trong quá trình run (runtime error). Tester có thể cop mã / msg lỗi trả về khi run auto để ChatGPT define về gợi ý cách resolve issue