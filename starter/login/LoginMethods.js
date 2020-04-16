import Click from '../generalfunc/GeneralClick'
import Type from '../generalfunc/GeneralTyping'
import LoginID from '../login/LoginIDS'
import LoginCredentials from '../login/LoginCredentials'

const enterUserName = () => {
    Type.typeOnElement(LoginID.userNameID,LoginCredentials.userNameCredential)
}

const enterPassword = () => {
    Type.typeOnElement(LoginID.passwordID,LoginCredentials.passwordCredential)
}
  
const submitLogin = () => {
    Click.clickOnElement(LoginID.submitID)
}

export default {
    enterUserName,
    enterPassword,
    submitLogin,
}
  