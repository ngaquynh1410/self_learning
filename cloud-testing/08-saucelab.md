# Tóm tắt nội dung học được
- Tổng quan về SauceLabs
- Cách tích hợp SauceLabs với Playwright

# Chi tiết
## Tổng quan về SauceLabs
SauceLabs tập trung vào việc nâng cao chất lượng phần mềm thông qua các giải pháp kiểm thử dựa trên AI, giúp xây dựng ứng dụng web và mobile chất lượng cao ở quy mô lớn. Dưới đây là các tính năng chính, lợi ích và sản phẩm/dịch vụ nổi bật:

- Tính năng chính:
    - Cross browser: Hỗ trợ hơn 9.000 thiết bị thực, 2.500 emulator/simulator, và hàng nghìn kết hợp browser/OS (như Chrome, Firefox, Safari, Edge trên Windows, macOS, iOS, Android).
    - Automation test và manual test: Sử dụng các framework Selenium, Playwright, Cypress cho web, Appium cho mobile; hỗ trợ visual testing để phát hiện lỗi UI, và error reporting để sửa crash nhanh hơn.
    - AI-powered insights: Phân tích hàng tỷ dữ liệu để cung cấp analytics thời gian thực, theo dõi hiệu suất và tăng tốc độ phát hành.
    - Phân phối ứng dụng mobile: Nền tảng an toàn cho việc phân phối app Android/iOS, thu thập feedback từ người dùng beta, và kiểm soát truy cập.
    - Tích hợp CI/CD: Kết nối dễ dàng với các công cụ như Jenkins, GitHub Actions để chạy test song song.
    - Công cụ bổ sung: Sauce Connect cho tunnel bảo mật, video/screenshots lưu trữ, live breakpoints để debug trong lúc chạy test.

- Lợi ích
    - Tiết kiệm thời gian và chi phí bằng cách loại bỏ nhu cầu quản lý hạ tầng vật lý hoặc ảo.
    - Tăng tốc độ phát hành sản phẩm với kiểm thử song song (hàng nghìn test cùng lúc), đảm bảo chất lượng trên đa thiết bị.
    - Cải thiện độ tin cậy: Các công ty lớn như Walmart, Keller Williams, và Indeed sử dụng để kiểm tra ứng dụng trên hàng nghìn thiết bị, giảm lỗi và tăng tốc release cycle.
    - Bảo mật cao: Máy ảo sử dụng một lần, không lưu dữ liệu sau test.

- Sản phẩm:
    - Kiểm thử cross-browser và Selenium, Playwright, Cypress cho web.
    - Kiểm thử mobile trên emulator, simulator và thiết bị thực.
    - Visual testing, error reporting, và mobile app distribution.
    - Dùng cho doanh nghiệp với hơn 300.000 người dùng hoạt động và hơn 8 tỷ test đã chạy.

## Cách tích hợp SauceLabs với Playwright
### Bạn cần có
- Sauce Labs account
- Sauce Labs Username and Access Key
- Node.js to use the NPM package manager
- Git

### 1. Install `saucectl`
- Mở repo, run lệnh:
```bash
npm install -g saucectl
```

### 2. Link với SauceLabs Acc
#### 2.1. Run `configure`
- Run lệnh
```bash
saucectl configure
```

- Enter your Sauce Labs Username and Access Key at the prompts.

