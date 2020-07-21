export default class Login {

    get usernameInput() {
        return element(by.css('input[data-automation-id=username]'));
    }

    get passwordInput() {
        return element(by.css('input[data-automation-id=password]'));
    }

    get signInBtn() {
        return element(by.css('button[data-automation-id=login-button]'));
    }

    get userContainter() {
        return element(by.id('userinfo_container'));
    }
}
