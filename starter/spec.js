// spec.js

describe('ADF Demo App', function() {

  //elements on the Settings page
  var selector = element(by.id('adf-provider-selector'));
  var ecmElement = element(by.id('mat-option-1'));
  var applayButton = element(by.id('host-button'));

  const ECM = 'ECM';
  const SETTINGS_PAGE_TITLE = 'Welcome - Alfresco ADF Application';
  const QA_EXERCISE_URL = 'http://qaexercise.envalfresco.com/settings';

  //elements on the Login page
  var logo = element(by.id('adf-login-img-logo'));
  var usernameInputField = element(by.id('username'));
  var passwordInputField = element(by.id('password'));
  var loginButton = element(by.id('login-button'));

  const PLACEHOLDER = 'placeholder';
  const USERNAME_PLACEHOLDER = 'Username';
  const PASSWORD_PLACEHOLDER = 'Password';

  const USERNAME = 'guest@example.com';
  const PASSWORD = 'Password';

  //elements on the home page
  var user = element(by.id('adf-userinfo-ecm-name-display'));
  var documentationButton = element(by.css('.mat-button-wrapper'));
  var contentServicesButton = element.all(by.xpath('//mat-list-item[3]'));
  var createNewFolderButton = element.all(by.css('button.mat-icon-button')).get(5);

  const USER_NAME = 'guest guest';

  //elements on files page
  var newFolderForm = element(by.xpath('//h2[contains(text(), "New folder")]'));
  var newFolderNameInputField = element(by.id('adf-folder-name-input'));
  var createButton = element(by.id('adf-folder-create-button'));
  var cancelButton = element(by.id('adf-folder-cancel-button'));

  const FOLDER_NAME = 'IolleTudorA';

  var folderNameElement = element(by.xpath("//span[contains(text(), '" + FOLDER_NAME + "')]"));
  var errorMessageString = "There's already a folder with this name. Try a different name.";
  var errorMessage = element(by.xpath('//span[contains(text(), "' + errorMessageString + '")]'));

  var optionMenu = element(by.xpath("//div[@class='adf-datatable-body']//adf-datatable-row[@class='adf-datatable-row ng-star-inserted adf-is-selected']"+
                                    "//div[@class='adf-datatable-cell adf-datatable__actions-cell adf-datatable-center-actions-column-ie ng-star-inserted']"+
                                    "//button[@class='mat-icon-button']"));
  var deleteButton  = element(by.xpath("//button[@class='mat-menu-item ng-star-inserted']//span[contains(text(),'Delete')]"));

  var deleteConfirmationMassage = element(by.xpath("//span[contains(text(), '" + FOLDER_NAME + " deleted')]"));



  it('Test', function() {

    //(Step-1) - access URL
    browser.get(QA_EXERCISE_URL);
    //asserting that the URL is correct
    expect(browser.getTitle()).toEqual(SETTINGS_PAGE_TITLE);

    //(Step-2) - changing provider to ECM
    selector.click();
    ecmElement.click();
    //verifying if the change is realized
    expect(selector.getText()).toEqual(ECM);

    //(Step-3)applaying changes
    applayButton.click();
    //verifying if the change is realized - landed on Login page
    expect(logo.isDisplayed());
    expect(usernameInputField.isDisplayed()).toBe(true);
    expect(passwordInputField.isDisplayed()).toBe(true);
    expect(loginButton.isDisplayed()).toBe(true);
    expect(usernameInputField.getAttribute(PLACEHOLDER)).toEqual(USERNAME_PLACEHOLDER);
    expect(passwordInputField.getAttribute(PLACEHOLDER)).toEqual(PASSWORD_PLACEHOLDER);
    expect(loginButton.isEnabled()).toBe(false);

    //(Step-4) - Login 
    usernameInputField.sendKeys(USERNAME);
    passwordInputField.sendKeys(PASSWORD);
    //verifying that Login button is enabled
    expect(loginButton.isEnabled()).toBe(true);

    loginButton.click();

    //verifying if the login was successful  - landed on Home page
    expect(user.getText()).toEqual(USER_NAME);
    expect(documentationButton.isDisplayed()).toBe(true);

    //(Step-5) - Navigate to Content Services (http://qaexercise.envalfresco.com/files)
    contentServicesButton.click();

    expect(createNewFolderButton.isDisplayed()).toBe(true);

    //(Step-6) - click on New Folder button
    createNewFolderButton.click();

    //(Step-7) - assert that Create New Folder form is displayed
    expect(newFolderForm.isDisplayed()).toBe(true);

    //(Step-8) - fill in the folder name
    newFolderNameInputField.sendKeys(FOLDER_NAME);

    //(Step-9) - verify that the name is filled in correctly
    // expect(newFolderNameInputField.getAttribute(PLACEHOLDER)).toEqual(folderNameString);

    //(Step-10) - Click on Create button
    createButton.click();

    //(Step-11) - assertThat folder is created
    browser.wait(protractor.ExpectedConditions.presenceOf(folderNameElement), 5000, 'Element taking too long to appear in the DOM');
    expect(folderNameElement.isDisplayed()).toBe(true);

    //(Step-12) - Click on create folder
    createNewFolderButton.click();

    //(Step-13) - assert that Create New Folder form is displayed
    expect(newFolderForm.isDisplayed()).toBe(true);

    //(Step-14) -- fill in the folder name
    newFolderNameInputField.sendKeys(FOLDER_NAME);

    //(Step-15) - verify that the name is filled in correctly
    // expect(newFolderNameInputField.getAttribute(PLACEHOLDER)).toEqual(folderNameString);

    //(Step-16) - Click on Create button
    createButton.click();

    //(Step-17) - New Folder Dialog is still displayed
    expect(newFolderForm.isDisplayed()).toBe(true);

    //(Step-18) - Error message is displayed
    browser.wait(protractor.ExpectedConditions.visibilityOf(errorMessage), 5000, 'Element taking too long to appear in the DOM');
    expect(errorMessage.getText()).toEqual(errorMessageString);


    //(Stept-19) - Select created folder
    browser.sleep(500);
    cancelButton.click();
    folderNameElement.click();

    //(Step-20) - Open Options menu
    optionMenu.click();

    //(Step-21) - Delete created folder
    deleteButton.click();    
  });

});