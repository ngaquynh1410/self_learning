## Merge

### Khái niệm

- Merge code là gộp code từ nhánh này vào nhánh kia.

### Merge strategy (chiến lược Merge)

Khi hợp nhất các thay đổi từ hai nhánh, Git cung cấp một số options để thực hiện quá trình hợp nhất sao cho phù hợp với nhu cầu của mỗi dự án. Có 2 merge strategy phổ biến sẽ được giới thiệu cho mọi người:

- **Fast-forward merge**
    - Khi merge **không** tạo ra commit merge.
    - **Xảy ra khi** **không** có thay đổi nào trên branch chính **kể từ lúc** tạo nhánh feature.

- **Three way merge**
    - Khi merge **có tạo ra commit merge.**
    - Xảy ra khi bạn muốn merge feature branch vào branch chính, mà lịch sử của 2 branch này đã có sự khác nhau.
    - Trong cách này Git sẽ so sánh các thay đổi từ hai nhánh và thực hiện hợp nhất từng phần lại.

## Rebase

### Khái niệm

- `Rebase` là cách “tái sắp xếp” lịch sử của một nhánh sao cho các commit mới của nhánh đó nằm trên cùng lịch sử của một nhánh khác.
- Back lại phần merge three way merge
    - Tạo ra 1 commit nữa (Nhiều công ty họ không muốn tạo ra 1 commit như này)
    - Các commit bị rối
- Để giữ lịch sử commit sạch sẽ và dễ đọc, đặc biệt muốn tránh các commit merge không cần thiết thì mình sẽ dùng tới **Rebase**
- Ví dụ: commit trên github Playwright

### Cách hoạt động

- Git sẽ di chuyển tất cả commit từ nhánh hiện tại (main) lên đỉnh của nhánh feature của mình.
- Sau đó nó sẽ bắt đầu thực hiện merge các commit từ branch feature vào branch main giống như **Fast-forward merge**
- **Lệnh:** `git rebase main`
- Đứng tại branch muốn rebase (ví dụ feat/A)


## Squash

### Khái niệm

- `Squash` là hành động gộp nhiều commit lại thành một commit duy nhất. Điều này làm cho lịch sử commit ngắn gọn hơn, dễ theo dõi và giúp hạn chế những commit không cần thiết.
- Ví dụ:
    - Làm bài tập lesson 10: ngày 1 làm 1 phần 1 commit, ngày 2 làm nốt phần 2 thêm 1 commit nữa.
    - Thì để gộp 2 commits trên thành 1 commit là feat: add exercise lesson 10 thôi thì mình sẽ dùng tới git squash.
- Lệnh: `git rebase -i HEAD~{quantity_commit}`