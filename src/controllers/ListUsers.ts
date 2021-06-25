import { Request, Response } from 'express';
import { ListUsers } from '../services/ListUsers';


class ListUserController {
  async handle(request: Request, response: Response){
    const listUserService = new ListUsers();
    const users = await listUserService.execute();

    response.json(users);
  }
}

export { ListUserController }