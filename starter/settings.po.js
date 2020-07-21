export default class Settings {

    get providerSelect() {
        return element(by.id('adf-provider-selector'));
    }

    get applyBtn() {
        return element(by.css('button[data-automation-id=host-button]'));
    }

    selectProviderOption(optionName) {
        this.providerSelect.click();

        return element(by.cssContainingText('mat-option span.mat-option-text', optionName)).click();
    }
}
