const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout:8000,
    pageLoadTimeout: 500000,
    chromeWebSecurity: false,
    experimentalMemoryManagement:true,
    video:false,
    redirectionLimit: 50,
    downloadsFolder:'cypress/downloads',
    
    setupNodeEvents(on, config) {
     
    },
  },
  env: {
    webUrl: "https://rough-casey-testingtalk-13d498f2.koyeb.app",
  },
});
