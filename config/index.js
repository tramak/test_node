let config = {
  port: 3000,
  mongoose: {
    url: 'mongodb://localhost/gosapis',
    options: {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  },
  graphQl: {
    url: 'http://localhost:3000/graphql'
  }
};

module.exports = config;