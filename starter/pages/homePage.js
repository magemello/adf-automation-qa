var homePage = function() {
    
    var user = element(by.id('adf-userinfo-ecm-name-display'));
    var documentationButton = element(by.css('.mat-button-wrapper'));
    // var contentServicesButton = element.all(by.xpath('//mat-list-item[3]'));
     var contentServicesButton = element.all(by.css('mat-list-item[data-automation-id*="Content Services"]'));
    var createNewFolderButton = element.all(by.css('button.mat-icon-button')).get(5);


    this.getUser = function () {
        return user;
    };

    this.getDocumentationButton = function () {
        return documentationButton;
    };

    this.getContentServicesButton = function () {
        return contentServicesButton;
    };

    this.getCreateNewFolderButton = function () {
        return createNewFolderButton;
    };

};
module.exports = new homePage();