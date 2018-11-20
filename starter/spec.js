// spec.js
var LoginPage = require('./pages/login');
var SettingsPage = require('./pages/settings');
var FilesPage = require('./pages/files');

describe('ADF Demo App', function() {
	
	var login = new LoginPage();
	var settings = new SettingsPage();
	var files = new FilesPage();
	
	var EC = protractor.ExpectedConditions;

	var folderName = 'butuflorin';
	//home page locators
	var burger = element(by.id('adf-sidebar-toggle-start'));
	

	beforeAll(function() {
		//Settings page actions	
		browser.get('http://qaexercise.envalfresco.com/settings');
		settings.selectECM();
		
		//Login page actions	
	   // browser.navigate('http://qaexercise.envalfresco.com/login');
		login.loginUser('guest@example.com','Password');
		browser.wait(EC.visibilityOf(burger), 2000);
	});
	
	beforeEach(function() {
		//get to Files page
		browser.get('http://qaexercise.envalfresco.com/files');
		browser.wait(EC.visibilityOf(files.toolbar), 2000);
		
		//delete the folder if exists		
		files.folderInList(folderName).isPresent().then(function(result) {
			if ( result ) {
				files.folderIcon(folderName).click();
			    files.deleteGlobalBtn.click();    
			}
		});			
		browser.wait(EC.invisibilityOf(files.folderInList(folderName)), 2000);
		
	});
	
	it('creates and deletes new folder', function() {

		//browser.get('http://qaexercise.envalfresco.com/files');
		browser.wait(EC.visibilityOf(files.newFolderBtn), 2000);
		files.newFolderBtn.click();		

		browser.wait(EC.visibilityOf(files.newFolderName), 2000);
		files.newFolderName.sendKeys(folderName);	
		//newFolderDescription.sendKeys('folder description');	
		files.newFolderCreateBtn.click();
	
		expect(files.folderInList(folderName).isPresent()).toBe(true);
		
		files.newFolderBtn.click();
		browser.wait(EC.visibilityOf(files.newFolderName), 2000);
		files.newFolderName.sendKeys(folderName);
		//newFolderDescription.sendKeys('folder description');
		files.newFolderCreateBtn.click();
		
		browser.wait(EC.visibilityOf(files.snackbar), 2000);
		expect(files.snackbar.getText()).toEqual("There's already a folder with this name. Try a different name.");
		//browser.wait(EC.invisibilityOf(files.snackbar), 3000);
		
		expect(files.newFolderName.isPresent()).toBe(true);
		files.newFolderCancelBtn.click();
		
		files.rightMenu(folderName).click();
		
		browser.wait(EC.visibilityOf(files.deleteFolder), 2000);
		files.deleteFolder.click();
		browser.wait(EC.visibilityOf(files.snackbar), 2000);
		//expect(files.snackbar.getText()).toContain("butuflorin deleted");
		//browser.wait(EC.invisibilityOf(files.snackbar), 3000);
		
		browser.wait(EC.invisibilityOf(files.folderInList(folderName)), 2000);
		
		expect(files.folderInList(folderName).isPresent()).toBeFalsy();
				
	});
	
	
});