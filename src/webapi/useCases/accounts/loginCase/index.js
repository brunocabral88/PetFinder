const passwordHasher = require('../../../utils/passwordHasher');
const usersRepository = require('../../../repositories/usersRepository');
const jwtUtils = require('../../../utils/jwt-utils');

const loginCase = require('./loginCase')(usersRepository, passwordHasher, jwtUtils);
const loginCaseController = require('./loginCaseController')(loginCase);

module.exports = loginCaseController;
