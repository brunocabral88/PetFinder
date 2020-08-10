import UsersRepository from '../../../repositories/UsersRepository';
import LoginCase from './loginCase';
import LoginCaseController from './loginCaseController';

const passwordHasher = require('../../../utils/passwordHasher');
const jwtUtils = require('../../../utils/jwt-utils');

const usersRepository = new UsersRepository();
const loginCase = new LoginCase(usersRepository, passwordHasher, jwtUtils);
const loginCaseController = new LoginCaseController(loginCase);

export { loginCaseController };
