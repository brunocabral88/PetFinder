const caseContainer = (usersRepository, passwordHasher, jwtUtils) => {
  const execute = async (email, password) => {
    const user = await usersRepository.findUserByEmailAsync(email);

    if (!user) throw Error('Invalid username or password');

    const passwordMatches = await passwordHasher.comparePassword(password, user.password);

    if (!passwordMatches) {
      throw Error('Invalid username or password');
    }

    const tokenPayload = { userId: user.id };
    const token = jwtUtils.getJwtToken(tokenPayload);

    return token;
  };

  return { execute };
};

module.exports = caseContainer;
