const validateFolderDuplicationToast = () => {
    expect(element(by.css('div.cdk-live-announcer-element.cdk-visually-hidden')).isDisplayed()).toBe(true);
    expect(element(by.css('div.cdk-live-announcer-element.cdk-visually-hidden')).getText()).toEqual("There's already a folder with this name. Try a different name.");
}

export default {
    validateFolderDuplicationToast,
}