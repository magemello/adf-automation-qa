//login.js

var LoginPage = function() {
	this.username = element(by.id('username'));
	this.password = element(by.id('password'));
	this.signIn = element(by.id('login-button'));

	this.loginUser = function(username, password) {
		this.username.sendKeys(username);
		this.password.sendKeys(password);
		this.signIn.click();
	};
};

module.exports = LoginPage;