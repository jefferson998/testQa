describe('Test Google search', () => {
  it('I visit the google site', () => {
    cy.visit('https://www.google.com/',{
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'es'
        })
      }
    })
  })

  it("I search term in tab",() => {
    cy.get('[title="Buscar"]').type('qa automation').type('{enter}');
  
  });

  it("I can see the results",()=>{
    cy.get('#result-stats').invoke('text').then((text) => {
      cy.log(`The results are ${text.split(' ')[2]}`);
  
   })
  
  });
  
  it("I can see the time for searching",()=>{
    cy.get('#result-stats').invoke('text').then((text) => {
      cy.log(`The time for searching is ${text.split(' ')[4].replace('(','')} ${text.split(' ')[5].replace(')','')}`);
  
   })
  
  });

  it("Validate the results with the term",() => {
    cy.get('a').children('h3').each((item, index, list) => {
        cy.log(Cypress.$(item).text())
        expect(Cypress.$(item).text().toUpperCase()).to.contains('qa automation'.toUpperCase());
  });
  })


  it("The page of results include link to Settings",() => {
     cy.get('[aria-label="Preferencias"]').should('be.visible').then((condition) => {
        cy.log(condition)
     })
  })
})