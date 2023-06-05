// /// <reference types="cypress-xpath" />

describe('Add To Cart', ()=>{

    it('Remove Cart', function(){
        cy.visit("https://demo.nopcommerce.com/")

        cy.title().should('eq',"nopCommerce demo store")
        cy.wait(2000)


        cy.get('#small-searchterms').type("Apple MacBook Pro")
        //cy.get('#small-search-box-form > .button-1').click()
        cy.xpath("//button[contains(text(), 'Search')]").click()
        cy.get('.product-title > a').click()
        cy.get('#add-to-cart-button-4').click()
        cy.wait(2000)

        cy.get('.cart-label').click()
        cy.get('.product-unit-price').contains("$1,800.00")
        cy.get('.product-subtotal').contains("$3,600.00")

        cy.get('tbody > tr > .remove-from-cart').click()
        //console.log("Shipping cart is empty")
        cy.wait(4000)

        // cy.get('.product-title > a').click()
        // cy.get('#add-to-cart-button-4').click()
        // cy.wait(5000)

        // cy.xpath("//span[contains(text(),'Shopping cart')]").click()
        // cy.xpath("//span[@class='product-unit-price']").contains("$1,800.00")
        // cy.xpath("//span[@class='product-subtotal']").contains("$3,600.00")







    })



})