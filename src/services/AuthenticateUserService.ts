import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../database/repositories/UsersRepositories';

import { compare } from 'bcryptjs';
interface IAuhenteticateResqueste {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({email, password}: IAuhenteticateResqueste){
    const userRepositories = getCustomRepository(UserRepositories)
 
    const user = await userRepositories.findOne({
      email
    });

    if(!user){
      throw new Error("Email/Password incorrect")
    };

    const passwordMatch = await compare(password, user.password);
  }
}

export { AuthenticateUserService }