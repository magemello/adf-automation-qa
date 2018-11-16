// conf.js

require("babel-register")({
  presets: [ 'es2015' ]
});

exports.config = {
  specs: ['spec.js'],
  framework: 'jasmine',

  onPrepare: () => {
      // set browser size...
      browser.manage().window().setSize(1024, 800);

      // better jasmine 2 reports...
      const SpecReporter = require('jasmine-spec-reporter');
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));
  },

  capabilities: {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 2,
      chromeOptions: {
          args: [
              // disable chrome's wakiness
              '--disable-infobars',
              '--disable-extensions',
              'verbose',
              'log-path=/tmp/chromedriver.log'
          ],
          prefs: {
              // disable chrome's annoying password manager
              'profile.password_manager_enabled': false,
              'credentials_enable_service': false,
              'password_manager_enabled': false
          }
      }
  },

  jasmineNodeOpts: {
      showColors: true,
      displaySpecDuration: true,
      // overrides jasmine's print method to report dot syntax for custom reports
      print: () => {},
      defaultTimeoutInterval: 50000
  }
};
