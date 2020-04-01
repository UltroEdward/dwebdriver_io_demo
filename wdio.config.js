let allure = require('allure-commandline');
let reporter = require('@wdio/allure-reporter');

exports.config = {
  runner: 'local',
  services: ['selenium-standalone'],

  specs: [__dirname + '/specs/*.spec.js'],

  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],

  logLevel: 'error',
  outputDir: __dirname,

  baseUrl: 'https://www.beable.com',
  //
  // Default timeout for all waitForXXX commands.
  waitforTimeout: 150000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  framework: 'mocha',
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
  reporters: [['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true
  }]],

  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000,
    require: ['ts-node/register', '@babel/register']
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: function (config, capabilities) {
    require('@babel/register');
  },
  before: function () {
    console.log('Before hook');
    const chai = require('chai');
    global.expect = chai.expect;
    chai.should();
  },
  onComplete: function (exitCode, config, capabilities, results) {
    let fs = require('fs-extra');

    fs.remove('allure-report', () => {
      let generation = allure(['generate', 'allure-results']);
      generation.on('exit', function (exitCode) {
        console.log('Generation is finished with code:', exitCode);
      });
    });
  }
}
