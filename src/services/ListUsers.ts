import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../database/repositories/UsersRepositories';


class ListUsers {
 async execute(){
    const userRepositories = getCustomRepository(UserRepositories);
    const users = await userRepositories.find();

    return classToPlain(users);
  }
}

export {ListUsers}