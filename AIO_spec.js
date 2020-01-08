const expect = require('chai').expect;
const AIOpage = require('./pages/AIO')
let temp=require('./pages/AIO')

fdescribe('AIO', () => {

  it('Should be able to identifiy the page', async () => {
    browser.ignoreSynchronization = false;
    await browser.get('https://www.qa.icscards.nl/aio/personal?param1=WORLD.WC1&param2=WEB');
    await AIOpage.personalInformation.acceptbutton.click()
    await AIOpage.personalInformation.submit.click()
    expect(await AIOpage.personalInformation.personalTitle.isDisplayed()).to.be.true;
    AIOpage.precheckCustomers()
    AIOpage.cardDetails()
    AIOpage.personalInformation.submitButton.click()
    AIOpage.identification()
    AIOpage.personalInformation.submitButton.click()
    AIOpage.termAcceptPage()
  });
});
