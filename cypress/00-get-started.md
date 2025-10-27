# Get Started
## Why Cypress?
### Chúng ta học gì?
- Những giải pháp Cypress cung cấp cho testing
- Những tính năng của Cypress App, Cypress Cloud, UI Coverage, và Cypress Accessibility.
- Sứ mệnh và những điều chúng tôi tin tưởng vào
- Sự khác biệt chính giữa Cypress và các tool testing khác

### Tóm tắt
- Cypress là thế hệ tiếp theo của front end testing tool build cho web hiện đại. Chúng tôi giải quyết những điểm khó khăn chính mà team phải gặp phải khi testing app hiện đại và maintain những test suites.
- Người dùng của chúng tôi thường là dev, QA Engineers, và teams đang tìm để build web app và phát triển chất lượng những sản phẩm đang có.
- Cypress cung cấp giải pháp cho:
    - End-to-end testing
    - Component testing
    - Accessibility testing
    - UI Coverage
    - và thêm nữa...

- Cypress có thể test tất cả run trên browser và đưa ra thông tin chi tiết để làm thế nào cải thiện được hiệu suất của test suite và chất lượng app của bạn.

### Products
- Cypress App, miễn phí, open source, app install ở local để viết và run test.
- Cypress Cloud, dịch vụ phải trả tiền để recording test, surfacing kết quả test, và cung cấp thêm về test analytics.
- UI Coverage, 1 giải pháp premium cung cấp 1 giao diện tổng quan về test converage trên tất cả các page và component trong app của bạn, cung cấp những insights rõ ràng hơn về những lĩnh vực chưa được khám phá mà mọi người đều hiểu được.
- Cypress Accessibility, 1 giải pháp premium cung cấp kiểm tra khả năng truy cập, nó sẽ giúp detect rào cản với những người không có khả năng sử dụng ứng dụng của bạn.

Cypress là giải pháp mạnh mẽ để cải thiện chất lượng sản phẩm của bạn.
- First: Cypress giúp bạn set up và bắt đầu viết test hàng ngày khi bạn build app dưới local. Test Driven Development là nhất!
- Next: Sau khi build bộ test và tích hợp Cypress với CI Provider của bạn, Cypress Cloud có thể record quá trình test chạy, hiển thị chính xác những gì test chạy trong Test Replay. Bạn không bao giờ phải hỏi: "Tại sao nó lại fail?"
- Finally: Thêm Cypress Accessibility để nhận được feedback liên tục về vấn đề khả năng truy cập và hồi quy, và UI Coverage đảm bảo bạn kiểm tra mọi phần của ứng dụng.

### Features
- Dưới đây là list những tính năng chính của mỗi product
#### Cypress App
- Time travel: Cypress takes snapshots khi các test của bạn chạy. Hover chuột qua các lệnh Command Log để xem chính xác những gì xảy ra ở mỗi step.
- Debuggability: Không cần đoán lý do kiểm thử thất bại. Debug trực tiếp từ các công cụ quen thuộc như Developer Tools. Thông báo lỗi dễ đọc và stack traces giúp debug nhanh hơn.
- Automatic Waiting: Không bao giờ thêm waits hoặc sleeps vào test. Cypress auto wait cho commands và assertion trước khi moving on. No more async hell.
- Spies, Stubs, and Clocks: Kiểm tra và control behavior của functions, server phản hồi hoặc thời gian. Bạn có thể chặn network traffic nếu muốn.
- Consistent Result: Kiến trúc của chúng tôi không sử dụng Selenium hoặc WebDriver. Chào đón những test nhanh chóng, nhất quán và test đáng tin cậy, không có lỗi.
- Cross Browser Testing: Run test với Firefox và Chrome-family browsers (bao gồm Edge và Electron) dưới local và trên CI pipeline.

#### Cypress Cloud
Cypress Cloud là giải pháp bổ trợ cho Cypress App. Khi đã quen với Cypress App, Cypress Cloud cung cấp các tính năng nâng cao như Test Replay, Parallelization, Branch Review, Alerts và Reporting, cùng nhiều tính năng khác.
- Test Replay: Record lại test runs vào Cypress Cloud và replay lại chính xác cách test run, hỗ trợ debug mà không cần config.
- Smart Orchestraction: Sau khi config vào Cypress Cloud, dễ dàng parallelize test suite, ưu tiên run lại các failed specs với Spec Prioritization, và huỷ test runs khi gặp lỗi với auto cancellation để tối ưu feedback loop.
- Flake Detection: Phát hiện và chẩn đoán các flasky tests với Flasky Test Management. 
- Branch Review: Nhanh chóng đánh giá tác động của Pull Request lên test suite trong single view sử dụng Branch Review. So sánh các test failing, flasky, added hoặc các test đã sửa giữa các branch chính và các branch nhỏ và ngăn chặn việc merge những code kém chất lượng.
- Integrations: Integrate với GitHub, GitLab, hoặc BitBucket để nhìn được test result trực tiếp trên tất cả mọi yêu cầu push hoặc pull request. Cypress Cloud cũng tích hợp với Slack, Jira và Microsoft Teams để keep team bạn vào vòng lặp.
- Test analytics: Track test results theo thời gian với Test Analytics để xác định xu hướng, hồi quy và cải tiến trong test suite. Sử dụng Data Extract API để trích xuất dữ liệu quan trọng cho team bạn.

