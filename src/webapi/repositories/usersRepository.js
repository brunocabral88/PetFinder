const User = require('../models/User');

const findUserByEmailAsync = (email) => {
  if (!email) throw Error('Email parameter is required');

  return User.findOne({ email });
};

const createUserAsync = (user) => {
  User.create(user);
};

const usersRepository = {
  createUserAsync,
  findUserByEmailAsync,
};

module.exports = usersRepository;
