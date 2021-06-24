import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../database/repositories/UsersRepositories';
import { hash } from 'bcryptjs';

interface UserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({name, email, admin, password } : UserRequest){
        const usersRepository = getCustomRepository(UserRepositories);

        if(!email){
            throw new Error("Email incorrect");
        }
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        })

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }