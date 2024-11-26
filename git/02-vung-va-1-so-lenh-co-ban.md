
# [Git for QE] - Vùng và một số câu lệnh cơ bản trong Git?

## Git có những vùng nào?

Cơ bản thì Git bao gồm 3 vùng:

1. **Working directory**: chứa các file mới hoặc file có thay đổi.
2. **Staging area**: chứa các file đưa vào chuẩn bị commit (để tạo ra các phiên bản).
3. **Repository**: chứa các commits (hay là các phiên bản đó).

---

## Một số lệnh cơ bản với Git

### Khởi tạo

Để khởi tạo hay định nghĩa thư mục mới được Git quản lý, sử dụng lệnh dưới đây:

```bash
git init
```

---

### Thêm file vào vùng Staging

Để thêm các files thay đổi vào vùng "staging area" hay "chuẩn bị" các thay đổi để commit sau đó, có thể dùng:

- Thêm 1 file:

```bash
git add <file>
```

- Thêm tất cả các file được thay đổi:

```bash
git add .
```

---

### Tạo phiên bản với message

Để lưu các thay đổi đã được thêm vào staging area vào repository với 1 message, sử dụng:

```bash
git commit -m "<message>"
```

- Mỗi lần commit giống như việc chụp ảnh lại trạng thái của repo tại thời điểm đó, sau này có thể quay lại trạng thái này bất cứ lúc nào.

**Lưu ý**: Tuỳ mỗi công ty sẽ có convention (bộ quy tắc) đối với commit riêng. Nếu mới vào project, nên hỏi để tránh bị reviewer nhắc nhở. Ví dụ convention tại lớp auto:

- **type: short_description**
  - **type**:
    - `feat`: thêm tính năng, test case mới.
    - `chore`: sửa nhỏ lẻ, chính tả, xoá file,...
    - `fix`: sửa lỗi một test nào đó.
  - **short_description**: mô tả ngắn gọn nội dung commit.

---

### Đẩy commit từ "repository local" lên "remote repository"

Để cập nhật "remote repository" với các commit mới, sử dụng lệnh:

```bash
git push <remote_name> <branch_name>
```

Ví dụ:

```bash
git push origin main
```

**Lưu ý**: Chỉ đẩy được code từ vùng "repository local".

---

### Xem trạng thái file

Để kiểm tra file đang ở vùng nào, sử dụng:

```bash
git status
```

Kết quả hiển thị sẽ gồm các keyword:

- **Untracked files** (file chưa được Git kiểm soát): nằm ở Working directory.
- **Changes to be committed** (change đang chờ để commit): file đang nằm ở Staging.
