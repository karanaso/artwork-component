// const { defineSupportCode } = require('cucumber');
const app = require('../../app');


module.exports = function given() {
    this.Given(/^The server is running$/, (done) => {
      app.listen(3000, () => {
        console.log('server is running');
        done()
      });
    });


};
