import{ URL, BROWSER_TIMEOUT } from '../constants';

const providerSelectorId = 'adf-provider-selector';
const applyButtonId = 'host-button';
const EC = protractor.ExpectedConditions;

module.exports = {
  loadSettingsPage: () => {
    browser.get(URL + 'settings');
    browser.waitForAngularEnabled(false);
  },

  setProvider: (providerValue) => {
    const providerSelector = element(by.id(providerSelectorId));
    providerSelector.sendKeys(providerValue);
    browser.wait(EC.textToBePresentInElement(providerSelector, providerValue), BROWSER_TIMEOUT);
  },

  clickApplyButton: () => {
    const applyButton = element(by.automationLocator(applyButtonId));
    browser.wait(EC.elementToBeClickable(applyButton), BROWSER_TIMEOUT);    
    applyButton.click();
  }
}