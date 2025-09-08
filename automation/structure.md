## Playwright Framework Structure

```
playwright-framework/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── nightly.yml
│       └── release.yml
├── config/
│   ├── environments/
│   │   ├── dev.config.ts
│   │   ├── staging.config.ts
│   │   └── prod.config.ts
│   └── playwright.config.ts
├── src/
│   ├── pages/
│   │   ├── base/
│   │   │   └── BasePage.ts
│   │   ├── login/
│   │   │   └── LoginPage.ts
│   │   └── dashboard/
│   │       └── DashboardPage.ts
│   ├── components/
│   │   ├── Header.ts
│   │   ├── Footer.ts
│   │   └── Modal.ts
│   ├── utils/
│   │   ├── testData/
│   │   │   ├── users.json
│   │   │   └── testData.ts
│   │   ├── helpers/
│   │   │   ├── APIHelper.ts
│   │   │   ├── DatabaseHelper.ts
│   │   │   └── FileHelper.ts
│   │   ├── fixtures/
│   │   │   └── baseFixtures.ts
│   │   └── constants/
│   │       ├── urls.ts
│   │       └── messages.ts
│   ├── api/
│   │   ├── endpoints/
│   │   │   ├── AuthAPI.ts
│   │   │   └── UserAPI.ts
│   │   └── models/
│   │       ├── User.ts
│   │       └── Response.ts
│   └── types/
│       ├── global.d.ts
│       └── interfaces.ts
├── tests/
│   ├── e2e/
│   │   ├── auth/
│   │   │   ├── login.spec.ts
│   │   │   └── logout.spec.ts
│   │   ├── dashboard/
│   │   │   └── dashboard.spec.ts
│   │   └── api/
│   │       └── user-api.spec.ts
│   ├── visual/
│   │   └── visual-regression.spec.ts
│   └── performance/
│       └── load-test.spec.ts
├── reports/
│   ├── html-report/
│   ├── allure-results/
│   ├── screenshots/
│   └── videos/
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── scripts/
│   ├── setup.sh
│   ├── run-tests.sh
│   └── generate-report.sh
├── docs/
│   ├── SETUP.md
│   ├── TEST_GUIDE.md
│   └── API.md
├── .gitignore
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## Selenium Framework Structure (Java)

```
selenium-framework/
├── .github/
│   └── workflows/
│       ├── maven.yml
│       └── regression.yml
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── framework/
│   │   │           ├── core/
│   │   │           │   ├── DriverManager.java
│   │   │           │   ├── BasePage.java
│   │   │           │   └── BaseTest.java
│   │   │           ├── pages/
│   │   │           │   ├── LoginPage.java
│   │   │           │   ├── DashboardPage.java
│   │   │           │   └── BasePage.java
│   │   │           ├── components/
│   │   │           │   ├── HeaderComponent.java
│   │   │           │   └── FooterComponent.java
│   │   │           ├── utils/
│   │   │           │   ├── ConfigReader.java
│   │   │           │   ├── ExtentManager.java
│   │   │           │   ├── RetryAnalyzer.java
│   │   │           │   ├── TestDataProvider.java
│   │   │           │   ├── WebDriverUtils.java
│   │   │           │   ├── APIUtils.java
│   │   │           │   ├── DatabaseUtils.java
│   │   │           │   ├── ExcelUtils.java
│   │   │           │   └── ScreenshotUtils.java
│   │   │           ├── listeners/
│   │   │           │   ├── TestListener.java
│   │   │           │   ├── RetryListener.java
│   │   │           │   └── ExtentReportListener.java
│   │   │           ├── constants/
│   │   │           │   ├── FrameworkConstants.java
│   │   │           │   └── ConfigConstants.java
│   │   │           └── exceptions/
│   │   │               └── FrameworkException.java
│   │   └── resources/
│   │       ├── config/
│   │       │   ├── config.properties
│   │       │   ├── dev.properties
│   │       │   ├── staging.properties
│   │       │   └── prod.properties
│   │       ├── testdata/
│   │       │   ├── users.xlsx
│   │       │   ├── testdata.json
│   │       │   └── sql/
│   │       │       └── queries.sql
│   │       ├── drivers/
│   │       │   ├── chromedriver.exe
│   │       │   ├── geckodriver.exe
│   │       │   └── msedgedriver.exe
│   │       └── log4j2.xml
│   └── test/
│       └── java/
│           └── com/
│               └── tests/
│                   ├── web/
│                   │   ├── auth/
│                   │   │   ├── LoginTest.java
│                   │   │   └── LogoutTest.java
│                   │   ├── dashboard/
│                   │   │   └── DashboardTest.java
│                   │   └── BaseTest.java
│                   ├── api/
│                   │   ├── AuthAPITest.java
│                   │   └── UserAPITest.java
│                   └── suites/
│                       ├── SmokeTestSuite.java
│                       ├── RegressionTestSuite.java
│                       └── CrossBrowserSuite.java
├── test-output/
│   ├── extent-reports/
│   ├── screenshots/
│   ├── allure-results/
│   └── surefire-reports/
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── scripts/
│   ├── run-tests.bat
│   ├── run-tests.sh
│   └── setup.sh
├── testng-suites/
│   ├── smoke.xml
│   ├── regression.xml
│   ├── cross-browser.xml
│   └── parallel.xml
├── docs/
│   ├── FRAMEWORK_GUIDE.md
│   ├── SETUP.md
│   └── BEST_PRACTICES.md
├── .gitignore
├── pom.xml
├── testng.xml
└── README.md
```

## Key Components Explanation

**Configuration Management:**

- Environment-specific configs
- Browser configurations
- Test data management

**Page Object Model:**

- Base page classes
- Specific page implementations
- Component-based architecture

**Utilities & Helpers:**

- WebDriver utilities
- API helpers
- Database connections
- Screenshot capture
- Wait mechanisms

**Reporting:**

- Multiple report formats (HTML, Allure, Extent)
- Screenshot attachment
- Video recording (Playwright)

**CI/CD Integration:**

- GitHub Actions workflows
- Docker containerization
- Parallel execution support

**Test Organization:**

- Logical test grouping
- Suite configurations
- Data-driven testing