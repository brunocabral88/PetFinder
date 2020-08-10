import IUsersRepository from '../../../repositories/IUsersRepository';

export default class LoginCase {
  constructor(private usersRepository: IUsersRepository, private passwordHasher: any, private jwtUtils: any) { }

  execute = async (email: String, password: String) => {
    const user = await this.usersRepository.findUserByEmailAsync(email);

    if (!user) throw Error('Invalid username or password');

    const passwordMatches = await this.passwordHasher.comparePassword(password, user.password);

    if (!passwordMatches) {
      throw Error('Invalid username or password');
    }

    const tokenPayload = { userId: user.id };
    const token = this.jwtUtils.getJwtToken(tokenPayload);

    return token;
  };
}
