const expect = require('chai').expect;
let AIO = require('./pages/AIO').personalInformation

fdescribe('AIO', () => {
  it('Should be able to identifiy the page', async () => {
    browser.ignoreSynchronization = false;
    await browser.get('https://www.icscards.nl/aio/personal?param1=WORLD.WC1&param2=WEB');
    await AIO.acceptButton.click()
    await AIO.submit.click()
    expect(await AIO.personalTitle.isDisplayed()).to.be.true;
  });
});
