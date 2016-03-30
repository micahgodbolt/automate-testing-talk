try {
    var config = require('../config');
} catch (ex) {
}
exports.config = {

    user: 'micahgodbolt2',
    key:  config ? config.key : process.env.browserstack,

    updateJob: true,
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        'test/visual.js'
    ],
    // Patterns to exclude.
    exclude: [
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilties at the same
    // time. Depending on the number of capabilities WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude option in
    // order to group specific specs to a specific capability.
    //
    // If you have trouble getting all important capabilities together check out Sauce Labs
    // platform configurator. A great tool to configure your capabilities.
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
      'browser' : 'Chrome',
      'browser_version' : '49.0',
      'os' : 'OS X',
      'os_version' : 'El Capitan',
      'resolution' : '1280x1024',
      'debug': true
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity.
    logLevel: 'null',
    //
    // Enables colors for log output
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: 'shots',
    //
    // Shorten url command calls by setting a base url. If your url parameter starts with "/"
    // the base url gets prepended.
    baseUrl: 'http://godbolt.me/rwd',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 10000,
    plugins: {
        webdrivercss: {
            screenshotRoot: "./test/visual/shots",
            failedComparisonsRoot: "./test/visual/shots/diffs",
            misMatchTolerance: 0.15,
            updateBaseline: false
        }
    },
    //
    //
    // Framework you want to run your specs with.
    // The following are supported: mocha, jasmine and cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the node package for the specific framework installed before running
    // any tests. If not please install the following package:
    // Mocha: `$ npm install mocha`
    // Jasmine: `$ npm install jasmine`
    // Cucumber: `$ npm install cucumber`
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The following are supported: dot (default), spec and xunit
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporter: 'spec',
    //
    // Some reporter require additional information which should get defined here
    reporterOptions: {
        //
        // If you are using the "xunit" reporter you should define the directory where
        // WebdriverIO should save all unit reports.
        outputDir: './'
    },
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        timeout: 60000,
        ui: 'bdd'
    },
    //
    // Options to be passed to Jasmine.
    //
    // =====
    // Hooks
    // =====
    // Run functions before or after the test. If one of them return with a promise, WebdriverIO
    // will wait until that promise got resolved to continue.
    //
    // Gets executed before all workers get launched.
    onPrepare: function() {
    },
    //
    // Gets executed before test execution begins. At this point you will have access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function() {
      require("webdrivercss").init(browser, browser.options.plugins.webdrivercss);
      var chai = require('chai');
      var chaiAsPromised = require('chai-as-promised');

      chai.use(chaiAsPromised);
      expect = chai.expect;
      chai.Should();
    },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
    after: function(failures, pid) {
        console.log('\n finish up the tests');
    },
    //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    onComplete: function() {
        console.log("\n Visual Test suite complete");
    }
};
