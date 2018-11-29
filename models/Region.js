let mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;

let schema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  zip: String,
  type: String,
  typeShort: String,
  okato: String,
  contentType:String
});

let Region = mongoose.model('Region', schema);

module.exports = Region;