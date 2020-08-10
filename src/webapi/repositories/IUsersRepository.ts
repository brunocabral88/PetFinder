const User = require('../models/User');

export default interface IUsersRepository {
  findUserByEmailAsync(email: String): Promise<typeof User>;
  createUserAsync(user: typeof User): Promise<typeof User>;
}