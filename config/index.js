let config = {
  port: 3000,
  mongoose: {
    url: 'mongodb://localhost/gosapis',
    options: {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  }
};

module.exports = config;