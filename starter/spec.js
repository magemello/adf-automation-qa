
import SettingsSection  from './settingsfront/methods/SettingsNavigation'
import LoginSection from './login/LoginMethods'
import FilesSection from './files/FilesAndFoldersMethods'
import Maximize from './generalfunc/WindowSizes'
import Toasts from './generalfunc/Toasts'

describe('ADF Demo App - automation end to end flow on folder creation and deletion', function() {
 it('should validate an UI automation flow', function() {
    SettingsSection.launchApplication()
    SettingsSection.selectSettingsDropdown()
    SettingsSection.selectECMOption()
    SettingsSection.applySelection()
    LoginSection.enterUserName()
    LoginSection.enterPassword()
    LoginSection.submitLogin()
    Maximize.maximizeWindow()
    FilesSection.goToFilesSection()
    FilesSection.clickOnCreateNewFolder()
    FilesSection.nameTheFolder()
    FilesSection.createFolder()
    FilesSection.clickOnCreateNewFolder()
    FilesSection.nameTheFolder()
    FilesSection.createFolder()
    Toasts.validateFolderDuplicationToast()
    FilesSection.cancelFolderCreation()
    FilesSection.accessFolderContextMenu()
    FilesSection.deleteFolderFromContextMenu()
    FilesSection.assertFolderDeletion()
  });
});