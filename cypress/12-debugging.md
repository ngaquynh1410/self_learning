# Debugging in Cypress
## Use `debugger`
```js
it('let me debug like a fiend', () => {
  cy.visit('/my/page/path')

  cy.get('[data-testid="selector-in-question"]')

  debugger // Doesn't work
})
```
- Cả `cy.visit()` và `cy.get()` sẽ return ngay lập tức, các actions này sẽ được thực hiện sau, và `debugger` sẽ chạy trước bất kỳ cmd nào thực sự run. Behavior tương tự là expected trong Component Tests khi sử dụng `cy.mount()`
- Hãy sử dụng `.then()` để đi vào cmd Cypress và add thêm `debugger` vào thời điểm bạn muốn.
```js
it('let me debug when the after the command executes', () => {
  cy.visit('/my/page/path')

  cy.get('[data-testid="selector-in-question"]').then(($selectedElement) => {
    // Debugger is hit after the cy.visit
    // and cy.get commands have completed
    debugger
  })
})
```

## Use `.debug()`
- Cypress cung cấp `.debug()` để debug.
```js
it('let me debug like a fiend', () => {
  cy.visit('/my/page/path')

  cy.get('[data-testid="selector-in-question"]').debug()
})
```
![image](https://docs.cypress.io/img/app/debugging/debugging-subject.png)

## Step through test commands
- Sử dụng `.pause()`, cho phép bạn inspect website, DOM, network và bất kỳ storage sau khi cmd để đảm bảo mọi thứ diễn ra như expected.
```ts
it('adds items', () => {
  cy.pause()
  cy.get('[data-testid="new-todo"]')
  // more commands
})
```

