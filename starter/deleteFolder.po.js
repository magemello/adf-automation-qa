export default class DeleteFolder {

    get selectedFolderRow() {
        return element(by.css('adf-datatable-row.adf-is-selected'));
    }

    get selectedFolderRowName() {
        return this.selectedFolderRow.all(by.css(`div.adf-datatable-cell--text`)).first();
    }

    get selectedFolderRowActionsMenu() {
        return this.selectedFolderRow.all(by.css(`button[aria-label=Actions]`)).first();
    }

    get selectedFolderRowActionsMenuDeleteAction() {
        return element(by.css(`button[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]`));
    }
}
