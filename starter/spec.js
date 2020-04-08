// spec.js
var constants = require('./utils/constants');
var settingsPage = require('./pages/settingsPage');
var loginPage = require('./pages/loginPage');
var homePage = require('./pages/homePage');
var filesPage = require('./pages/filesPage');


describe('ADF Demo App', function() {

  it('Test', function() {

    //(Step-1) - access URL
    settingsPage.get(constants.get_QA_EXERCISE_URL());
    //asserting that the URL is correct
    expect((settingsPage.getPageTitle())).toEqual(constants.get_SETTINGS_PAGE_TITLE());

    //(Step-2) - changing provider to ECM
    (settingsPage.getSelector()).click();
    (settingsPage.selectNewProvider()).click();
    //verifying if the change is realized
    expect((settingsPage.getSelectorText())).toEqual(constants.get_ECM());

    //(Step-3)applaying changes
    settingsPage.getApplayButton().click();

    //verifying if the change is realized - landed on Login page
    expect(loginPage.getLogo().isDisplayed());
    expect(loginPage.getUsernameField().getAttribute(constants.get_PLACEHOLDER()))
                                    .toEqual(constants.get_USERNAME_PLACEHOLDER());
    expect(loginPage.getPasswordField().getAttribute(constants.get_PLACEHOLDER()))
                                    .toEqual(constants.get_PASSWORD_PLACEHOLDER());
    expect(loginPage.getLoginButton().isEnabled()).toBe(false);

    //(Step-4) - Login 
    loginPage.getUsernameField().sendKeys(constants.get_USERNAME());
    loginPage.getPasswordField().sendKeys(constants.get_PASSWORD());
    //verifying that Login button is enabled
    expect(loginPage.getLoginButton().isEnabled()).toBe(true);

    loginPage.getLoginButton().click();

    //verifying if the login was successful  - landed on Home page
    expect(homePage.getUser().getText()).toEqual(constants.get_USER_NAME());
    expect(homePage.getDocumentationButton().isDisplayed()).toBe(true);

    //(Step-5) - Navigate to Content Services (http://qaexercise.envalfresco.com/files)
    homePage.getContentServicesButton().click();

    //(Step-6) - click on New Folder button
    homePage.getCreateNewFolderButton().click();

    //(Step-7) - assert that Create New Folder form is displayed
    expect(filesPage.getNewFolderForm().isDisplayed()).toBe(true);

    //(Step-8) - fill in the folder name
    filesPage.getNewFolderNameField().sendKeys(constants.get_FOLDER_NAME());

    //(Step-9) - verify that the name is filled in correctly
    // expect(filesPage.getNewFolderNameField().getAttribute(constants.get_PLACEHOLDER())).toEqual(constants.get_FOLDER_NAME());

    //(Step-10) - Click on Create button
    filesPage.getCreateButton().click();

    //(Step-11) - assertThat folder is created
    browser.wait(protractor.ExpectedConditions.presenceOf(filesPage.getFolderNameElement()), 5000, 'Element taking too long to appear in the DOM');
    expect(filesPage.getFolderNameElement().isDisplayed()).toBe(true);

    //(Step-12) - Click on create folder
    homePage.getCreateNewFolderButton().click();

    //(Step-13) - assert that Create New Folder form is displayed
    expect(filesPage.getNewFolderForm().isDisplayed()).toBe(true);

    //(Step-14) -- fill in the folder name
    filesPage.getNewFolderNameField().sendKeys(constants.get_FOLDER_NAME());

    //(Step-15) - verify that the name is filled in correctly
    // expect(filesPage.getNewFolderNameField().getAttribute(constants.get_PLACEHOLDER())).toEqual(constants.get_FOLDER_NAME());

    //(Step-16) - Click on Create button
    filesPage.getCreateButton().click();

    //(Step-17) - New Folder Dialog is still displayed
    expect(filesPage.getNewFolderForm().isDisplayed()).toBe(true);

    //(Step-18) - Error message is displayed
    browser.wait(protractor.ExpectedConditions.visibilityOf(filesPage.getErrorMsgToast()), 5000, 'Element taking too long to appear in the DOM');
    expect(filesPage.getErrorMsgToast().getText()).toEqual(constants.get_ERROR_MSG_STRING());

    //(Stept-19) - Select created folder
    browser.sleep(500);
    filesPage.getCancelButton().click();
    filesPage.getFolderNameElement().click();

    //(Step-20) - Open Options menu
    filesPage.getOptionMenu().click();

    //(Step-21) - Delete created folder
    filesPage.getDeleteButton().click();    
  });

});