import produdctData from '../test-data/product.json';

class prduct {
    itemLocator = 'div[data-test="inventory-item-name"]';
    descriptionLocator = 'div[data-test="inventory-item-desc"]';
    priceLocator = 'div[data-test="inventory-item-price"]';
    addToCartButtonLocator = 'button[data-test="add-to-cart"]';
    shoppingCartBadgeLocator = 'span[data-test="shopping-cart-badge"]';
    backToProductButtonLocator = 'button[data-test="back-to-products"]';

    redirectToProductPage() {
        cy.get(this.itemLocator).first().click();
        cy.url().should("include", "/inventory-item.html");
    }

    selectProductByIndex(productIndex) {
        cy.contains(this.itemLocator, produdctData.products[productIndex].name).click();

        cy.get(this.itemLocator).should("contain", produdctData.products[productIndex].name);
        cy.get(this.descriptionLocator).should("be.visible");
        cy.get(this.descriptionLocator).should("contain", produdctData.products[productIndex].description);
        cy.get(this.priceLocator).should("contain", produdctData.products[productIndex].price);
    }

    clickAddToCartButton() {
        cy.get(this.addToCartButtonLocator).click();
        cy.get(this.shoppingCartBadgeLocator).should("contain", "1");
    }

    clickBackToProductsButton() {
        cy.get(this.backToProductButtonLocator).click();
        cy.url().should("include", "/inventory.html");
    }
}

module.exports = new prduct();