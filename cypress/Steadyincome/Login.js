describe('My First Test Suite', () => {

    it('My First Test Case', () => {
      
        cy.visit('https://staging.steadyincome.in/')
        cy.get('.login_CTA').click()
        cy.get('#client_mobile').type('9638566364')
        cy.get('#submit-otp').click()

        const inputs = ['.input1', '.input2', '.input3', '.input4', '.input5', '.input6'];
        let vipNo = [
            
            '9824934041','9909732024'
        ];

        cy.get('#client_mobile').invoke('val').then((mobile) => {
            if (vipNo.includes(mobile)) {
                let i = 1;
                inputs.forEach((selector) => {
                    cy.get(selector).type(i.toString());
                    i++;
                });
            } else {
                inputs.forEach((selector) => {
                    cy.get(selector).type('1');
                });
            }
        });
      
        cy.get('#submit-reotp').click()
    })
})

function inArray(needle, haystack) {
    var length = haystack.length;
    for (var i = 0; i < length; i++) {
        if (haystack[i] == needle) return true;
    }
    return false;
}
