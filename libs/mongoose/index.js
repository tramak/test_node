let mongoose = require('mongoose');
let config = require('config');
mongoose.connect(config.mongoose.url, config.mongoose.options);

let db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')});
db.once('open', () => {
  console.log( '+++Connected to mongoose')
});

module.exports = mongoose;