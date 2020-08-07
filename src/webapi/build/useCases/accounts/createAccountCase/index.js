"use strict";
var usersRepository = require('../../../repositories/usersRepository');
var createAccountCase = require('./createAccountCase')(usersRepository);
var createAccountCaseController = require('./createAccountController')(createAccountCase);
module.exports = createAccountCaseController;
