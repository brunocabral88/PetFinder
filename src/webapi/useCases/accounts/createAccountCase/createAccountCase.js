const bcrypt = require('bcrypt');

const caseContainer = (usersRepository) => {
  const execute = async (user) => {
    if (!user || !user.email || !user.password) throw Error('Email and password are mandatory');

    const userExists = await usersRepository.findUserByEmailAsync(user.email);
    if (userExists) throw Error('User already exists in database');

    // Encrypt password
    const plainTextPassword = user.password;
    bcrypt.hash(plainTextPassword, 10, async (err, hash) => {
      if (err) throw Error('Error hashing password');

      // eslint-disable-next-line no-param-reassign
      user.password = hash;

      // Save user
      await usersRepository.createUserAsync(user);
    });
  };

  return { execute };
};

module.exports = caseContainer;
