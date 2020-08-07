"use strict";
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    petEvents: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'PetEvent' },
    ],
}, { timestamps: true });
var User = mongoose.model('User', userSchema);
module.exports = User;
