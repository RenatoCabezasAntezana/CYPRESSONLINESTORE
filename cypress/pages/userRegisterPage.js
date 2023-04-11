class UserRegisterPage {
  elements = {
    registerUser: () => cy.get("#customer_menu_top>li>a"),
    openRegister: () => cy.get("#accountFrm > fieldset > .btn"),
    logoStore: () => cy.get(".logo > img"),

    firstName: () => cy.get("#AccountFrm_firstname"),
    lastName: () => cy.get("#AccountFrm_lastname"),
    emailUser: () => cy.get("#AccountFrm_email"),

    addressUser: () => cy.get("#AccountFrm_address_1"),
    cityUser: () => cy.get("#AccountFrm_city"),
    regionStateUser: () => cy.get("#AccountFrm_zone_id"),
    postCode: () => cy.get("#AccountFrm_postcode"),
    countryUser: () => cy.get("#AccountFrm_country_id"),

    loginName: () => cy.get("#AccountFrm_loginname"),
    passwordUser1: () => cy.get("#AccountFrm_password"),
    passwordUser2: () => cy.get("#AccountFrm_confirm"),

    subscribeYes: () => cy.get("#AccountFrm_newsletter1"),
    subscribeNo: () => cy.get("#AccountFrm_newsletter0"),
    checkSubscribe: () => cy.get("#AccountFrm_agree"),

    continue: () => cy.get('.col-md-2 > .btn')
  };

  redirectRegister() {
    this.elements.registerUser().click();
    this.elements.openRegister().click();
  }
  verifyPageStore() {
    this.elements.logoStore().should("be.visible");
  }

  writePersonalDetailsUser(firstname, lastName, emailUser) {
    this.elements.firstName().type(firstname);
    this.elements.lastName().type(lastName);
    this.elements.emailUser().type(emailUser);
  }

  writeAddressUser(address, city, country, region, code) {
    this.elements.countryUser().select(country);
    this.elements.addressUser().type(address);
    this.elements.cityUser().type(city);
    this.elements.regionStateUser().select(region);
    this.elements.postCode().type(code);
  }

  writeLoginDeails(loginName, password1, password2) {
    this.elements.loginName().type(loginName);
    this.elements.passwordUser1().type(password1);
    this.elements.passwordUser2().type(password2);
  }

  selectNewsletter(boolea) {
    if (boolea === "Yes") this.elements.subscribeYes().click();
    else if (boolea === "No") this.elements.subscribeNo().click();

    this.elements.checkSubscribe().click();
  }

  continueSubmit() {
      this.elements.continue().click()
  }
}
export default new UserRegisterPage();
