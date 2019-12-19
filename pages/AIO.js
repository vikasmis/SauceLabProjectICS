var AIO = function () {
    this.personalInformation = {
        username: element(by.id('user-name')),
        password: element(by.id('password')),
        button: element(by.css('.btn_action'))
    }
};
module.exports = new AIO();