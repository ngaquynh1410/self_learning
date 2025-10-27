# cy.get()
- Dùng cho CSS Selector
```
cy.get(CSS Selector)
```

# cy.xpath()
- Chưa support sẵn trên Cypress
- Dành cho xpath
- Cần install thư viện
    - Link: https://www.npmjs.com/package/cypress-xpath
    - Install with npm
        ```
        npm install -D cypress-xpath
        ```    

- Add entry vào file support/commands.js
```js
/// <reference types="cypress-xpath" />
```

- Add entry vào file support/e2e.js
```js
import '@cypress/xpath';
```
hoặc:
```js
require('cypress-xpath');
```

Nếu sử dụng TypeScript, add cypress-xpath to the list of types to be loaded in `tsconfig.json`
```javascript
{
  "compilerOptions": {
    "types": ["cypress", "cypress-xpath"]
  }
}
```

- Cú pháp:
```
cy.xpath(Xpath)
```