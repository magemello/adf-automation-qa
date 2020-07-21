// spec.js
import Base from './base.po';
import Login from './login.po';
import Settings from './settings.po';
import CreateNewFolder from './createNewFolder.po';
import DeleteFolder from './deleteFolder.po';

const newFolderName = 'emz-vic';
const ecmProvider = 'ECM';

describe('Test', () => {

    it('Switch Provider to ECM', function() {
        const base = new Base();
        const settings = new Settings();

        base.navigateToSettingsPage();

        settings.selectProviderOption(ecmProvider);
        
        expect(settings.providerSelect.getText()).toBe(ecmProvider, 'ECM provider is not selected.');

        settings.applyBtn.click();
    });

    it('Login', () => {
        const base = new Base();
        const login = new Login();

        base.navigateToLoginPage();

        login.usernameInput.sendKeys('guest@example.com');
        login.passwordInput.sendKeys('Password');
        login.signInBtn.click();

        browser.waitForAngular();

        expect(login.userContainter.isDisplayed()).toBe(true, 'User is not logged in.');
    });

    it('Create new folder', () => {
        const base = new Base();
        const createNewFolder = new CreateNewFolder();

        base.navigateToFilesPage();

        createNewFolder.createNewFolderBtn.click();
        createNewFolder.createNewFolderDialogNameInput.sendKeys(newFolderName);
        createNewFolder.createNewFolderDialogCreateBtn.click();
        browser.waitForAngular();

        expect(createNewFolder.getRowByFolderName(newFolderName).getText()).toEqual(newFolderName, 'Folder is not created.');
    });

    it('Create new folder with an existing name - validation', () => {
        const base = new Base();
        const createNewFolder = new CreateNewFolder();
        const sameFolderNameErr = `There's already a folder with this name. Try a different name`;

        base.navigateToFilesPage();

        createNewFolder.createNewFolderBtn.click();
        createNewFolder.createNewFolderDialogNameInput.sendKeys(newFolderName);
        createNewFolder.createNewFolderDialogCreateBtn.click();

        expect(base.getSnackBarByText(sameFolderNameErr).isDisplayed()).toBe(true, 'Error message for creating a folder with an existing name is not displayed.');

        createNewFolder.createNewFolderDialogCancelBtn.click();
    });

    it('Delete folder', () => {
        const createNewFolder = new CreateNewFolder();
        const deleteFolder = new DeleteFolder();

        createNewFolder.getRowByFolderName(newFolderName).click();

        expect(deleteFolder.selectedFolderRowName.getText()).toEqual(newFolderName);

        deleteFolder.selectedFolderRowActionsMenu.click();
        deleteFolder.selectedFolderRowActionsMenuDeleteAction.click();

        expect(createNewFolder.getRowByFolderName(newFolderName).isPresent()).toBe(false, 'Folder was not deleted.');
    });
});
