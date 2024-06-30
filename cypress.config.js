const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    webUrl: "https://rough-casey-testingtalk-13d498f2.koyeb.app/#",
  },
});
