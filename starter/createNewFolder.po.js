export default class CreateNewFolder {

    get createNewFolderBtn() {
        return element(by.css('button[data-automation-id=create-new-folder]'));
    }

    get createNewFolderBtn() {
        return element(by.css('button[data-automation-id=create-new-folder]'));
    }

    get createNewFolderDialogNameInput() {
        return element(by.id('adf-folder-name-input'));
    }

    get createNewFolderDialogCreateBtn() {
        return element(by.id('adf-folder-create-button'));
    }

    get createNewFolderDialogCancelBtn() {
        return element(by.id('adf-folder-cancel-button'));
    }

    getRowByFolderName(folderName) {
        return element(by.css(`div[data-automation-id=text_${folderName}]`));
    }
}
