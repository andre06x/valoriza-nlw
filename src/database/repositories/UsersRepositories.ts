import { User } from '../../entities/User'
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UserRepositories extends Repository<User> {
    
}

export { UserRepositories };