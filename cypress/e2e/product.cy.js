import loginData from '../support/test-data/login.json';
import product from '../support/page/product'; 

describe("Product Details Page Tests", () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login(loginData.validUser.username, loginData.validUser.password);
  });

  it("opens a product detail page", () => {
    product.redirectToProductPage();
  });

  it("displays correct product name, description, and price", () => {
    product.redirectToProductPage();
    product.selectProductByIndex(0);
  });

  it("allows adding product to the cart from product details page", () => {
    product.selectProductByIndex(0);
    product.clickAddToCartButton();
  });

  it("can return to product list using Back button", () => {
    product.selectProductByIndex(0);
    product.clickBackToProductsButton();
  });
});
