import { selectSite, loginWithMobile, enterOTP ,loginWithComputer } from '../support/commands';

describe('My First Test Suite', () => {

    it('My First Test Case', () => {

        loginWithComputer();
        cy.get('#fixed-deposit').click()
        cy.get(':nth-child(3) > .benefits_sec > .right_multivendor > .btn-footer').click()
        cy.wait(1000)
        cy.get('#InvestNow').click()

        // Get the file input element and attach the file
        const fileName = 'files/DEFPP6010H_1723532338.zip';
        cy.get('input[id="importFile"]').attachFile(fileName);
        cy.get('#importButton').click()
        cy.get('#terms_steps').check()
        cy.get('.CTA_KYC > .login_CTA').click()
        cy.get('#terms').check()
        cy.get('#terms3').check()
        cy.get('#proceed_investment').click()

    })
})