var filesPage = function() {


    // var newFolderForm = element(by.xpath('//h2[contains(text(), "New folder")]'));
    var newFolderForm = element(by.css('.cdk-overlay-pane'));

    var newFolderNameInputField = element(by.id('adf-folder-name-input'));
    var createButton = element(by.id('adf-folder-create-button'));
    var cancelButton = element(by.id('adf-folder-cancel-button'));
    
    // var folderNameElement = element(by.xpath("//span[contains(text(), '" + FOLDER_NAME + "')]"));
    var folderNameElement = element(by.css('span[title*="IolleTudorA"]'));
    
    // var errorMsgToast = element(by.xpath('//span[contains(text(), "' + ERROR_MSG_STRING + '")]'));
    var errorMsgToast = element(by.css('.mat-snack-bar-container'));
  
    var optionMenu = element(by.xpath("//div[@class='adf-datatable-body']//adf-datatable-row[@class='adf-datatable-row ng-star-inserted adf-is-selected']"+
                                      "//div[@class='adf-datatable-cell adf-datatable__actions-cell adf-datatable-center-actions-column-ie ng-star-inserted']"+
                                      "//button[@class='mat-icon-button']"));

    // var deleteButton  = element(by.xpath("//button[@class='mat-menu-item ng-star-inserted']//span[contains(text(),'Delete')]"));
    var deleteButton  = element(by.css('button[aria-label*="Delete"]'));
  

    this.getNewFolderForm = function () {
        return newFolderForm;
    };

    this.getNewFolderNameField = function () {
        return newFolderNameInputField;
    };

    this.getCreateButton = function () {
        return createButton;
    };

    this.getCancelButton = function () {
        return cancelButton;
    };

    this.getFolderNameElement = function () {
        return folderNameElement;
    };

    this.getErrorMsgToast = function () {
        return errorMsgToast;
    };

    this.getOptionMenu = function () {
        return optionMenu;
    };

    this.getDeleteButton = function () {
        return deleteButton;
    };

};
module.exports = new filesPage();