#### UI Coverage
- Visualize Coverage: Cung cấp cái nhìn trực quan về test coverage trên mọi page và component của app, giúp nhận diện các vùng chưa được test.
- Results API: Sử dụng UI Coverage Results API để truy cập dữ liệu coverage và tích hợp với workflows có sẵn.
- Branch Review: So sánh các lần run để các element với được đưa vào app của bạn hoặc giảm những điều không muốn trong phạm vi test.

#### Cypress Accessibility
- Accessibility Checks: Tự động thêm hàng ngàn test accessibility vào các Cypress tests hiện có mà không cần config, thay đổi code, hay ảnh hưởng performance.
- Run-level Reports: Cung cấp báo cáo chi tiết về các vấn đề accessibility trong các test runs.
- Results API: Sử dụng Cypress Accessibility Results API để truy cập kết quả accessibility trong môi trường CI.
- Branch Review: So sánh báo cáo với baseline để chỉ xem xét các vi phạm mới, loại bỏ nhiễu từ các vấn đề cũ.

### Solution
#### Kiểm thử End-to-End
- Cypress được thiết kế cho end-to-end testing trên mọi thứ chạy trong trình duyệt. Một E2E test điển hình truy cập ứng dụng và thực hiện các hành động qua UI giống như user thực.
```ts
it('adds todos', () => {
  cy.visit('https://example.cypress.io/')
  cy.get('[data-cy="new-todo"]').type('write tests{enter}')
  // confirm the application is showing one item
  cy.get('[data-cy="todos"]').should('have.length', 1)
})
```

#### Component Testing
- Cypress Component Testing cung cấp một nền tảng component để nhanh chóng build và test các thành phần từ nhiều thư viện UI phía trước — bất kể đơn giản hay phức tạp.
- Học thêm về làm thế nào để test componentns cho React, Angular, Vue và Svelte.

#### Accessibility Testing
- Bạn có thể viết Cypress tests để check accessibility app của bạn, và sử dụng plugins để chạy scan accessibility 1 cách rộng rãi. Khi kết hợp Cypress Accessibility trong Cypress Cloud, thông tin chi tiết có thể được đưa ra khi các tiêu chuẩn trợ năng cụ thể không được đáp ứng thông qua test của bạn - không cần config.

#### UI Coverage
- Bạn có thể tăng độ tin cậy khi release bằng cách thu hẹp khoảng cách test trong các luồng ứng dụng quan trọng bằng UI Coverage. Tận dụng thông tin chi tiết dựa trên dữ liệu để bao quát các khu vực chưa được test, giảm sự cố và cải thiện chất lượng ứng dụng.

#### Others
- Cypress có thể thực hiện call HTTP tùy ý, do đó bạn có thể sử dụng nó để test API.

## Install Cypress TS
1. Download & install NodeJS
2. Download & install VS Code
3. Tạo folder project:
```bash
mkdir my-cypress-project
cd my-cypress-project
```

4. Cài đặt Cypress:
```bash
npm install cypress --save-dev
```

5. Cài TypeScript:
```bash
npm install typescript --save-dev
```

Khởi tạo cấu hình TS (tsconfig.ts):
```bash
npx tsc --init
```

Cập nhật file `tsconfig.json` để thêm config phù hợp với Cypress:
```typescript
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "sourceMap": true,
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```

- Cấu hình Cypress với TypeScript
Tạo file `cypress.config.ts` (hoặc sửa file `cypress.config.js` nếu đã exist) trong folder của project:
```typescript
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.ts', // Đường dẫn đến các file test TypeScript
    supportFile: 'cypress/support/e2e.ts',
  },
});
```

6. Tạo structure folder Cypress
```bash
npx cypress open
```
  - Sau khi chạy, Cypress sẽ tạo các thư mục như:
    - `cypress/e2e`: Chứa các file test.
    - `cypress/support`: Chứa file hỗ trợ (như e2e.ts hoặc commands.ts).


