const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins')

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
     configureAllureAdapterPlugins(on, config)
     return config
    },
  },
  env: {
    allure: true,
    allureLogCyCommands: true,
    allureReuseAfterSpec: true,
    webUrl: "https://rough-casey-testingtalk-13d498f2.koyeb.app"
  },
});
