// /// <reference types="cypress-xpath" />

describe('First Test', ()=>{

    // beforeEach(()=>{
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    // })

    // let js_alert= "//button[contains(text(),'Click for JS Alert')]"
    // let js_confirm = "//button[contains(text(),'Click for JS Confirm')]"
    // let js_prompt = "//button[contains(text(),'Click for JS Prompt')]"
    // let result = "//p[@id='result']"

    it('Hello Cypress', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       // cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       // cy.get(':nth-child(1) > button').click()
       // cy.wait(3000)
        //cy.get('#result').should('have.text','You successfully clicked an alert')

        //cy.get(':nth-child(2) > button').click()
        //cy.wait()
        //cy.get('#result').should('have.text','You clicked: Ok')

        //cy.get(':nth-child(3) > button').click()




        //js alert

        // cy.xpath(js_alert).click()
        // cy.xpath(result).should('have.text', 'You successfully clicked an alert')
        // cy.wait(3000)

        // //js confirm
        // cy.on('window:confirm', ()=>{
        //     return false   //true
            
        // })
        // cy.xpath(js_confirm).click()
        // cy.wait(3000)
        


        // js prompt
        // cy.window().then(function($win){
        //     cy.stub($win, 'prompt').returns('Hello Prompt')
        //     cy.xpath(js_prompt).click()
        //     cy.wait(2000)
        // })

        // cy.window().then(win => {
        //     cy.stub(win, 'prompt').returns('This is a test text')
        //     cy.contains('Click for JS Prompt').click()
        //  })
         
        // cy.get('#result').should('have.text', 'You entered: This is a test text')
        


        






    })



})

