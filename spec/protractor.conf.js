exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'features/**/*.js'
  ],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--disable-cache',
        '--disable-application-cache',
        '--disable-offline-load-stale-cache',
        '--disk-cache-size=0',
        '--v8-cache-options=off'
      ]
    }
  },

  baseUrl: 'http://localhost:3000/',

  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    timeout: 4000
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
