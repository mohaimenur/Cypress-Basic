// /// <reference types="cypress-xpath" />

describe('First Test', ()=>{

    it('Hello Cypress', ()=>{
        cy.visit("https://code.visualstudio.com/")
       // let api_menu = "//a[@id='nav-extend']"
        cy.wait(5000)

        //cy.xpath(api_menu).click()
        cy.get('#nav-extend').click()
        cy.wait(5000)
        cy.get('#connect-twitter-link > a').click()

    })



})