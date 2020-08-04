const bcrypt = require('bcrypt');

const encryptPassword = (password) => bcrypt.hash(password, 10);

const caseContainer = (usersRepository) => {
  const execute = async (user) => {
    if (!user || !user.email || !user.password) throw Error('Email and password are mandatory');

    const userExists = await usersRepository.findUserByEmailAsync(user.email);
    if (userExists) throw Error('User already exists in database');

    // Encrypt password
    const hashedPassword = await encryptPassword(user.password);

    // eslint-disable-next-line no-param-reassign
    user.password = hashedPassword;

    // Save user
    await usersRepository.createUserAsync(user);
  };

  return { execute };
};

module.exports = caseContainer;
