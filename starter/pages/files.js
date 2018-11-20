//files.js
var FilesPage = function() {
	this.newFolderBtn = element(by.xpath('//mat-toolbar/div/button[2]/span/mat-icon'));
	this.newFolderName = element(by.id('adf-folder-name-input'));
	this.newFolderDescription = element(by.id('adf-folder-description-input'));
	this.newFolderCreateBtn = element(by.id('adf-folder-create-button'));
	this.newFolderCancelBtn = element(by.id('adf-folder-cancel-button'));
	
	this.deleteFolder = element(by.xpath('//div[@class="cdk-overlay-pane"]/div/div/button[contains(.,"Delete")]'));
	this.deleteGlobalBtn = element(by.xpath('//button[@title="Delete"]'));
	this.snackbar = element(by.css('.mat-simple-snackbar'));
	this.toolbar = element(by.css('adf-toolbar .mat-toolbar'));
	this.rightMenu = function(foldername) {
		return element(by.xpath('//div[@filename="'	+ foldername + '"]/following-sibling::div[@class="adf-datatable-table-cell alfresco-datatable__actions-cell ng-star-inserted"]/button'));
	};

	this.folderInList = function(foldername) {
		return element(by.xpath('//div[@filename="' + foldername + '"]//span[contains(..,"' + foldername + '")]'));
		//div[@filename="butuflorin"]//span[contains(..,'butuflorin')]
	};

	this.folderIcon = function(foldername) {
		return element(by.xpath('//div[@filename="' + foldername + '"]//img'));
	};

};

module.exports = FilesPage;