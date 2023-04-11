const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://automationteststore.com/",
    reporter : 'cypress-mochawesome-reporter',
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      require ('cypress-mochawesome-reporter/plugin')(on); 
      allureWriter(on, config);
      return config;
    },
  },
});