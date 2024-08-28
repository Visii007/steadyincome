import { selectSite, loginWithMobile, enterOTP ,loginWithComputer } from '../support/commands';

describe('My First Test Suite', () => {

    it('My First Test Case', () => {

        loginWithComputer();
        cy.get('#securitized-debt-instruments').click()
        cy.get('#explore_button_first_section').click()
        
        cy.wait(1000)
        cy.get('#InvoiceX > .bond_sec_area > .top_bond_sec_area > .bond_sec_space > :nth-child(5) > .button').click()
        cy.get('#invest_now').click()
        cy.get('#pan_card').type('DEFPP6010H')
        cy.get('#checkboxarea').check()
        //cy.get('#InvestNow').click()

        // Get the file input element and attach the file
        // const fileName = 'files/DEFPP6010H.zip';
        // cy.get('input[id="importFile"]').attachFile(fileName);
        // cy.get('#importButton').click()
        // 
        // cy.get('.CTA_KYC > .login_CTA').click()
        // 
        // cy.get('#terms2').check()
         cy.get('#proceed_investment').click()
         
         cy.get('#terms2').check()
         cy.get('#checkboxarea').check()
         cy.get('#proceed_investment').click()

    })
})