"use strict";
var passwordHasher = require('../../../utils/passwordHasher');
var usersRepository = require('../../../repositories/usersRepository');
var jwtUtils = require('../../../utils/jwt-utils');
var loginCase = require('./loginCase')(usersRepository, passwordHasher, jwtUtils);
var loginCaseController = require('./loginCaseController')(loginCase);
module.exports = loginCaseController;
