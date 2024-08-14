import { selectSite, loginWithMobile, enterOTP ,loginWithComputer } from '../support/commands';

describe('My First Test Suite', () => {

    it('My First Test Case', () => {

        loginWithComputer();
        
        cy.get('#fractional-ownership').click()
        cy.get(':nth-child(2) > .benefits_sec > .right_multivendor > .btn-footer').click()
        
        cy.get('.record_loader').should('be.visible');

        // Wait for the loader to disappear (indicating the API call has completed)
        cy.get('.record_loader').should('not.be.visible');
        
        cy.get('.first_bond_CTA > .button').click()

        const fileName = 'files/DEFPP6010H_1723532338.zip';
        cy.get('input[id="importFile"]').attachFile(fileName);

        cy.get('#importButton').click()
        cy.get('#terms_steps').check()
        cy.get('.CTA_KYC > .login_CTA').click()
        cy.get('#terms').check()
         cy.get('#terms2').check()
         cy.get('#proceed_investment').click()
         cy.get('.swal2-confirm').click()

    })
})