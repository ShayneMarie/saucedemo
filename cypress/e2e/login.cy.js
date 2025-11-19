import login from '../support/page/login.js';
import loginData from '../support/test-data/login.json';

describe('Sauce Demo — Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should login successfully with valid credentials', () => {
    cy.login(loginData.validUser.username, loginData.validUser.password);
  });

  it('should not login with invalid credentials', () => {
    login.loginWithUsernameAndPassword(loginData.invalidUser.username, loginData.invalidUser.password);
    login.checkErrorMessage(loginData.errorMessages.invalidCredentials)
  });

  it('should show error when username is empty', () => {
    login.loginWithPassword(loginData.validUser.password);
    login.checkErrorMessage(loginData.errorMessages.emptyUsername)
  });

  it('should show error when password is empty', () => {
    login.loginWithUsername(loginData.validUser.username, '');
    login.checkErrorMessage(loginData.errorMessages.emptyPassword)
  });

  it('should show error when password is empty', () => {
    login.loginWithUsernameAndPassword(loginData.invalidUser.lockedOutUsername, loginData.validUser.password);
    login.checkErrorMessage(loginData.errorMessages.lockedOutUser)
  });
});
