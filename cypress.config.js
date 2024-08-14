const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [ 'cypress/integration/examples/*.js' , 
           'cypress/Steadyincome/*.js'],

     screenshotsFolder: 'cypress/failures/screenshots',
     
     
     viewportHeight: 1080,
     viewportWidth: 1920,
  },
});
