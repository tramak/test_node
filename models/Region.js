let mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;

let schema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  label: {
    type: String,
    unique: true,
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