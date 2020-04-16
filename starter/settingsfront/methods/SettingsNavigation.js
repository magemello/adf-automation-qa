import VisitSite from '../../siteapp/visitmethods/VisitSiteMethods'     //../../siteApp/visitmethods/VisitSiteMethods'
import URL from '../../siteapp/urls/Url'
import Click from '../../generalfunc/GeneralClick'
import ProviderElements from '../../settingsfront/ProviderElements'
import GeneralID from '../../settingsfront/General'

const launchApplication = () => {
    VisitSite.launchApp(URL.appURL)
}

const selectSettingsDropdown = () => {
    Click.clickOnElement(ProviderElements.providerDropdown)
}

const selectECMOption = () => {
    Click.clickOnChildElementByCss(ProviderElements.PROVIDER_LIST_ID,ProviderElements.ECM_CSS,1)
}

const applySelection = () => {
    Click.clickOnElement(GeneralID.apply)
}

export default {
    launchApplication,
    selectSettingsDropdown,
    selectECMOption,
    applySelection
}