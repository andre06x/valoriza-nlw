import { CreateUserService } from '../services/createUserService';
import { Request, Response } from 'express';

class CreateUserController {
    async handle(request: Request, response: Response){
        const { name, email, admin } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, admin })
        
        return response.json(user);
    }
}

export { CreateUserController }