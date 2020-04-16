import Click from '../generalfunc/GeneralClick'
import Type from '../generalfunc/GeneralTyping'
import Files from './FilesAndFoldersID'
import Toasts from '../generalfunc/Toasts'

const accessFolderContextMenu = () => {
    const parentIdentifier = element(by.css('[aria-label="andrewwclimm"]'))
    const childIdentifier = parentIdentifier.all(by.css('[aria-label="Actions"]'))
    childIdentifier.click()
}

const deleteFolderFromContextMenu = () => {
    let par = element(by.css('[role="menu"]'))
    let chld = par.all(by.css('[role="menuitem"]')).get(4)
    chld.click()
}

const assertFolderDeletion = () => {
    element.all(by.cssContainingText('adf-datatable-row.ng-star-inserted', 'andrewwclimm')).then(function(items) {
        expect(items.length).toBe(0);
    })
}

const goToFilesSection = () => {
    Click.clickOnCSSContainingTextElement(Files.folderSectionID,Files.folderSectionName)
}

const clickOnCreateNewFolder = () => {
    Click.clickOnCSSContainingTextElement(Files.createNewFolderID,Files.createNewFolderName)
}

const nameTheFolder = () => {
    Type.typeOnElement(Files.folderNameID,Files.folderNameValue)
}

const createFolder = () => {
    Click.clickOnElement(Files.createFolderID)
}

const cancelFolderCreation = () => {
    Click.clickOnElement(Files.cancelFolderCreationID)
}
export default {
    accessFolderContextMenu,
    deleteFolderFromContextMenu,
    assertFolderDeletion,
    goToFilesSection,
    clickOnCreateNewFolder,
    nameTheFolder,
    createFolder,
    cancelFolderCreation,
}