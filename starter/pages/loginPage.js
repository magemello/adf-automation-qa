var loginPage = function() {
    
    var logo = element(by.id('adf-login-img-logo'));
    var usernameInputField = element(by.id('username'));
    var passwordInputField = element(by.id('password'));
    var loginButton = element(by.id('login-button'));


    this.getLogo = function () {
        return logo;
    };

    this.getUsernameField = function () {
        return usernameInputField;
    };

    this.getPasswordField = function () {
        return passwordInputField;
    };

    this.getLoginButton = function () {
        return loginButton;
    };

};
module.exports = new loginPage();