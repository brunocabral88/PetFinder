"use strict";
var User = require('../models/User');
var findUserByEmailAsync = function (email) {
    if (!email)
        throw Error('Email parameter is required');
    return User.findOne({ email: email });
};
var createUserAsync = function (user) {
    User.create(user);
};
var usersRepository = {
    createUserAsync: createUserAsync,
    findUserByEmailAsync: findUserByEmailAsync,
};
module.exports = usersRepository;
