// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
// cypress/support/utilities.js

export function selectSite() {
    const url = { "1": "https://steadyincome.in/", "2": "https://staging.steadyincome.in/" };
    const siteMode = prompt('Which site you want to run 1 for LIVE/ 2 for STAGING?', '2');
    return url[siteMode];
}

export function loginWithMobile(mobileNumber) {
    cy.get('.login_CTA').click();
    cy.get('#client_mobile').type(mobileNumber);
    cy.get('#submit-otp').click();
}

export function enterOTP(otp) {
    const otpArray = otp.split('');
    const inputs = ['.input1', '.input2', '.input3', '.input4', '.input5', '.input6'];
    inputs.forEach((selector, index) => {
        cy.get(selector).type(otpArray[index]);
    });
}

export function loginWithComputer() {
    const newUrl = selectSite();
        cy.visit(newUrl);

        loginWithMobile('9638566364');

        cy.window().then((win) => {
            const otp = prompt('Enter OTP', '111111');
            enterOTP(otp);
        });

        // Click to submit the OTP
        cy.get('#submit-reotp').click()
        return true;
}

