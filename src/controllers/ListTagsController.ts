import { Request, Response } from 'express';
import { ListTagService } from '../services/ListTagService';

class ListTagsController {
  async handle(request: Request, response: Response){
    const listTags = new ListTagService();

    const tags = await listTags.execute();

    return response.json(tags);
  }
}

export { ListTagsController}