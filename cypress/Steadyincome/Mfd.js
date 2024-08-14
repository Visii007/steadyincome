import { selectSite, loginWithMobile, enterOTP ,loginWithComputer } from '../support/commands';

describe('My First Test Suite', () => {

    it('My First Test Case', () => {

        loginWithComputer();

        // Proceed with investment flow
        cy.get('#fixed-deposit').click()
        cy.get(':nth-child(1) > .benefits_sec > .right_multivendor > .btn-footer').click()
        cy.get('#InvestNow').click()

        // Import a file
        cy.get('#importButton').click()

        // Attach the file
        const fileName = 'files/DEFPP6010H_1723532338.zip';
        cy.get('input[id="importFile"]').attachFile(fileName);

        // Confirm the import
        cy.get('#importButton').click()

        // Agree to terms and conditions
        cy.get('#terms_steps').check()
        cy.get('.CTA_KYC > .login_CTA').click()
        cy.get('#terms').check()
        cy.get('#terms3').check()

        // Proceed to investment
        cy.get('#proceed_investment').click()

        // Continue with the rest of the test...
    });
})



