// /// <reference types="cypress-xpath" />

describe('First Test', ()=>{


    it('Hello Cypress', function(){
        //cy.visit('https://www.daraz.com.bd/')
        //cy.wait(5000)
        //cy.xpath("//button[contains(text(),'Be Friends')]").click()
        cy.visit('http://10.16.100.244/index.php?category=0')
        cy.wait(2000)
        cy.xpath("//span[contains(text(),'×')]").click()
        










    })



})