//settings.js
var SettingsPage = function() {
	this.providerDropdown = element(by.className('mat-select-arrow'));
	this.providerECM = element(by.cssContainingText('span', 'ECM'));
	this.applyBtn = element(by.id('host-button'));

	this.selectECM = function() {
		this.providerDropdown.click();
		this.providerECM.click();
		this.applyBtn.click();
	};
};

module.exports = SettingsPage;