
# [Git for QE] - Remote repository và 1 số lệnh cho flow cơ bản

---

## Remote Repository

Ở phần trước, chúng ta đã tìm hiểu về các vùng cơ bản của Git trên local. Trong phần này, sẽ có thêm một vùng mới: **Remote repository**.

### Remote Repository là gì?

- Thường là các dịch vụ như GitHub, GitLab, BitBucket...
- Là một kho lưu trữ source code nằm trên máy chủ từ xa.
- Cho phép nhiều người làm việc trên cùng một dự án và chia sẻ source code với nhau.

Ví dụ: Bạn tạo một repo mới trên GitHub và chia sẻ link tới team để mọi người cùng làm việc. Đó chính là remote repository.

---

## Clone

### Git clone là gì?

- **Clone**: Hành động copy toàn bộ remote repository về máy tính của bạn.
- Bao gồm: source code, lịch sử commit, và các branches.

### Cú pháp:

```bash
git clone <ssh_key>/<HTTPS>
```

Ví dụ: Team của bạn đã đẩy source code dự án lên GitLab, bạn cần lấy toàn bộ source code về để bắt đầu công việc. Chỉ cần copy ssh_key hoặc HTTPS của project từ GitLab và clone về.

---

## Branch (Nhánh)

Trong một team nhiều người, nếu làm việc trên một nhánh duy nhất sẽ dễ dẫn đến tình trạng sửa cùng file hoặc dòng code, gây conflict. Để giải quyết vấn đề này, **branch** được sử dụng.

### Branch là gì?

- Cho phép bạn code các feature riêng mà không ảnh hưởng đến source code chính (thường là nhánh `main` hoặc `master`).

### Một số lệnh liên quan:

- Tạo 1 branch mới:

```bash
git branch <branch_name>
```

- Chuyển đổi giữa các branch:

```bash
git checkout <branch_name>
```

- Kết hợp tạo mới và chuyển sang branch đó:

```bash
git checkout -b <branch_name>
```

---

## Pull

### Git pull là gì?

- Pull cập nhật repository local với các thay đổi mới nhất từ remote repository.
- Bao gồm việc: **fetch** và **merge**.

### Cú pháp:

```bash
git pull <remote_name> <branch_name>
```

Ví dụ: Để lấy code mới nhất từ remote repository (nhánh chính):

```bash
git pull origin master
```

### Lưu ý:

- Hãy thường xuyên pull code để tránh bị outdate và giảm thiểu conflict.

---

## Fetch

### Git fetch là gì?

- Fetch lấy các thay đổi mới nhất từ remote repository **nhưng không tự động merge** vào repository local.

### Khi nào dùng?

- Dùng khi bạn chỉ muốn lấy dữ liệu từ remote (ví dụ: các branch) mà không muốn ảnh hưởng đến code local hiện tại.

