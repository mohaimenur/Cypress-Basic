// /// <reference types="cypress-xpath" />

describe('First Test', ()=>{

    it('Hello Cypress', ()=>{
        cy.visit("https://code.visualstudio.com/")
       // let api_menu = "//a[@id='nav-extend']"
        cy.title().should('eq',"Visual Studio Code - Code Editing. Redefined")

    })



})