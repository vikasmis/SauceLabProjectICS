const expect = require('chai').expect;
let AIO = require('./pages/AIO').personalInformation

describe('Invalid login', () => {
  it('should not be able to login successfully', async () => {
    browser.ignoreSynchronization = false;
    await browser.get('https://www.saucedemo.com');
    await AIO.username.sendKeys('locked_out_user');
    await AIO.password.sendKeys('secret_sauce');
    await AIO.button.click();
    expect(await element(by.css('.error-button')).isDisplayed()).to.be.true;
  });
});
