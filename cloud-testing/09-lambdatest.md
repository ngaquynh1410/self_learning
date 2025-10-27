# Tóm tắt nội dung học được
- Tổng quan về Lambdatest
- Cài đặt Lambdatest với repo Playwright

# Chi tiết
## Tổng quan về Lambdatest
### Giới thiệu
- LambdaTest là cloud-based testing platform được hỗ trợ bởi AI, giúp devs và tester đẩy nhanh quá trình kiểm thử và release sản phẩm. Được thành lập vào năm 2017, LambdaTest nhanh chóng trở thành giải pháp hàng đầu cho việc kiểm thử tương thích cross-browser và cross-device, đáp ứng nhu cầu của hơn 2 triệu người dùng tại hơn 132 quốc gia trên toàn thế giới. Nền tảng này tập trung vào việc nâng cao chất lượng phần mềm bằng cách cung cấp môi trường testing linh hoạt, nhanh chóng và đáng tin cậy, giúp các doanh nghiệp giảm thời gian phát hành sản phẩm mà vẫn đảm bảo tính ổn định và trải nghiệm người dùng tốt nhất.
- Với sứ mệnh "Power your software testing with AI and cloud", LambdaTest không chỉ là công cụ kiểm thử truyền thống mà còn tích hợp các công nghệ tiên tiến như AI để tự động hóa quy trình, phân tích dữ liệu và tối ưu hóa kết quả. Hiện nay, LambdaTest được tin dùng bởi hơn 10.000 doanh nghiệp lớn nhỏ, bao gồm các tên tuổi hàng đầu như Microsoft, Vimeo, NVIDIA, Telstra và Rubrik, với hơn 1,2 tỷ bài kiểm thử đã được thực hiện trên nền tảng này.

## Sản Phẩm Và Dịch Vụ Chính Của LambdaTest
- LambdaTest cung cấp một hệ sinh thái toàn diện cho kiểm thử phần mềm, từ manual đến automation, trên cloud. Dưới đây là các sản phẩm chính:
    - Browser Testing: Cho phép kiểm thử manual và automation trên hơn 3.000 phiên bản browser khác nhau, bao gồm tất cả các browser lớn như Chrome, Firefox, Safari, Edge và Internet Explorer. Điều này giúp đảm bảo ứng dụng web hoạt động mượt mà trên mọi thiết bị.
    - App Testing: Cung cấp real device cloud cho kiểm thử mobile app trên iOS và Android. Người dùng có thể chọn cloud công cộng, dành riêng hoặc on-premise, hỗ trợ cả manual test và automation test.
    - HyperExecute: Nền tảng orchestration test siêu nhanh, giảm thời gian run test lên đến 70% so với các grid cloud truyền thống, mang lại tốc độ tương đương kiểm thử cục bộ.
    - Kane AI: Trợ lý kiểm thử end-to-end đầu tiên trên thế giới dựa trên AI, sử dụng mô hình ngôn ngữ lớn (LLM) để lập kế hoạch, viết và phát triển test bằng ngôn ngữ tự nhiên.
    - Agent-to-Agent Testing: Sản phẩm đầu tiên cho kiểm thử AI agents như chatbot và trợ lý giọng nói, đảm bảo độ chính xác và hiệu suất trong các case thực tế.
    - Professional Services: Dịch vụ chuyên nghiệp từ chuyên gia LambdaTest để hỗ trợ chuyển đổi quality engineering, bao gồm tối ưu hóa script và tăng độ bao phủ test.

- Ngoài ra, LambdaTest còn cung cấp các công cụ miễn phí như LT Browser cho kiểm thử responsive, và các tính năng như Visual UI Testing, Real Time Testing, và Automation Testing.

## Tính Năng Nổi Bật
LambdaTest nổi bật với các tính năng sau:
- Hỗ Trợ Môi Trường: Hơn 5.000 kết hợp browsers và hệ điều hành, bao gồm geolocation testing, debug tích hợp, phát hiện bug và automation test.
- AI-Driven Analytics: Công cụ phân tích dựa trên AI để cung cấp deep insights, giải quyết vấn đề nhanh và theo dõi lịch sử test, bao gồm phát hiện test flaky.
- Tích Hợp Và Custom: Hỗ trợ tích hợp với hàng chục ứng dụng như Playwright, Selenium, Cypress, Appium, và các công cụ CI/CD (Jenkins, GitHub Actions). UI thân thiện với test analytics, custom tags và lọc kết quả.
- Bảo Mật Và Hỗ Trợ: An ninh cấp doanh nghiệp, hỗ trợ 24/7 qua chat và email. Tính năng Live Inspect cho tương tác thời gian thực với app.
- Quản Lý Test: Lịch sử test, automation, tổ chức test, feedback và đa dạng loại test (emulation, media, links).

## Cài đặt Lambdatest với repo Playwright
### 1. Cần có
- Acc Lambdatest
- LambdaTest username và access key
- Node.js và npm
- An existing Playwright project.

