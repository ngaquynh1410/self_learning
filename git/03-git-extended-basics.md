
# [Git for QE] - Đẩy đưa cùng Git

---

## Check Lịch Sử Commit

Để xem được chi tiết lịch sử các commits, bao gồm các thông tin như author, email, commit message hay date-time, sử dụng lệnh:

```bash
git log
```

### Một số options khác:

- **--oneline**: Hiển thị mỗi commit trên 1 dòng, giúp lịch sử gọn gàng hơn.

```bash
git log --oneline
```

- **--graph**: Hiển thị biểu đồ nhánh.

```bash
git log --graph
```

- **--author=<name>**: Lọc các commit theo author name.

```bash
git log --author=<user.name>
```

---

## Sửa message Commit

Để sửa message commit gần nhất, sử dụng:

```bash
git commit --amend -m "New commit message"
```

### Lưu ý:

- Không nên sử dụng lệnh này nếu commit đã được push lên remote repository vì có thể gây conflict khi đồng bộ với người khác.

---

## Khôi Phục Thay Đổi

### Khôi phục 1 file về trạng thái của commit cuối

Để khôi phục 1 file về trạng thái commit cuối (xóa mọi thay đổi hiện có trong vùng Working Directory), sử dụng:

```bash
git restore <file_name>
```

### Khôi phục toàn bộ file về trạng thái của commit cuối

Tương tự như `git add .`, bạn có thể khôi phục toàn bộ:

```bash
git restore .
```

### Khôi phục file từ vùng Staging về Working Directory

Nếu bạn đã staged 1 file nhưng chưa commit và muốn đưa nó về lại Working Directory:

```bash
git restore --staged <file_name>
```

### Khôi phục 1 file từ commit cụ thể

Nếu cần khôi phục 1 file về trạng thái của commit cụ thể nào đó, sử dụng:

```bash
git restore --source=<commit_hash> <file_name>
```

Ví dụ:

```bash
git restore --source=congchuanga file.txt
```

### Khôi phục tất cả file từ commit cụ thể

Tương tự như khôi phục 1 file, đổi `<file_name>` thành `.` để áp dụng cho tất cả:

```bash
git restore --source=<commit_hash> .
```

### Lưu ý:

- Khi sử dụng `git restore`, bất kỳ thay đổi nào trong vùng Working Directory sẽ bị ghi đè.
- Trước khi restore, sử dụng `git stash` để backup nếu cần.

---

## Để Hủy Commit Cuối

Nếu commit đang ở vùng Repository và bạn muốn hủy, sử dụng:

```bash
git reset HEAD~1
```

### Các options khác:

- **--soft**: Giữ nguyên thay đổi trong vùng Staging.

```bash
git reset --soft HEAD~1
```

- **--hard**: Xóa hoàn toàn các thay đổi của commit. **Cẩn thận** khi dùng vì nó sẽ xóa sạch dữ liệu.

```bash
git reset --hard HEAD~1
```
