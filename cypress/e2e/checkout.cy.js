import loginData from '../support/test-data/login.json';
import cart from '../support/page/cart';
import checkout from '../support/page/checkout.js';
import checkoutData from '../support/test-data/checkout.json';

describe("Checkout Flow Tests", () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login(loginData.validUser.username, loginData.validUser.password);

    cart.addFirstItemToCart();
    cart.verifyItemInCart();
  });

  it("starts checkout successfully", () => {
    checkout.clickCheckout();
  });

  it("requires all checkout info fields", () => {
    checkout.clickCheckout();
    checkout.checkRequiredFields();
  });

  it("completes checkout information", () => {
    checkout.clickCheckout();
    checkout.completeCheckoutInformation(checkoutData.checkoutInfo.firstName, checkoutData.checkoutInfo.lastName, checkoutData.checkoutInfo.postalCode);
  });

  it("finishes purchase", () => {
    checkout.clickCheckout();
    checkout.completeCheckoutInformation(checkoutData.checkoutInfo.firstName, checkoutData.checkoutInfo.lastName, checkoutData.checkoutInfo.postalCode);
    checkout.finishCheckout();
  });
});