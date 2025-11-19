class login{
    usernameLocator = 'input[data-test="username"]';
    passwordLocator = 'input[data-test="password"]'
    loginButtonLocator = 'input[data-test="login-button"]';
    errorMessageLocator = '[data-test="error"]';

    loginWithUsernameAndPassword(username, password){
        cy.get(this.usernameLocator).clear().type(username);
        cy.get(this.passwordLocator).clear().type(password);
        cy.get(this.loginButtonLocator).click();
    }

    loginWithPassword(password){
        cy.get(this.passwordLocator).clear().type(password);
        cy.get(this.loginButtonLocator).click();
    }

    loginWithUsername(username){
        cy.get(this.usernameLocator).clear().type(username);
        cy.get(this.loginButtonLocator).click();
    }

    checkErrorMessage(expectedMessage){
        cy.get(this.errorMessageLocator).should('be.visible')
          .and('contain', expectedMessage);
    }
}

module.exports = new login();