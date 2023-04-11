const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
import UserRegisterPage from "../../pages/userRegisterPage";

Given("The user enters the website", () => {
  cy.on("uncaught:exception", () => false);
  cy.visit("/");
});

When("The user is directed to register on the website", () => {
  UserRegisterPage.redirectRegister();
});

Then("The user is on the registration page", () => {
  cy.on("uncaught:exception", () => false);
  UserRegisterPage.verifyPageStore();
});

Then(
  "The user begins to register on the site {string}, {string}, {string}",
  (firstname, lastname, email) => {
    UserRegisterPage.writePersonalDetailsUser(firstname, lastname, email);
  }
);

Then(
  "The user registers his address {string}, {string}, {string}, {string}, {string}",
  (address, city, country, region, code) => {
    UserRegisterPage.writeAddressUser(address, city, country, region, code);
  }
);
Then(
  "The user registers his login {string}, {string}, {string}",
  (loginName, password1, password2) => {
    UserRegisterPage.writeLoginDeails(loginName, password1, password2);
  }
);
Then("The user select newsletter {string}", (boolea) => {
  UserRegisterPage.selectNewsletter(boolea);
});

Then("The user click continue", () => {
  UserRegisterPage.continueSubmit();
});
