var mongoose = require('mongoose'),
    expect   = require('chai').expect,
    Resource, id, name;

describe('Resource', function () {
  before(function() {
    // set up mongoose to create a new "test" version of our database
    mongoose.connect('mongodb://localhost/test-db');

    // source the Resource model
    Resource = require('../../models/Resource');
  });

  // before each set of describes reset the database state!
  beforeEach(function(done) {
    Resource.remove({}, function(err) {
      expect(err).not.to.be.ok;

      name = "Resource C";
      data = {name: name};
      Resource.create({name: name}, function(err, resource) {
        expect(err).not.to.be.ok;
        expect(resource).to.be.ok;

        id = resource._id;
        done();
      });
    })
  });

  after(function() {
    mongoose.disconnect();
  });

  describe('toJSON', function() {
    it('returns a clean version of the resources\' JSON', function(done) {
      Resource.findById(id, function(err, resource) {

        var resourceJSON = JSON.stringify(resource);
        var correctJSON  = JSON.stringify({id: id, name: name});

        expect(JSON.parse(resourceJSON)).
              to.eql(JSON.parse(correctJSON));
        done();
      });
    });
  });

});
