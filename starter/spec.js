import VisitSite from './site/visitmethods/VisitSiteMethods'
import URL from './site/urls/Url'
import GeneralFunctionalities from './generalfunc/GeneralClick'
import ProviderElements from './settingsfront/ProviderElements'
import GeneralCommands from './settingsfront/General'
import Wait from './generalfunc/WaitForElement'

describe('ADF Demo App', function() {

 it('should validate an UI automation flow', function() {
    VisitSite.launchApp(URL.appURL)
    GeneralFunctionalities.clickOnElement(ProviderElements.providerDropdown)
    GeneralFunctionalities.clickOnChildElement(ProviderElements.PROVIDER_LIST_ID,ProviderElements.ECM_CSS,1)
    GeneralFunctionalities.clickOnElement(GeneralCommands.apply)
  });
});