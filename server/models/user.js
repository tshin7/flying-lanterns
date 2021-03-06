const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
const userSchema = mongoose.Schema({
  local: {
    email: String,
    password: String,
  },
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = password => (
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
);

// checking if password is valid
userSchema.methods.validPassword = password => (
  bcrypt.compareSync(password, this.local.password)
);

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
