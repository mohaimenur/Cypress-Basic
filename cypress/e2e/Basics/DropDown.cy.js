// /// <reference types="cypress-xpath" />

describe('First Test', ()=>{

    beforeEach(function(){
        cy.viewport(1020, 780)
        cy.visit('https://register.rediff.com/register/register.php')
    })

    it('Hello Cypress', function(){
        cy.get('[width="200"] > input').type('Test User')
        cy.get('[valign="bottom"] > [type="text"]').type('12575521757')
        cy.get('[value="f"]').check()
        cy.get('#country').select('99')
        cy.get(':nth-child(1) > [colspan="3"] > select').select('Bangalore')


        //cy.xpath("//option[contains(text(),'Kolkata')]").click()

        //cy.wait(5000)










    })



})