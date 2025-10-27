# Tóm tắt nội dung học được
- Tổng quan về AWS Device Farm
- Cách chạy WebDriverIO trên AWS Device Farm

# Chi tiết
## Giới thiệu
- AWS Device Farm là một app testing service của Amazon Web Services (AWS), cho phép bạn test và tương tác với các ứng dụng Android, iOS và web trên các real devices và browser desktop được lưu trữ bởi AWS. Dịch vụ này giúp cải thiện chất lượng ứng dụng bằng cách loại bỏ nhu cầu quản lý cơ sở hạ tầng kiểm thử, cho phép chạy kiểm thử đồng thời trên nhiều devices hoặc browser để tăng tốc độ run. Nó chỉ khả dụng ở vùng us-west-2 (Oregon). 
- Device Farm hỗ trợ hai cases sử dụng chính: kiểm thử tự động với các framework khác nhau và truy cập từ xa để tương tác thời gian thực với devices qua browser web.

## Tính năng chính
- Device Farm cung cấp nhiều tính năng để hỗ trợ kiểm thử toàn diện:
    - Kiểm thử đồng thời: Chạy kiểm thử song song trên nhiều devices di động thực tế hoặc browser desktop để rút ngắn thời gian.
    - Custom môi trường test: Setup vị trí, ngôn ngữ, kết nối mạng, dữ liệu ứng dụng và cài đặt ứng dụng phụ trợ.
    - Báo cáo và log chi tiết: Tạo video, log, dữ liệu hiệu suất, screenshot pixel-to-pixel để verify và khắc phục lỗi nhanh chóng. Báo cáo nhóm các vấn đề tương tự để dễ phân tích.
    - Manual test và Automation test: Sử dụng kiểm thử tích hợp sẵn (không cần script) hoặc tùy chỉnh với framework opensource. Hỗ trợ truy cập từ xa để test manual.
    - Device Lab riêng tư: Cho phép sử dụng độc quyền các devices iOS và Android với cài đặt liên tục giữa các phiên.
    - Tích hợp workflow phát triển: Kết nối với IDE (như Android Studio) và môi trường CI/CD (như Jenkins) qua plugin và API để tự động khởi chạy kiểm thử và lấy kết quả.
    - Hỗ trợ ứng dụng hybrid: Kiểm thử ứng dụng native, hybrid (như PhoneGap, Titanium, Xamarin, Unity).
    - Kiểm thử browser desktop: Lưới browser được quản lý đầy đủ, mở rộng theo nhu cầu, hỗ trợ Chrome và Firefox.

## Hỗ trợ devices và browsers
- Real mobile devices: Hỗ trợ hàng trăm model Android, iOS và FireOS thực tế (không phải simulator/emulator), bao gồm các yếu tố như bộ nhớ, CPU, vị trí và sửa đổi firmware/phần mềm. Danh sách thiết bị được cập nhật liên tục tại https://awsdevicefarm.info/. Thiết bị có thể là metered (tính phí theo phút) hoặc unmetered (gói cố định).

- Trình duyệt desktop: Chrome, Firefox và các phiên bản khác chạy trên instance Windows EC2. Không hỗ trợ trực tiếp các trình duyệt di động như Chrome trên Android hoặc Safari trên iOS mà không qua framework như Appium.

## Test types
- App Testing: Tập trung vào real mobile devices để mô phỏng tương tác người dùng, bao gồm automate song song, mô phỏng môi trường thực tế (như kết nối mạng yếu). Hỗ trợ ứng dụng Android, iOS và web.

- Browser Testing: Kiểm thử ứng dụng web trên trình duyệt desktop, tạo video, log console, log actions và log WebDriver để phân tích.

