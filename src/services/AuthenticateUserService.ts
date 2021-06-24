import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../database/repositories/UsersRepositories';

import { sign } from 'jsonwebtoken';
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
    
    const token = sign({
      email: user.email,
    }, "6425ddbf9cd648e1e4d33c4340d3373d", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateUserService }