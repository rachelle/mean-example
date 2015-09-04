var mongoose = require('mongoose');

var resourceSchema = new mongoose.Schema({
  name: String
});

var jsonFormatter = function(document, returnedObject, options) {
  returnedObject.id = returnedObject._id
  delete returnedObject._id;
  delete returnedObject.__v;
  return returnedObject;
};

resourceSchema.options.toJSON = {
  transform: jsonFormatter
};

module.exports = mongoose.model('Resource', resourceSchema);
