# Biến và kiểu dữ liệu trong Python
## 1. Biến trong Python
### 1.1 Khái niệm
- Biến là nơi lưu trữ giá trị trong bộ nhớ khi run chương trình.
- Trong Python, không cần khia báo kiểu dữ liệu của biến như các ngôn ngữ khác. Python auto xác định kiểu dữ liệu dựa trên gái trị mà mình gán cho nó.

### 1.2 Cách khai báo biến
```python
x = 10
name = "Alice"

print(x)
print(name)
```

### 1.3 Quy tắc đặt tên biến
- Tên biến phải bắt đầu bằng chữ cái hoặc dấu gạch dưới `_`, theo sau có thể là chữ cái, số hoặc dấu gạch dưới.
- Tên biến không được trùng với các từ khoá trong Python như `if`, `else`, `while`, ...
- Tên biến phân biệt chữ hoa chữ thường, ex: `name` và `Name` khác nhau.

## 2. Data type
### 2.1 int (Số nguyên)
- Biểu diễn các số nguyên (không có phần thập phân)
- Ex: 
```python
age = 25
```

### 2.2 `float` (Số thực)
- Biểu diễn các só thực (có phần thập phân)
- Ex:
```python
price = 20.00
```

### 2.3 `str` (Chuỗi)
- Biểu diễn các chuỗi văn bản
- Ex:
```python
name = "Nga"
greeting = 'Hello'
```

### 2.4 `bool` (Boolean)
- Biểu diễn giá trị đúng/sai (True/False)
- Ex:
```python
is_active = True  # Giá trị đúng
is_sunny = False  # Giá trị sai
```

