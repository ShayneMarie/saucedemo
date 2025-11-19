import checkoutData from '../../support/test-data/checkout.json';

class checkout {
    checkoutButtonLocator = 'button[data-test="checkout"]';
    continueButtonLocator = 'input[data-test="continue"]';
    finishButtonLocator = 'button[data-test="finish"]';
    firstNameInputLocator = 'input[data-test="firstName"]';
    lastNameInputLocator = 'input[data-test="lastName"]';
    postalCodeInputLocator = 'input[data-test="postalCode"]';
    errorLocator = 'h3[data-test="error"]';
    thankYouHeaderLocator = 'h2[data-test="complete-header"]';
    thankYouText = "Thank you for your order!";

    clickCheckout() {
        cy.get(this.checkoutButtonLocator).click();
        cy.url().should("include", "/checkout-step-one.html");  
    }

    checkRequiredFields() {
        cy.get(this.continueButtonLocator).click();
        cy.get(this.errorLocator)
        .should("be.visible")
        .and("contain", checkoutData.errorMessages.firstNameRequired);

        cy.get(this.firstNameInputLocator).type("Shayne");
        cy.get(this.continueButtonLocator).click();
        cy.get(this.errorLocator).should("contain", checkoutData.errorMessages.lastNameRequired);
    }

    completeCheckoutInformation(firstName, lastName, postalCode) {
        cy.get(this.firstNameInputLocator).type(firstName);
        cy.get(this.lastNameInputLocator).type(lastName);
        cy.get(this.postalCodeInputLocator).type(postalCode);
        cy.get(this.continueButtonLocator).click();

        cy.url().should("include", "/checkout-step-two.html");
    }

    finishCheckout() {
        cy.get(this.finishButtonLocator).click();
        cy.url().should("include", "/checkout-complete.html");
        cy.get(this.thankYouHeaderLocator).should("contain", this.thankYouText);
    }
}

module.exports = new checkout();