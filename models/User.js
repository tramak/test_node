const crypto = require('crypto');
let mongoose = require('../libs/mongoose');
let emailRule = require('../validate/rules/email');

let schemaUser = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  }
});

schemaUser.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha256', this.salt).update(password).digest('hex');
};

schemaUser.virtual('password')
  .set(function(password) {
    this._plainPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._plainPassword;
  });

schemaUser.path('email').validate(emailRule, 'Электронная почта введена не верно');
schemaUser.path('gender').validate(value => {
  return /male|female/i.test(value);
}, 'Пол неверен');

module.exports = mongoose.model('User', schemaUser);