### 3. Update file config `config.yml`
```yml
# apiVersion: Xác định phiên bản schema YAML mà saucectl sử dụng. v1alpha là phiên bản hiện tại (tính đến 9/2025).
apiVersion: v1alpha

# kind: Chỉ định framework test. 'playwright' báo cho saucectl dùng Playwright Runner để chạy test.
kind: playwright

# sauce: Cấu hình dịch vụ Sauce Labs.
sauce:
  # region: Khu vực data center của Sauce Labs (ap-east-1 là Hong Kong, giảm latency nếu ở châu Á; đổi lại eu-central-1 nếu ở châu Âu).
  region: ap-east-1
  # concurrency: Số test suites chạy đồng thời (tối đa 10, giảm xuống 5 nếu tài khoản có giới hạn để tiết kiệm tài nguyên).
  concurrency: 5
  # metadata: Thông tin mô tả cho test run, hiển thị trên dashboard Sauce Labs.
  metadata:
    # build: Tên build để nhóm test run (tùy chọn, giúp quản lý trên dashboard).
    build: "Build-2025-09-01"
    # tags: Nhãn để lọc test run trên dashboard (ví dụ: lọc test 'e2e').
    tags:
      - e2e
      - release team
      - saucectl
      - playwright

# playwright: Cấu hình cho Playwright framework.
playwright:
  # version: Phiên bản Playwright (@playwright/test). Dùng 1.52.0 để khớp với phiên bản được hỗ trợ, tránh lỗi từ package.json.
  version: 1.52.0
  # configFile: File cấu hình Playwright (playwright.config.ts là TypeScript). Cần ts-node để xử lý .ts trực tiếp.
  configFile: playwright.config.ts

# rootDir: Thư mục gốc của project để bundle (./ là thư mục hiện tại, loại file không cần bằng .sauceignore).
rootDir: ./

# suites: Danh sách các test suites chạy trên Sauce Labs.
suites:
  # Suite 1: Test trên Chromium/macOS.
  - name: "Chromium Mac"  # Tên suite, hiển thị trên dashboard.
    platformName: "macOS 12"  # Hệ điều hành máy ảo (macOS 12 là Monterey, kiểm tra hỗ trợ tại saucelabs.com/platform-configurator).
    screenResolution: "1440x900"  # Độ phân giải màn hình máy ảo.
    testMatch: ["tests/voc-vach/*.spec.ts"]  # Pattern để tìm file test (khớp với tests/voc-vach/006-accessibility-check.spec.ts).
    params:
      browserName: "chromium"  # Trình duyệt (chromium là Chrome-based).
      project: "chromium"  # Liên kết với project 'chromium' trong playwright.config.ts.
  # Suite 2: Test trên Webkit/Windows.
  - name: "Webkit Win"
    platformName: "Windows 11"
    screenResolution: "1440x900"
    testMatch: ["tests/voc-vach/*.spec.ts"]
    params:
      browserName: "webkit"  # Trình duyệt (webkit là Safari-based).
      project: "webkit"  # Liên kết với project 'webkit' trong playwright.config.ts.

# artifacts: Cấu hình tải artifacts (log, video, screenshot) sau khi test xong.
artifacts:
  download:
    when: always  # Tải artifacts trong mọi trường hợp (pass/fail).
    match:  # File/pattern để tải.
      - console.log  # Log console từ test.
      - playwright-report/*  # Báo cáo HTML từ Playwright.
      - test-results/*  # Kết quả test (như trace, screenshot).
    directory: ./artifacts/  # Thư mục lưu artifacts trên máy local.

# npm: Cấu hình dependencies cài trên cloud của Sauce Labs.
npm:
  packages:  # Danh sách package và version (dùng object thay vì array để tránh lỗi).
    "@playwright/test": "1.52.0"  # Playwright framework.
    "typescript": "latest"  # TypeScript compiler.
    "ts-node": "latest"  # Để xử lý file .ts trực tiếp.
    "@axe-core/playwright": "latest"  # Để chạy accessibility test (AxeBuilder).
  strictSSL: true  # Yêu cầu SSL nghiêm ngặt khi tải package.
  registry: https://registry.npmjs.org  # NPM registry để tải package.

# reporters: Cấu hình cách báo cáo kết quả test.
reporters:
  spotlight:  # Báo cáo kiểu Spotlight, in overview của test thất bại trên terminal.
    enabled: true  # Kích hoạt Spotlight.
```

