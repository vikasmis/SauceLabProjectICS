
class WaitHelper {
    waitForRedirect(expectedUrl, timeout = 10000) {
        var loaded = false;

        browser.wait(function () {
            browser.executeScript(function () {
                return {
                    url: window.location.href,
                    haveAngular: !!window.angular
                };
            }).then(function (obj) {
                loaded = (obj.url.includes(expectedUrl) && obj.haveAngular);
            });

            return loaded;
        }, timeout);
    }
    //// this will wait until non angular page loads
    WaitforNonAngular() {
        browser.waitForAngularEnabled(false)
        browser.wait(function () {
            return browser.executeScript('return jQuery.active;').then(function (text) {
                return text == 0;
            });
        });
    }
    // this will wait until  angular page loads
    waitforAngular() {
        browser.wait(function () {
            return browser.executeScript('return document.readyState==="complete" &&' +
                ' jQuery !== undefined && jQuery.active==0;').then(function (text) {
                    return text === true;
                });
        }, 30000);
    }
    /**
     * Wait until an element is Displayed
     * @param {object} element The element that should be Displayed
     * @param {number} timeout Time to wait for the element to be Displayed. Default is 10 seconds
     * @returns {boolean} Will return true once the element is Displayed
     */
    getElement(element, timeout = 10000) {
        // Wait for the element to be Displayed
        browser.driver.wait(function () {
            return element.isDisplayed().then(function (displayed) {
                return displayed;
            });
        }, timeout, `${element} not Displayed`);
        return element;
    }
    // element can be from your page object defined somewhere
    waitForElement(element, timeout = 10000) {
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(element), timeout, `${element} taking too long to appear in the DOM`);
    }
    // locator can be from your page object defined somewhere
    getValidationText(locator, text) {
        text = text || ''
        locator.getText().then((text) => {
            expect(text).toEqual(text)
        })
    }
    // locator can be from your page object defined somewhere
    getContainText(locator, text) {
        text = text || ''
        locator.getText().then((text) => {
            expect(text).toContain(text)
        })
    }
    // locator can be from your page object defined somewhere
    clearField(locator) {
        locator.clear()
    }

    // element can be from your page object defined somewhere
    enterText(element, value) {
        expect(element.isPresent()).toBeTruthy()
        return element.getAttribute('ng-model').then(function (ngModel) {
            element.evaluate('$eval("' + ngModel + ' = \'' + value + '\'") && $digest()');
        });
    }
    //Note: 0=January, 1=February etc.
    getDate(d, m, y) {
        d = d || 0,
            m = m || 0,
            y = y || 0
        var temp = new Date();
        m = temp.getMonth() + (d)
        y = temp.getFullYear() + (y)
        d = temp.getDate() + (d)
        return (d + "/" + m + "/" + y);
    }
    // generating a random index into the string and extracting the character at that position
    generateSpecialChar() {
        var s = "!\"§$%&/()=?\u{20ac}";

        return s.substr(Math.floor(s.length * Math.random()), 1);
    }
    // generating a random string into the number and extracting the character at that position
    Generate_random_string(string_length) {
        let random_string = '';
        let random_ascii;
        for (let i = 0; i < string_length; i++) {
            random_ascii = Math.floor((Math.random() * 25) + 97);
            random_string += String.fromCharCode(random_ascii)
        }
        return random_string
    }
    // This will count the lenght of a text or string

    stringCount(locator, value) {
        locator.getAttribute('value').then((items) => {
            expect(items.length).toEqual(value)
        })
    }
    //page locator click

    pageClick(locators) {
        locators.click()
        locators.sendKeys(protractor.Key.TAB)
    }
    // Bwowser back state check
    browserBack() {
        window.history.back();
    }
    mouseMove(locator) {
        browser.actions()
            .mouseMove(locator)
            .perform();
    }
}

module.exports = new WaitHelper();