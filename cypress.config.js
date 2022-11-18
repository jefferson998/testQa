const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // reporter: "cypress-multi-reporters",
  // reporterOptions: {
  //       configFile: "reporter-config.json"
  // },
  screenshotOnRunFailure:true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "test Google",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  video:true,
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
