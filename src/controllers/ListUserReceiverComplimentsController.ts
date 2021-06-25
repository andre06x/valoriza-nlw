import { Response, Request } from 'express';
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiverComplimentsService';


class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response){
    const { user_id } = request;

    const listUserReceiverComplimentsService = new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiverComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };