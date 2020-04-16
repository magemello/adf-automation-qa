const clickOnElement = elem => {
    element(by.id(`${elem}`)).click();
}

const clickOnCSSElement = elemCSS => {
    element(by.css(`${elemCSS}`)).click();
}

const clickOnCSSContainingTextElement = (elemCSS,elemText) => {
    element(by.cssContainingText(`${elemCSS}`,`${elemText}`)).click();
}

const clickOnClassNameElement = elemClass => {
    element(by.className(`${elemClass}`)).click();
}

const clickOnChildElementByCss = (parent,child,index) => {
    const parentIdentifier = element(by.id(`${parent}`))
    const childIdentifier = parentIdentifier.all(by.css(`${child}`)).get(`${index}`)
    childIdentifier.click()
}

const clickOnChildElementByClass = (parent,child,index) => {
    const parentIdentifier = element(by.id(`${parent}`))
    const childIdentifier = parentIdentifier.all(by.className(`${child}`)).get(`${index}`)
    childIdentifier.click()
}

export default {
    clickOnElement,
    clickOnCSSElement,
    clickOnCSSContainingTextElement,
    clickOnClassNameElement,
    clickOnChildElementByCss,
    clickOnChildElementByClass,
}