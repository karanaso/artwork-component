
module.exports = function when() {
    this.When(/^I open the url "(.*)"$/, (url) => {
      browser.url(url);
    });

    this.When(/^there is a number of active elements$/, () => {
      this.activeElementsCount = browser.elements('div.split a.MarkAsSeen.active').value.length;
    });

    this.When(/^I click on an active element$/, () => {
      browser.click('div.split a.MarkAsSeen.active');
    });
};
