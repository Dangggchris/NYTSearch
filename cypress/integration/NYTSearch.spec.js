describe('Test', () => {

  it ('Visit site', () => {
    cy.visit('https://dangggchris.github.io/NYTSearch/') 
  })

  it ('Searching for dota articles', () => {
    cy.visit('https://dangggchris.github.io/NYTSearch/')
    cy.get('#search-term').type('dota')
    cy.get('#inputGroupSelect01').select('10').should('have.value', '10')
    cy.get('#startYear').type('2016')
    cy.get('#endYear').type('2020')
    cy.get('#run-search').click()
    cy.wait(5000).reload()
  })

  it ('Searching for Covid-19 articles', () => {
    cy.visit('https://dangggchris.github.io/NYTSearch/')
    cy.get('#search-term').type('Covid-19')
    cy.get('#inputGroupSelect01').select('15').should('have.value', '15')
    cy.get('#startYear').type('2020')
    cy.get('#run-search').click()
    cy.wait(10000).reload()
  })
})