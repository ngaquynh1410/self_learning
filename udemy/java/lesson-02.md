# Xuất dữ liệu ra màn hình trong Java
## Các cách xuất dữ liệu
### 1.1 printIn() và  print()
- `System.out`: Đối tượng tĩnh của class PrintStream: In ra console
    - `printIn()`: Hiển thị + xuống dòng
    - `print()`: Hiển thị + không xuống dòng

- Ex
```java
public class Main {
  public static void main(String[] args) {
      System.out.println("Hello, World!"); // Xuất ra và xuống dòng
      System.out.print("This is Java.");  // Xuất ra và không xuống dòng
      System.out.print(" Let's learn!");  // Tiếp tục trên cùng một dòng
  }
}
```

### 1.2 Sử dụng System.out.printf() và System.out.format()
- Các placeholder phổ biến
```java
Placeholder     Ý nghĩa                     Ví dụ               
-----------------------------------------------------
%d              Hiển thị số nguyên          25                  
%f              Hiển thị số thực            3.141590            
%.2f            Số thực, 2 chữ số thập phân 3.14               
%s              Hiển thị chuỗi              Hello               
%c              Hiển thị ký tự              'A'                 
%b              Hiển thị boolean            true                
%n              Xuống dòng                                   
```

- Ex:
```java
public class Main {
  public static void main(String[] args) {
      int age = 25;
      String name = "John";
      double score = 89.5;

      System.out.printf("Name: %s, Age: %d, Score: %.2f", name, age, score);
  }
}
// Output: Name: John, Age: 25, Score: 89.50
```
### Kết hợp string trong output
- Sử dụng toán tử cộng
- Sử dụng phương thức concat()
- StringBuilder: tạo chuỗi động vs hiệu suất cao
- StringBuffer: tương tự StringBuilder nhưng đồng bộ

```java
public class Main {
  public static void main(String[] args) {
      String firstName = "Jane";
      String lastName = "Doe";
      System.out.println("Full Name: " + firstName + " " + lastName);
  }
}
// Output: Full Name: Jane Doe
```


### Output lỗi với System.err
- Dùng để hiển thị lỗi hoặc thông báo quan trọng trong console
- System.out và System.err đều xuất ra màn hình console, nhưng có thể cấu hình để tách chúng ra (ví dụ: ghi System.err vào file log).
- Ex:
```java
public class Main {
  public static void main(String[] args) {
      System.out.println("This is normal output.");
      System.err.println("This is error output.");
  }
}
// Output: 
// This is normal output.
// This is error output.
```

### Xuất dữ liệu dạng bảng
- Sử dụng printf() hoặc format() để căn chỉnh cột.
- Ex:
```java
public class Main {
  public static void main(String[] args) {
      System.out.printf("%-15s %-10s %-5s%n", "Name", "Age", "Score");
      System.out.printf("%-15s %-10d %-5.1f%n", "Alice", 30, 89.5);
      System.out.printf("%-15s %-10d %-5.1f%n", "Bob", 25, 95.0);
  }
}
/* Output:
Name            Age       Score
Alice           30        89.5
Bob             25        95.0
*/
```

