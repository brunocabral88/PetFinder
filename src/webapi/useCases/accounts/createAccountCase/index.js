const usersRepository = require('../../../repositories/usersRepository');
const createAccountCase = require('./createAccountCase')(usersRepository);
const createAccountCaseController = require('./createAccountController')(createAccountCase);

module.exports = createAccountCaseController;
