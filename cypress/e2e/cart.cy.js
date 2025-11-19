import cart from '../support/page/cart';
import loginData from '../support/test-data/login.json';

describe("Cart Page Tests", () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login(loginData.validUser.username, loginData.validUser.password);
  });

  it("opens the cart from the header", () => {
    cart.redirectToCartPage();
  });

  it("shows items that were added to the cart", () => {
    cart.addFirstItemToCart();
    cart.verifyItemInCart();
  });

  it("allows removing an item from the cart", () => {
    cart.addFirstItemToCart();
    cart.removeFirstItemFromCart()
  });
});
