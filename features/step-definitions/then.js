const assert = require('assert');

module.exports = function then() {
  this.Then(/^there should one element less active element in the list$/, () => {
    // const activeElementsCount = browser.elements('div.split a.MarkAsSeen.active').value.length;
    const expectedResult = this.activeElementsCount - 1;

    assert.equal( browser.elements('div.split a.MarkAsSeen.active').value.length, expectedResult );
  });
}