### 2. Install Lambdatest
- Mở repo Playwright, run lệnh:

```bash
npm install @lambdatest/playwright-node-sdk
```

### 3. Configuration
- SDK config thông qua file `lambdatest.yml` nằm trong repo. File YAML này điều phối quá trình thực hiện test của bạn, khai báo credentials, capabilities và các run settings khác.

#### 3.1. Config file `lambdatest.yml`
- Mình có thể gen template file `lambdatest.yml` bằng lệnh:
```bash
npx playwright-node-sdk --init [(optional: filename)]
```

- Update file config:
```yml
# Access your LambdaTest credentials from https://accounts.lambdatest.com/security/username-accesskey
# It's recommended to use environment variables for your credentials.
user: username
accessKey: access_key

# Build name for your test run
build: "Playwright Node.js SDK Build"

# Name of the test suite
name: "Playwright Test Suite"

# Global base configuration
framework: "playwright" # Framework name
source: "node-js-playwright-sample-sdk:v1" # GitHub branch and tag

# Optional: Build and project tags for organization and filtering
buildTags: ["playwright", "nodejs", "typescript"]
tags: ["smoke", "regression"]
projectName: "Playwright Node SDK Testing"

# Define the number of parallel sessions for each configuration
# Check your parallel session limits at https://billing.lambdatest.com/billing/subscriptions
parallelsPerPlatform: 2

# Optional: Advanced settings applied to all tests
network: false # To capture network HAR logs (may impact test execution speed)
console: false # To capture browser console logs (may impact test execution speed)
video: true # To capture video for debugging (may impact test execution speed)
tunnel: false # To test pages behind a VPN/private network or from a local system. Refer to https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/
dedicatedProxy: false
idleTimeout: 300
timezone: "Asia/Ho_Chi_Minh"
visual: true # To capture a screenshot for each command (may impact test execution speed)
headless: false # To run tests in headless mode. Note: Video will not be available for headless tests.
commandLog: true # To capture commands that are executed on the LambdaTest platform
resolution: "1280x960" # To set the global resolution/viewport size to execute tests

# Tunnel-specific tests
tunnel_settings:
  # tunnel: true
  # autostart: true
  # tunnelName: "app-behind-firewall-localhost-test-tunnel"
  # localdirectory: "./log"
  # verbose: true
  # loglevel: "debug"

# Global Playwright configuration (inherited by all platforms unless overridden)
playwrightConfigOptions:
  testDir: "tests"
  # use:
  #   viewport: { width: 1280, height: 720 }

# Refer to the capability generator for detailed configurations: https://www.lambdatest.com/capabilities-generator/
platforms:
  - platform: "macOS Sequoia" # Or "Windows 11", "android", "ios"
    browserName: "pw-chromium" # Or pw-firefox, pw-webkit
    # You can specify an exact browser version or use "latest", "latest-1", etc.
    browserVersion: "latest"
    # For mobile testing
    # deviceName: "Pixel 7" # Or "iPhone 14"
    # platformVersion: "13" # Or "16"
    # isRealMobile: true
    # ltOptions:
    #   Geolocation-specific tests
    #   geoLocation: "GB"
    #   Network communication tests (enable network logging)
    #   network: true
    #   console: true
    #   fullHar: true # To capture request and response body (might slow the test execution)
    # playwrightConfigOptions:
    #   testDir: "additional-tests"
    #   testMatch: ["**/mobile-responsive.spec.ts"]
    #   # For mobile testing
    #   use:
    #     viewport: { width: 390, height: 844 }
```

#### 3.2. Platform Configuration
- `platforms` array xác định các target environments (OS/browser combinations) cho việc run test của bạn. Bạn có thể chỉ định nhiều platform objects. Để biết danh sách đầy đủ các valid platform configurations, hãy tham khảo [!LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/).

#### 3.3. Tunnel Configuration
- LambdaTest Tunnel cho phép các browser hoặc thiết bị thực trên đám mây LambdaTest truy cập vào ứng dụng của bạn như thể chúng đang chạy trực tiếp trên máy của bạn. Tunnel sử dụng giao thức WebSocket để thiết lập kết nối bảo mật, giúp đảm bảo rằng dữ liệu được truyền đi một cách an toàn và đáng tin cậy.

