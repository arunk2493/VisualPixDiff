//const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const HtmlReporter = require('protractor-html-screenshot-reporter');

/*const reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html',
    captureOnlyFailedSpecs: true,
    showSummary: true
});*/

exports.config = {

    /*beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    },
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },*/
   /* onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'target/screenshots'
        }));
    }*/
    onPrepare: function () {
       const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
            /*var AllureReporter = require('jasmine-allure-reporter');
            jasmine.getEnv().addReporter(new AllureReporter({
                resultsDir: 'allure-results'
            }));*/
    },
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./src/tests/pageObjectTest.js'],
    capabilities: {
        browserName: 'chrome'
    },
    allScriptsTimeout: 60000,
    /*onPrepare: function() {
        var PixDiff = require('pix-diff');
        browser.pixdiff = new PixDiff(
            {
                basePath: './visual-tests/src/screenshots/',
                diffPath: './src/diffShots',
                width: 1280,
                height: 1024
            }
        );
    }*/
}
