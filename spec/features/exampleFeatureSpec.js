var chai = require('chai'),
    cp   = require('chai-as-promised'),
    expect;

chai.use(cp); // https://github.com/domenic/chai-as-promised
expect = chai.expect;

describe('A basic, unauthenticated user', function() { // Role
  describe('can visit the website', function() {       // Goal
    it('and will see a welcome message', function() {  // Test(s) that goal is met.
      browser.get('/');

      var heading = element(by.css('.content h1'));

      expect(heading.getText()).to.eventually.match(/Hello/i);
    });
  });
});
