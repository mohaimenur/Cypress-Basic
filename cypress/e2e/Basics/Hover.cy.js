// /// <reference types="cypress-xpath" />

describe('First Test', ()=>{



    it('Hello Cypress', function(){
        cy.visit("https://www.amazon.com/")
        cy.wait(2000)

        cy.get('#nav-link-accountList').trigger('mouseover')
        //cy.get('#nav-link-accountList').should('be.visible')
        cy.wait(3000)
        cy.get('[href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"] > .nav-text').click()
        cy.wait(5000)











    })



})