const waitForElement = (elem,time) => {
    let until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(`${elem}`), `${time}`, 'Element taking too long to appear in the DOM');
}

export default {
    waitForElement,
}