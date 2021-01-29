describe("Example page", function() {

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://github.com');
    });

    it("should match the page", function () {
        expect(browser.pixdiff.checkScreen('example-Login')).toMatch('')
    });

    xit("should not match the page", function () {
        element(By.buttonText('yes')).click();
        expect(browser.pixdiff.checkScreen('example-page')).toNotMatch();
    });

    xit("should match the title", function () {
        expect(browser.pixdiff.checkRegion(element(By.id('title')), 'example-page-title')).toMatch();
    });

    xit("should match the title", function () {
        expect(browser.pixdiff.checkRegion(element(By.id('title')), 'example-page-title', {
            blockOut: {x: 10, y: 132, width: 100, height: 50}})).toMatch();
    });
});
