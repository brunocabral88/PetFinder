import IUsersRepository from "./IUsersRepository";

const User = require('../models/User');

export default class UsersRepository implements IUsersRepository {

  
  findUserByEmailAsync(email: String): Promise<typeof User> {
    if (!email) throw Error('Email parameter is required');
    return User.findOne({});
  }

  createUserAsync(user: any): Promise<typeof User> {
    return User.create(user);
  }
}
