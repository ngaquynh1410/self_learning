# Tổng quan về Java
## Giới thiệu về Java
- Là ngôn ngữ lập trình hướng đối tượng (OOP), chạy trên nhiều nền tàng.
- Viết bởi James Gosling và đội ngũ của ông (1990s).

## Java giải quyết bài toán gì?
- Bài toán: tính tương thích, khả năng di động: multi-platform deployment.
- Java: mô hình "Write Once, Run Anywhere".

## Bắt đầu với Java
### Các thành phần cơ bản của Java
- JVM (Java Virtual Machine): Máy ảo của java
    - Là môi trường runtime chạy mã bytecode của Java.
    - Đảm bảo tính độc lập nền tảng: Chương trình Java có thể chạy trên mọi hệ điều hành có JVM.
    - Thành phần chính: 
        - CLass Loader
        - Bytecode Verifier
        - Interpreter/JIT (Just in time) Compiler: biên dịch bytecode thành machine code
        - Garbage Collector: dọn rác
- JDK
    - Là bộ công cụ để phát triển ứng dụng Java.
    - JDK giống như studio phim có thể tạo và phát phim.
    - Thành phần:
        - JRE
        - JVM
        - Development Tools
        - javac: biên dịch -> bytecode
        - jdb: debug không giao diện
        - javadoc: tạo doc
        - jar: đóng gói

- JRE
    - Là môi trường để chạy các ứng dụng Java.
    - Dùng cho người dùng cuối để chạy chương trình, nhưng không thể biên dịch hay phát triển.
    - JRE giống như đầu DVD chỉ có thể phát phim, ko tạo phim.
    - Thành phần:
        - JVM
        - Java Libraries

### Các giai đoạn
1. Viết source code: viết code `.java`
2. Biên dịch (compile): source code được biên dịch bằng trình biên dịch `javac`, tạo ra file bytecode `.class`.
3. Run trên JVM: JVM đọc và run bytecode `.class`, chuyển đổi thành mã máy của nền tảng cụ thể.
4. JIT (Just in time) compilation: JVM sử dụng trình biên dịch JIT để biên dịch bytecode thành machine code trong thời gian chạy.
5. Garbage Collection: JVM quản lý và auto giải phóng bộ nhớ ko cần thiết.

#### 1 số Website Chạy code online
- https://www.w3schools.com/java/tryjava.asp?filename=demo_casting_wide
- https://www.programiz.com/java-programming/online-compiler/
- https://www.tutorialspoint.com/online_java_compiler.php