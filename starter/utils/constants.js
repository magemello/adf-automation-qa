var constants = function() {
    
  //elements on the Settings page
    const ECM = 'ECM';
    const SETTINGS_PAGE_TITLE = 'Welcome - Alfresco ADF Application';
    const QA_EXERCISE_URL = 'http://qaexercise.envalfresco.com/settings';

  //elements on the Login page
    const PLACEHOLDER = 'placeholder';
    const USERNAME_PLACEHOLDER = 'Username';
    const PASSWORD_PLACEHOLDER = 'Password';
    const USERNAME = 'guest@example.com';
    const PASSWORD = 'Password';

  //elements on the home page
    const USER_NAME = 'guest guest';

  //elements on files page
    const FOLDER_NAME = 'IolleTudorA';
    const ERROR_MSG_STRING = "There's already a folder with this name. Try a different name.";

    this.get_ECM = function () {
        return ECM;
    };

    this.get_SETTINGS_PAGE_TITLE = function () {
        return SETTINGS_PAGE_TITLE;
    };

    this.get_QA_EXERCISE_URL = function () {
        return QA_EXERCISE_URL;
    };

    this.get_PLACEHOLDER = function () {
        return PLACEHOLDER;
    };

    this.get_USERNAME_PLACEHOLDER = function () {
        return USERNAME_PLACEHOLDER;
    };

    this.get_PASSWORD_PLACEHOLDER = function () {
        return PASSWORD_PLACEHOLDER;
    };

    this.get_USERNAME = function () {
        return USERNAME;
    };

    this.get_PASSWORD = function () {
        return PASSWORD;
    };

    this.get_USER_NAME = function () {
        return USER_NAME;
    };

    this.get_FOLDER_NAME = function () {
        return FOLDER_NAME;
    };

    this.get_ERROR_MSG_STRING = function () {
        return ERROR_MSG_STRING;
    };
};
module.exports = new constants();