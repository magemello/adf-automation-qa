import{ BROWSER_TIMEOUT } from '../constants';

const userNameID = 'username';
const passwordID = 'password';
const signinButtonId = 'login-button';
const EC = protractor.ExpectedConditions;

module.exports = {

  loginCredentials: (loginId, password) => {
    element(by.automationLocator(userNameID)).sendKeys(loginId);
    element(by.automationLocator(passwordID)).sendKeys(password);    
  },
  
  clickSigninButton: () => {
    const signIn = element(by.automationLocator(signinButtonId));
    signIn.click();
    browser.wait(EC.urlContains('home'), BROWSER_TIMEOUT);
  }
}