## Framework testing hỗ trợ
### Android application testing frameworks
- [!Appium](https://docs.aws.amazon.com/devicefarm/latest/developerguide/test-types-appium.html)
- [!Instrumentation](https://docs.aws.amazon.com/devicefarm/latest/developerguide/test-types-android-instrumentation.html)

### iOS application testing frameworks
- [!Appium](https://docs.aws.amazon.com/devicefarm/latest/developerguide/test-types-appium.html)
- [!XCTest](https://docs.aws.amazon.com/devicefarm/latest/developerguide/test-types-ios-xctest.html)
- [!XCTest UI](https://docs.aws.amazon.com/devicefarm/latest/developerguide/test-types-ios-xctest-ui.html)

### Built-in test types
- Với built-in tests, bạn có thể tests app của bạn trên nhiều devices mà không cần viết và maintain test automation scripts. Device Farm offers 1 built-in test type:
    - [!Built-in: fuzz (Android and iOS)](https://docs.aws.amazon.com/devicefarm/latest/developerguide/test-types-built-in-fuzz.html)


## Cách chạy WebDriverIO trên AWS Device Farm
### Tạo project trên AWS Device Farm
1. Đăng nhập AWS Console > Tìm "Device Farm" > Chọn "Desktop browser testing" hoặc "Mobile device testing" tùy loại.
2. Tạo project mới, lấy Project ARN (ví dụ: arn:aws:devicefarm:us-west-2:123456789012:project:example).
3. Thiết lập AWS credentials: Sử dụng AWS CLI hoặc environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION=us-west-2).

- Cập nhật repo WebDriverIO: Đảm bảo WebDriverIO version >= v7 (tốt nhất v8+). Cài đặt dependencies cần thiết.

### Chạy cho Desktop Browser Testing
- Sử dụng wdio-aws-device-farm-service để tích hợp dễ dàng (dành cho web tests). Dựa trên tài liệu chính thức từ WebDriverIO.
- Bước 1: Cài đặt service
    - Trong repo local, chạy:
    ```bash
    npm install --save-dev wdio-aws-device-farm-service
    ```

- Bước 2: Config `wdio.conf.ts`
Thêm service vào file config (wdio.conf.ts hoặc tương tự):
```ts
exports.config = {
  // ... cấu hình hiện tại của bạn
  services: [
    ['aws-device-farm', {
      // Tùy chọn, nếu cần
    }]
  ],
  capabilities: [{
    browserName: 'chrome', // hoặc 'firefox'
    // Các caps khác cho browser
  }],
};
```

- Đặt environment variables:
    - `PROJECT_ARN=arn:aws:devicefarm:us-west-2:...` (ARN của project).
    - `AWS_ACCESS_KEY_ID=...`
    - `AWS_SECRET_ACCESS_KEY=...`
    - `AWS_REGION=us-west-2`

- Bước 3: Chạy tests
    - Chạy command như bình thường:
        ```bash
        npx wdio run wdio.conf.ts
        ```

- Service sẽ tự động kết nối với Device Farm và chạy tests trên browsers cloud. 
- Nếu gặp lỗi, kiểm tra logs trên AWS Console > Device Farm > Runs.

- `Lưu ý`: Đây là cho browser testing, không phải mobile.

### Chạy cho Mobile Testing (sử dụng Appium)
#### 1. Cài đặt AWS CLI
- Tải AWS CLI v2
    - Run lệnh để tải trực tiếp:
    ```bash
    curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
    ```

- Cài đặt AWS CLI
    - Run lệnh file tải về:
    ```bash
    sudo installer -pkg ./AWSCLIV2.pkg -target /
    ```
    - Sẽ cài AWS CLI vào `/usr/local/bin/aws`.

- Kiểm tra cài đặt
    - Run lệnh:
    ```bash
    aws --version
    ```
    - Ra như này là oke: `aws-cli/2.x.x Python/x.x.x Darwin/x.x.x source/arm64`.

#### 2. Cấu hình AWS CLI
- Run lệnh cấu hình:
    ```bash
    aws configure
    ```

- Nhập các thông tin sau:
    - `AWS Access Key ID`: Lấy từ IAM User (xem bước 3 nếu chưa có).
    - `AWS Secret Access Key`: Lấy từ IAM User.
    - `Default region name`: Nhập `us-west-2` (Device Farm chỉ hỗ trợ region Oregon).
    - `Default output format`: Nhập `json`.

- Kiểm tra cấu hình:
    - File cấu hình được lưu tại ~/.aws/credentials và ~/.aws/config.
    - Kiểm tra:
        ```bash
        cat ~/.aws/credentials
        cat ~/.aws/config
        ```
        
- Tạo IAM User (nếu chưa có):
    - Truy cập AWS Management Console > IAM > Users > Create User.
        - `Tên user`: ví dụ device-farm-user.
        - `Gắn policy AWSDeviceFarmFullAccess` (hoặc custom policy nếu cần).
        - `Tạo Access Key` (chọn CLI access) và lưu Access Key ID và Secret Access Key.
        - `Lưu ý`: Giữ Access Key an toàn, không chia sẻ.

#### 3. Chuẩn bị Test Package cho AWS Device Farm
- Cần chuẩn bị file ứng dụng (APK/IPA) và test package (ZIP) để upload lên Device Farm.
    - Android: Cần file `.apk`
    - iOS: Cần file .ipa được ký với provisioning profile hợp lệ.
    - Cần có:
        - `package.json` (với dependencies như @wdio/cli, @wdio/appium-service).
        - Test files (ví dụ: test.spec.ts).
        - `wdio.conf.ts` (config WebdriverIO).
            - `wdio.conf.ts` tối thiểu:
            ```ts
            export const config: WebdriverIO.Config = {
            runner: 'local',
            tsConfigPath: './tsconfig.json',
            port: 4723,
            specs: [
                './test/specs/**/*.spec.ts'
                // ToDo: define location for spec files here
            ],
            exclude: [
                // 'path/to/excluded/files'
            ],
            framework: 'mocha',
            capabilities: [{
                // capabilities for local Appium web tests on an Android Emulator
                platformName: 'Android',
                // browserName: 'Chrome',
                'appium:udid': 'emulator-5554',
                'appium:automationName': 'UiAutomator2',
                'appium:app': path.join(process.cwd(), 'app_demo', 'android', 'nativeapp', 'android.wdio.native.app.v1.0.8.apk')
                // 'appium:app': path.join(process.cwd(), 'app_demo','android', 'ApiDemos-debug.apk')
            }],
            services: ['appium']
            };
            ```

- Chuẩn bị test package
    - Đóng gói:
        ```bash
        npm install
        npm prune --production
        zip -r test-package.zip tests/ node_modules/ package.json
        ```


- Tạo và chạy Test Run trên AWS Device Farm:
    - Trên AWS Console > Device Farm:
        - Tạo project (Mobile device testing).
        - Tạo run mới: Chọn "Appium Node.js" làm test type.
        - Upload app (.apk cho Android, .ipa cho iOS).
        - Upload test package (.zip của repo).
        - Cấu hình TestSpec (YAML): Sử dụng mặc định hoặc tùy chỉnh để install dependencies (npm install).
        - Chọn devices (pool thiết bị), và start run.

#### 4. Chạy và theo dõi
- Sau khi start, tests sẽ chạy trên real devices. 
- Xem logs/reports trên AWS Console.
