import { selectSite, loginWithMobile, enterOTP ,loginWithComputer } from '../support/commands';

describe('My First Test Suite', () => {

    it('My First Test Case', () => {

        loginWithComputer();
        cy.get('#p2p-lending').click()
        cy.get(':nth-child(2) > .benefits_sec > .right_multivendor > .btn-footer').click()
        
        cy.wait(1000)
        cy.get('#invest_now').click()

        // const fileName = 'files/DEFPP6010H_1723532338.zip';
        // cy.get('input[id="importFile"]').attachFile(fileName);

        // cy.get('#importButton').click()
        // cy.get('#terms_steps').check()
        // cy.get('.CTA_KYC > .login_CTA').click()

        cy.get('body').then(($body) => {
            // Wait for the file input element to be visible and then attach the file
            if ($body.find('input[id="importFile"]').length > 0) {
                const fileName = 'files/DEFPP6010H_1723532338.zip';
                cy.get('input[id="importFile"]', { timeout: 10000 }).should('be.visible').attachFile(fileName);
                cy.get('#importButton').click();
                cy.get('#importButton').click();
                cy.get('#terms_steps').check();
                cy.get('.CTA_KYC > .login_CTA').click();
            }
        });

        cy.get('#checkboxarea').check()
        cy.get('#terms2').check()
         cy.get('#proceed_investment').click()
         cy.get('.swal2-confirm').click()

    })
})