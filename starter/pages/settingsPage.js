var settingsPage = function() {
    
        var selector = element(by.id('adf-provider-selector'));
        var ecmElement = element(by.id('mat-option-1'));
        var applayButton = element(by.id('host-button'));


        this.get = function (url) {
            browser.get(url);
        };

        this.getPageTitle = function () {
            return browser.getTitle();
        };

        this.getSelector = function () {
            return selector;
        };

        this.selectNewProvider = function () {
            return ecmElement;
        };

        this.getSelectorText = function () {
            return selector.getText();
        };

        this.getApplayButton = function () {
            return applayButton;
        };
  };
  module.exports = new settingsPage();