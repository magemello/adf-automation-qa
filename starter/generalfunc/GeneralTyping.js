const typeOnElement = (elem,text) => {
    element(by.id(`${elem}`)).sendKeys(`${text}`);
}

export default {
    typeOnElement,
}