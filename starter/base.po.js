export default class Base {

    navigateToSettingsPage() {
        return browser.get('http://qaexercise.envalfresco.com/settings');
    }

    navigateToLoginPage() {
        return browser.get('http://qaexercise.envalfresco.com/login');
    }

    navigateToFilesPage() {
        return browser.get('http://qaexercise.envalfresco.com/files');
    }

    getSnackBarByText(text) {
        return element(by.cssContainingText('simple-snack-bar', text));
    }
}
