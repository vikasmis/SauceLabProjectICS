exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    sauceRegion: 'eu',
    'tunnelIdentifier': 'Unnamed tunnel',
    specs: ['*spec.js'],
    //sauceRegion: 'eu',

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },
    multiCapabilities: [{
        browserName: 'firefox',
        version: 'latest',
        platform: 'OS X 10.13',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 10',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
    }
}
