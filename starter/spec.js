import{ PROVIDER, GIT_USER_NAME, URL, LOGIN_ID, PASSWORD, DUPLICATE_FOLDER_MESSAGE, DELETED_MESSAGE } from './constants';
import settingsPage from './pages/settingspage'; 
import loginPage from './pages/loginpage'; 
import homePage from './pages/homepage'; 

describe('settings', () => {
  it('displays settings page',() => {
    settingsPage.loadSettingsPage();
    expect(browser.getCurrentUrl()).toBe(URL + 'settings');
  });
});

describe('when ECM is changed', () => {
  it('displays the changed value', () => {
    settingsPage.setProvider(PROVIDER);
    expect(element(by.id('adf-provider-selector')).getText()).toEqual(PROVIDER);
  });
});

describe('when apply is clicked', () => {
  it('moves to login page', () => {
    settingsPage.clickApplyButton();
    expect(browser.getCurrentUrl()).toBe(URL + 'login');
  });
});

describe('when user credentials are entered', () => {
  it('Navigates to home page', () => {
    loginPage.loginCredentials(LOGIN_ID, PASSWORD);
    loginPage.clickSigninButton();
    expect(browser.getCurrentUrl()).toBe(URL + 'home');
  });
});

describe('When user clicks new folder and gives folder name', () => {
  it('new folder created with user entered name', () => {
    homePage.navigateToContentService();
    homePage.createFolder(GIT_USER_NAME);
  });

  it('when user tries to create folder with existing name error is displayed', () => {
    homePage.createFolder(GIT_USER_NAME);
    homePage.waitForLiveAnnouncer(DUPLICATE_FOLDER_MESSAGE);
    expect(element(by.className('cdk-live-announcer-element')).getText()).toBe(DUPLICATE_FOLDER_MESSAGE);
    homePage.clickCancelButton();
  });
});

describe('when user actions delete Folder', () => {
  it('User selected folder will be deleted from grid', () => {
    homePage.deleteFolder(GIT_USER_NAME);  
    expect(element(by.className('cdk-live-announcer-element')).getText()).toBe(GIT_USER_NAME + DELETED_MESSAGE);
  });
});
  
  
