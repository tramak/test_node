let mongoose = require('../libs/mongoose');
let Schema = mongoose.Schema;

let schemaRegion = new Schema({
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

let Region = mongoose.model('Region', schemaRegion);

module.exports = Region;