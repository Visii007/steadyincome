describe('My First Test Suites', () => {

    it('My FirstTest Case', () => {
      
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.product:visible').should('have.length',4)
    })
  })