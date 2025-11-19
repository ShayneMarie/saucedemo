class cart {
    shoppingCartLinkLocator = 'a[data-test="shopping-cart-link"]';
    addToCartButtonLocator = 'button[data-test^="add-to-cart"]';
    inventoryItemLocator = 'div[data-test="inventory-item"]';
    inventoryItemNameLocator = 'div[data-test="inventory-item-name"]';
    removeFirstItemFromCartLocator = 'button[data-test^="remove-"]';
    
    redirectToCartPage() {
        cy.get(this.shoppingCartLinkLocator).click();
        cy.url().should("include", "/cart.html");
    }

    addFirstItemToCart() {
        cy.get(this.addToCartButtonLocator).first().click();
        cy.get(this.shoppingCartLinkLocator).click();
    }

    verifyItemInCart() {
        cy.get(this.inventoryItemLocator).should("have.length", 1);
        cy.get(this.inventoryItemNameLocator).should("be.visible");
    }

    removeFirstItemFromCart(itemName) {
        cy.get(this.removeFirstItemFromCartLocator).first().click();
        cy.get(this.inventoryItemLocator).should("have.length", 0);
    }
}

module.exports = new cart();