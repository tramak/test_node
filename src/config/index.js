// let nconf = require('nconf');
// let path = require('path');
//
// nconf.argv()
//   .env()
//   .file({
//     file: path.join(__dirname, 'config.json')
//   });
//
// module.exports = nconf;
let port = 3002;
let config = {
  port: port,
  mongoose: {
    url: 'mongodb://localhost/gosapis',
    options: {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  },
  graphQl: {
    url: 'http://localhost:' + port + '/graphql'
  }
};

module.exports = config;