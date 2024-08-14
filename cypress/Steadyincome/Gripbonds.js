import { selectSite, loginWithMobile, enterOTP ,loginWithComputer } from '../support/commands';

describe('My First Test Suite', () => {

    it('My First Test Case', () => {

        loginWithComputer();
        cy.get('#bonds').click()
        cy.get(':nth-child(3) > .benefits_sec > .right_multivendor > .button').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .top_bond_sec_area > .bond_sec_space > :nth-child(4) > .button').click()
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