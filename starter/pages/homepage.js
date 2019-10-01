import{ URL, BROWSER_TIMEOUT, DELETED_MESSAGE } from '../constants';

const folderButtonID = 'create-new-folder';
const enterFolderName = 'adf-folder-name-input';
const createButtonID = 'adf-folder-create-button';
const liveAnnouncerClass = '.cdk-live-announcer-element';
const cancelButtonID = 'adf-folder-cancel-button';
const deleteFolderID = 'DOCUMENT_LIST.ACTIONS.FOLDER.DELETE';
const dataTableClass = '.adf-datatable-body';
const dataTableRow = '.adf-datatable-row';
const EC = protractor.ExpectedConditions;

module.exports = {
  navigateToContentService: () => {
    // User can click 'Content Services' in main menu alternatively "element(by.automationLocator('Content Services')).click();"
    browser.navigate().to(URL + 'files');
  },

  createFolder: (folderName) => {
    browser.waitForAngularEnabled(false);
    const createFolderButton = element(by.automationLocator(folderButtonID));    
    
    browser.wait(EC.elementToBeClickable(createFolderButton), BROWSER_TIMEOUT);
    browser.actions().mouseMove(createFolderButton).perform();
    element(by.automationLocator(folderButtonID)).click();
    
    element(by.id(enterFolderName)).sendKeys(folderName); /// No automation Id. So using control id
    element(by.id(createButtonID )).click(); /// No automation Id. So using control id
  },

  deleteFolder: (folderName) => {
    //There is no automation or control ID, so using .css to find controls
    let gridRows = element.all(by.css(dataTableClass)).get(1).all(by.css(dataTableRow));
    //let gridRows = $$(dataTableClass).get(1).$$(dataTableRow);

    gridRows.count().then((rowCount) => {
      for(let i = 0; i < rowCount; i++) {
        module.exports.clickActionMenu(gridRows, i, folderName);
      }
    });

    element(by.automationLocator(deleteFolderID)).click();
    module.exports.waitForLiveAnnouncer(folderName + DELETED_MESSAGE);
  },

  clickCancelButton: () => {
    element(by.id(cancelButtonID)).click();
  },

  waitForLiveAnnouncer: (message) => {
    const liveAnnouncerElement = $(liveAnnouncerClass);
    browser.wait(EC.textToBePresentInElement(liveAnnouncerElement, message), BROWSER_TIMEOUT);
  },

  clickActionMenu: (gridRows, rowIndex, automationId) => {
    const rows = gridRows.get(rowIndex).all(by.automationLocator(automationId));
    rows.count().then((rc) => {
    if (rc > 0) { 
      element(by.automationLocator('action_menu_' + rowIndex)).click();
     }
    });
  }
}