const {Given} = require("@badeball/cypress-cucumber-preprocessor") 

Given("The user enters the website", () => {
    cy.visit("/")
})