- Tính năng này rất quan trọng trong các case sau:
    - Test ứng dụng chạy trên localhost (ví dụ: http://localhost:3000).
    - Test trên các môi trường nội bộ như staging hoặc dev servers.
    - Test các ứng dụng nằm sau firewall hoặc VPN, không thể truy cập trực tiếp từ bên ngoài.

    ```json
    "tunnel_settings": {
    "tunnel": true
    }
    ```
- Khi được đặt thành `true`, tính năng này cho phép thiết lập một tunnel để kết nối máy local hoặc env nội bộ của bạn với cloud LambdaTest. Nếu đặt thành `false`, tunnel sẽ không được sử dụng, và kiểm thử chỉ có thể thực hiện trên các public app.

- Note: Để sử dụng tunnel, bạn cần tải xuống và cài đặt `LambdaTest Tunnel Binary` từ trang web chính thức của LambdaTest. Binary này có sẵn cho Windows, macOS và Linux.

    ```json
    "tunnel_settings": {
        "tunnel": true,
        "autostart": true
    }
    ```
- Khi `autostart` được đặt thành `true`, SDK sẽ tự động bật tunnel trước khi bắt đầu test và dừng tunnel khi hoàn tất. Điều này giúp đơn giản hóa quy trình, đặc biệt khi tích hợp với các framework automation như Selenium, Cypress, hoặc Appium.
- Note: Nếu `autostart` được đặt thành `false`, bạn cần tự quản lý tunnel bằng cách chạy lệnh manual hoặc thông qua các custom script.


### 4. Run test
- Execution Workflow:
    - 1. Đọc và parse `lambdatest.yml` file
    - 2. Nếu `tunnel: true` và `autostart: true` được set, nó sẽ establishes secure connection thông qua Lambdatest Tunnel.
    - 3. Gen temporary, in-me,ỏy Playwright configuration gồm những hooks cần thiết để connect với Lambdatest grid.
    - 4. Executes Playwright tests sử dụng temporary configuration đó.
    - 5. Khi test done, nó sẽ terminate LambdaTest Tunnel (nếu đã started) và clean up mọi temporary artifacts.

- Ex:
```bash
npx playwright-node-sdk playwright test tests/my-test.spec.js
```

## Cài đặt Lambdatest với Selenium Python
### 1. Tạo Tài Khoản LambdaTest và Lấy Thông Tin Đăng Nhập
- Username: Tên người dùng LambdaTest.
- Access Key: Khóa truy cập.

### 2. Lưu thông tin đăng nhập vào biến môi trường
```bash
export LT_USERNAME="your_lambdatest_username"
export LT_ACCESS_KEY="your_lambdatest_access_key"
```

### 3. Tạo file config/lambdatest_config.yml
```yml
lambdatest:
  username: "your_lambdatest_username"
  accessKey: "your_lambdatest_access_key"
  endpoint: "hub.lambdatest.com/wd/hub"
```

### 4. Config Project Selenium Python
- Cấu hình WebDriver cho LambdaTest
- Tạo một file fixture để khởi tạo WebDriver và tái sử dụng trong các test case. 
- Đọc thông tin từ `lambdatest_config.yml` hoặc biến môi trường.
- Ex:

```py
# tests/conftest.py
import pytest
import yaml
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def read_config():
    try:
        with open("config/lambdatest_config.yml", "r") as config_file:
            config = yaml.safe_load(config_file)
            return config["lambdatest"]
    except FileNotFoundError:
        return {
            "username": os.getenv("LT_USERNAME", "your_lambdatest_username"),
            "accessKey": os.getenv("LT_ACCESS_KEY", "your_lambdatest_access_key"),
            "endpoint": "hub.lambdatest.com/wd/hub"
        }

@pytest.fixture(scope="function")
def driver():
    config = read_config()
    chrome_options = Options()
    chrome_options.set_capability("browserName", "Chrome")
    chrome_options.set_capability("browserVersion", "latest")
    chrome_options.set_capability("platformName", "Windows 11")
    chrome_options.set_capability("LT:Options", {
        "name": "Selenium Python Test",
        "build": "selenium-lambdatest-build",
        "username": config["username"],
        "accessKey": config["accessKey"],
        "visual": True,
        "video": True,
        "console": "error",
        "network": True
    })
    driver = webdriver.Remote(
        command_executor=f"https://{config['username']}:{config['accessKey']}@{config['endpoint']}",
        options=chrome_options
    )
    yield driver
    driver.execute_script("lambda-status=passed")
    driver.quit()
```

### 5. Viết test
- Ex
```py
# tests/test_google.py
import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

def test_google_search(driver):
    driver.get("https://www.google.com")
    wait = WebDriverWait(driver, 10)
    search_box = wait.until(
        EC.presence_of_element_located((By.NAME, "q"))
    )
    search_box.send_keys("LambdaTest")
    search_box.submit()
    wait.until(EC.presence_of_element_located((By.ID, "search")))
    assert "LambdaTest" in driver.page_source
```

### 6. Chạy Test trên LambdaTest
- Chạy tất cả test và hiển thị log chi tiết
```bash
pytest tests/ -v
```

### 7. Check result
- Truy cập LambdaTest Automation Dashboard.
- Tìm test theo tên build (selenium-lambdatest-build) hoặc tên test.
- Xem chi tiết:
  - Log: Console, network, và Selenium log.
  - Screenshot.
  - Video: Ghi lại toàn bộ quá trình test.