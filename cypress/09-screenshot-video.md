# Screenshots Cypress
- Mặc định, Cypress tự động chụp ảnh màn hình khi một test thất bại (failed) trong quá trình chạy ở chế độ headless (cypress run).
- Ảnh được lưu trong thư mục cypress/screenshots với tên dựa trên tên test suite và test case.
- Ví dụ: Nếu test  `login.spec.js` thất bại tại `it('should login')`, file ảnh có thể là:
```
cypress/screenshots/login.spec.js/should login -- failed.png
```

- Cấu hình tự động chụp: Trong file `cypress.config.js`, bạn có thể bật/tắt hoặc tùy chỉnh:
```js
module.exports = {
  e2e: {
    screenshots: {
      screenshotOnRunFailure: true, // Bật chụp ảnh khi test thất bại (mặc định: true)
      trashAssetsBeforeRuns: true, // Xóa ảnh cũ trước khi chạy (mặc định: true)
    },
  },
};
```

## Cú pháp
```bash
cy.screenshot('img_name', options);
```
- `img_name`: Tên file ảnh (tùy chọn). Nếu không chỉ định, Cypress dùng tên test.
- `options`: Đối tượng cấu hình, ví dụ:
    - `capture`: Chụp toàn bộ trang (fullPage), chỉ phần hiển thị (viewport), hoặc một phần tử cụ thể (runner).
    - `overwrite`: Ghi đè nếu file đã tồn tại (mặc định: false).

```ts
it("Capture screenshot & Vid", () => {
    cy.visit("https://playwrightvn.com/");
    // screenshot fullpage
    cy.screenshot("homepage");
    cy.wait(5000);
    // screenshot 1 phan
    cy.xpath("//h1[@class='blog-title']").screenshot("heading");
})
```

## Thay đổi folder lưu screenshots
- Trong `cypress.config.js`:
```ts
module.exports = {
  e2e: {
    screenshotsFolder: 'custom/screenshots', // Thay đổi thư mục lưu
  },
};
```

## Ứng dụng
- Debug: Xem trạng thái giao diện khi test thất bại.
- Báo cáo: Cung cấp bằng chứng trực quan cho đội ngũ hoặc khách hàng.
- Kiểm tra giao diện: So sánh ảnh chụp với ảnh chuẩn (dùng plugin như `cypress-image-snapshot`).

# Videos Cypress
- Videos trong Cypress ghi lại toàn bộ quá trình chạy test ở chế độ headless (cypress run), giúp bạn xem lại cách ứng dụng hoạt động trong suốt test
- Mặc định: Cypress tự động quay video khi chạy cypress run và lưu vào thư mục cypress/videos.
- File video: Được lưu dưới dạng .mp4 với tên dựa trên file spec.
- Cấu hình quay video: Trong `cypress.config.js`:
```js
module.exports = {
  e2e: {
    video: true, // Bật/tắt quay video (mặc định: true)
    videosFolder: 'custom/videos', // Th Stuart:5.0pt; font-family: inherit;">// Thay đổi thư mục lưu video
    videoCompression: true, // Nén video để giảm kích thước (mặc định: true)
  },
};
```

- Bật/tắt quay video:
    - Để tắt quay video, đặt `video: false` trong `cypress.config.js`.
