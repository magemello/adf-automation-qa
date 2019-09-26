import { sign } from "crypto";

  const baseURL = 'http://qaexercise.envalfresco.com/';
  const loginID = 'guest@example.com';
  const userPassword = 'Password';
  const gitUserName = 'swethamani';
  const sleepTime = 500;

  describe('settings', () => {
  it('displays settings page',() =>{
    browser.get(baseURL + 'settings');
    expect(browser.getCurrentUrl()).toBe(baseURL + 'settings');
    });
  });

  describe('when ECM is changed', () => {
    it('displays the changed value', () => {
      element(by.id('adf-provider-selector')).sendKeys('ECM');

      expect($('.mat-select-value').getText()).toEqual('ECM');
    });
  });

  describe('when apply is clicked', () => {
    it('moves to login page', () => {
      element(by.automationLocator("host-button")).click();
      expect(browser.getCurrentUrl()).toBe(baseURL + 'login');
    });
  });

  describe('when user credentials are entered', () => {
    it('Navigates to home page', () => {
      let userName = element(by.automationLocator('username'));
      let password = element(by.automationLocator('password'));
      let signin = element(by.automationLocator('login-button'));
      
      userName.sendKeys(loginID);
      password.sendKeys(userPassword);
      expect(signin.isEnabled()).toBe(true);
      signin.click();
      browser.sleep(sleepTime);
      expect(browser.getCurrentUrl()).toBe(baseURL + 'home');
    });
  });

  describe('When user clicks new folder and gives folder name', () => {
    it('new folder created with user entered name', () => {
      browser.navigate().to(baseURL + 'files'); // (or)
      // User can click "Content Services" in main menu alternatively
      // element(by.automationLocator('Content Services')).click();
      browser.sleep(sleepTime);
      expect(browser.getCurrentUrl()).toBe(baseURL + 'files');

      createFolderHelper();
    });

    it('when user tries to create folder with existing name error is displayed and user clicks cancel button', () => {
      createFolderHelper();
      element(by.id('adf-folder-cancel-button')).click();
    });
  });

  const clickActionMenu = (gridRows, rowIndex, automationId) => {
    const rows = gridRows.get(rowIndex).all(by.automationLocator(automationId));
    rows.count().then((rc) => {
      if(rc > 0){ 
        element(by.automationLocator('action_menu_' + rowIndex)).click();
      }
    });
  }

  describe('when user actions delete Folder', () => {
    it('User selected folder will be deleted from grid', () => {
    //There is not automation or control ID, so using .css to find controls
    let gridRows = element.all(by.css('.adf-datatable-body')).get(1).all(by.css('.adf-datatable-row')); 

    gridRows.count().then((rowCount) => {
      console.log('rowCount : ' + rowCount);
      for(let i = 0; i < rowCount; i++) {
        clickActionMenu(gridRows, i, gitUserName);
      }
    });    

      browser.sleep(sleepTime);
      element(by.automationLocator('DOCUMENT_LIST.ACTIONS.FOLDER.DELETE')).click();
    });
  });

  const createFolderHelper = () => {
    browser.sleep(sleepTime);
      element(by.automationLocator('create-new-folder')).click();
      element(by.id('adf-folder-name-input')).sendKeys(gitUserName); /// No automation Id. So using control id
      element(by.id('adf-folder-create-button')).click(); /// No automation Id. So using control id
  }
