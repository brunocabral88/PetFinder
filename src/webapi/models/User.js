const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  petEvents: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'PetEvent' },
  ],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
