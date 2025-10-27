# Iframe
- https://www.cypress.io/blog/working-with-iframes-in-cypress
1. Xác định locator iframe
- Sử dụng: `get()` hoặc `xpath()`

2. Truy cập nội dung iframe
- Sử dụng `its('contentDocument.body')` để lấy body của iframe
- Hoặc sử dụng `.it('contentWindow')` để truy cập window object của iframe
- Tương tác với element trong iframe
```js
cy.get('iframe[title="Example Iframe"]', { timeout: 10000 })
    .should('be.visible')
    .its('0.contentDocument')
    .its('body') // neu muon switch sang body cua iframe
    .should('not.be.undefined')
    .then(cy.wrap)
    .find('h1')
    .should('have.text', 'Example Domain')
    .should('be.visible');
```

- Example:
```js
    it('Verify h1 in iframe is visible and has correct text', () => {
        cy.visit('https://material.playwrightvn.com/01-xpath-register-page.html');
        cy.get('iframe[title="Example Iframe"]')
            .its('0.contentDocument').should('exist')
            .its("body")
            .then(cy.wrap)
            .find("h1")
            .should("have.text", "Example Domain")
    });
```