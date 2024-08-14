import { selectSite, loginWithMobile, enterOTP ,loginWithComputer } from '../support/commands';

describe('My First Test Suite', () => {

    it('My First Test Case', () => {

        loginWithComputer();
        cy.get('#bonds').click();
        cy.get(':nth-child(2) > .benefits_sec > .right_multivendor > .button').click();
        cy.get('#loader_div').should('be.visible');

        // Wait for the loader to disappear (indicating the API call has completed)
        cy.get('#loader_div').should('not.be.visible');
        cy.get('.button').click();
        cy.get('#invest_now').click();

        const fileName = 'files/DEFPP6010H_1723532338.zip';
        cy.get('input[id="importFile"]').attachFile(fileName);

        cy.get('#importButton').click()
        cy.get('#terms_steps').check()
        cy.get('.CTA_KYC > .login_CTA').click()


        // Ensure the cypress-file-upload plugin is installed and imported in cypress/support/commands.js
        // import 'cypress-file-upload';

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

           // cy.get('#importButton').click()


            if ($body.find('#demat_account_number').length > 0) {
                cy.get('#demat_account_number').type('1208160145606553');
                cy.get('#cml_broker_name').type('Kite');

                const CMR = 'files/KYCSignedForm.pdf';
                cy.get('#cmr_cml_document').attachFile(CMR);
                // cy.get('#pan_card').should('be.visible').type('DEFPP6010H');

                const PANDOC = 'files/KYCSignedForm.pdf';
                // cy.get('#pan').attachFile(PANDOC);

        //         cy.get('#terms').check()
        //         cy.get('#terms2').check()

        //         cy.get('#proceed_investment').click()

        //     // } else {
        //     //     cy.log('demat_account_number element not found');
        //     //     cy.get('#pan_card').type('1208160145606553');

        //     //     const pan = 'files/pan.jpg';
        //     //     cy.get('#pan').attachFile(pan);
            }
        });

        //  cy.get('#pan_card').type('1208160145606553')

        cy.get('#terms').check();
        cy.get('#terms2').check();
        cy.get('#proceed_investment').click();
    });
});
