# Handling Table
## Check number rows & column
- Lấy xpath của `tr` -> dùng `should('have.length', '10');` để count row.
- Lấy xpath của `td` -> dùng `should('have.length', '10');` để count column.

## Read all the rows & Columns data in the first page
```js
    cy.get("//tr")
        .each($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get("td").each(($col, index, $cols) => {
                    cy.log($col.text());
                })
            })
    }
```
- Tìm tất cả element `tr`

- `.each($row, index, $rows) => { ... })`: lặp qua từng phần tử trong tất cả các phần tử get ở trên.
    - `$row`: đại diện cho từng phần tử `tr` trong list
    - `index`: chỉ số của hàng hiện tại (start từ 0)
    - `$row`: tập hợp tất cả các `tr`

- `cy.wrap($row).within(() => { ... })`: 
    - `cy.wrap($row)`: Bọc phần tử `$row` (một hàng `<tr>`) thành một đối tượng Cypress để có thể sử dụng các lệnh Cypress như `.within()`.
    - `.within(() => { ... })`: Giới hạn phạm vi của các lệnh Cypress tiếp theo chỉ trong phần tử <tr> hiện tại. Điều này đảm bảo các lệnh sau (như `cy.get("td")`) chỉ tìm kiếm bên trong hàng đó, không phải toàn bộ DOM.
    - Ví dụ: Nếu bảng có nhiều hàng, `.within()` giúp chỉ tìm các `<td>` trong hàng hiện tại, tránh nhầm lẫn với các `<td>` ở các hàng khác.

- `cy.get("td").each(($col, index, $cols) => { ... })`
    - `cy.get("td")`: Tìm tất cả các phần tử `<td>` trong phạm vi của hàng `<tr>` hiện tại (do .within()).
    - `.each(($col, index, $cols) => { ... })`: Lặp qua từng cột `<td>` trong hàng.
        - `$col`: Đại diện cho từng phần tử `<td>` (một cột).
        - `index`: Chỉ số của cột hiện tại trong hàng (bắt đầu từ 0).
        - `$cols`: Tập hợp tất cả các cột `<td>` trong hàng hiện tại