### 4. Tạo file `.sauceignore`
- File `.sauceignore` liệt kê các file/thư mục không cần bundle khi saucectl tạo archive để upload lên Sauce Labs. Điều này giảm kích thước bundle, tăng tốc độ upload và chạy test.
- Tạo file:
```bash
touch .sauceignore
```

- Update:
```plaintext
# Loại bỏ thư mục node_modules (rất lớn, không cần bundle vì npm packages được chỉ định trong config.yml)
node_modules/

# Loại bỏ thư mục build/output
dist/
build/
playwright-report/
test-results/

# Loại bỏ file tạm và log
*.log
*.tmp
*.cache

# Loại bỏ file cấu hình nhạy cảm
.env
*.local

# Loại bỏ file không liên quan đến test
*.md
*.json
package-lock.json
yarn.lock
```

### 5. Run tests
```bash
saucectl run
```

## Cách tích hợp với Selenium Python
### 1. Tạo file cấu hình `sauce_labs_config.yml`
- Lưu file này trong folder project.
```yml
sauce:
  username: YOUR_USERNAME  # Thay bằng Username từ Sauce Labs
  accessKey: YOUR_ACCESS_KEY  # Thay bằng Access Key từ Sauce Labs
  endpoint: https://ondemand.eu-west-1.saucelabs.com:443/wd/hub
```

### 2. Tạo file `conftest.py`
- File `conftest.py` chứa fixture chung để khởi tạo WebDriver cho tất cả các file test, tránh lặp code. Lưu trong folder project.

```ts
import pytest
import os
import yaml
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.remote.command_executor import ClientConfig

# Lấy thông tin đăng nhập
try:
    with open("sauce_labs_config.yml", "r") as config_file:
        config = yaml.safe_load(config_file)
        username = config["sauce"]["username"]
        access_key = config["sauce"]["accessKey"]
        sauce_url = config["sauce"]["endpoint"]
except FileNotFoundError:
    username = os.getenv("SAUCE_USERNAME", "YOUR_USERNAME")
    access_key = os.getenv("SAUCE_ACCESS_KEY", "YOUR_ACCESS_KEY")
    sauce_url = "https://ondemand.eu-west-1.saucelabs.com:443/wd/hub"

@pytest.fixture(scope="function")
def driver() -> WebDriver:
    chrome_options = Options()
    chrome_options.set_capability("browserName", "chrome")
    chrome_options.set_capability("browserVersion", "latest")
    chrome_options.set_capability("platformName", "Windows 10")
    chrome_options.set_capability("sauce:options", {
        "name": "Selenium Test",
        "build": "selenium-demo-build",
        "username": username,
        "accessKey": access_key
    })
    client_config = ClientConfig(username=username, access_key=access_key, base_url=sauce_url)
    driver = webdriver.Remote(command_executor=client_config, options=chrome_options)
    yield driver
    driver.quit()
```

### 3. Các file test
- Mỗi file test sẽ sử dụng fixture `driver` từ conftest.py.
- Ex:
```ts
import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_login(driver):
    driver.get("https://www.saucedemo.com")
    wait = WebDriverWait(driver, 10)
    username = wait.until(EC.presence_of_element_located((By.ID, "user-name")))
    username.send_keys("standard_user")
    driver.find_element(By.ID, "password").send_keys("secret_sauce")
    driver.find_element(By.ID, "login-button").click()
    wait.until(EC.presence_of_element_located((By.CLASS_NAME, "inventory_list")))
    assert "inventory" in driver.current_url
```

### 4. Run test
```bash
pytest <path_file>
```

Ex: `pytest main.py`

- NOTE:
  - Không dùng `webdriver-manager`: Không cần ChromeDriver cục bộ vì Sauce Labs cung cấp WebDriver remote.
  - Sử dụng `webdriver.Remote`: Kết nối với hub của Sauce Labs bằng URL và credentials.