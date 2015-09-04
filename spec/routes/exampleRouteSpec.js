var mocha   = require('mocha'),
    expect  = require('chai').expect,
    request = require('supertest');

// load in the server!
var server  = require('../../server');

describe('GET /resources', function(){
  it('responds with json', function(done){

    request(server)
      .get('/resources')
      .set('Accept', 'application/json')

      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
