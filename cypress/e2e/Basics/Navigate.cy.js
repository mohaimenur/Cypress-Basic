/// <reference types='Cypress' />

describe('Cypress Basic', () => {
    beforeEach(() => {
        //Visit website
      cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Navigate ', function (){
        let dropDown = "//a[contains(text(),'Dropdown')]"
        let dropDownText = "//h3[contains(text(),'Dropdown List')]"
        let dynamicContent = "//a[contains(text(),'Dynamic Content')]"
        let dynamicContentText = "//h3[contains(text(),'Dynamic Content')]"
        let dynamicContentClickHere = "//a[contains(text(),'click here')]"

        click(dropDown)
        cy.xpath(dropDownText).should('have.text','Dropdown List')
        cy.wait(5000)
        cy.go('back')

        cy.wait(5000)
        click(dynamicContent)
        cy.xpath(dynamicContentText).should('have.text','Dynamic Content')

        cy.wait(5000)
        click(dynamicContentClickHere)
        
        cy.wait(5000)
        //back
        cy.go('back') //cy.go(-1)
        //forward
        cy.wait(5000)
        cy.go('forward') //cy.go(1)
        cy.wait(5000)
        cy.reload()
        cy.wait(3000)

    })

})

//custom click method
function click(xpath){
    cy.xpath(xpath).click()
}