export default class BasePage {
    get location() {
        return browser.getUrl();
    }

    open(url) {
        browser.url(url);
    }

    locationToBe(path) {
        expect(this.location).to.equal(browser.config.baseUrl + path, 'Location is not equals to ' + browser.config.baseUrl + path);
    }

    element(element) {
        return $(element);
    }
}
