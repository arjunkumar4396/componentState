const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: 'String',
    trim: true,
    unique: true
  },
  password: {
    type: 'String',
    trim: true
  }
});

module.exports = mongoose.model('User', userSchema);