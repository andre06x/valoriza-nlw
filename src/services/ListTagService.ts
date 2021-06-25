import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../database/repositories/TagsRepositories';
import { classToPlain } from 'class-transformer';

class ListTagService {
  async execute(){
    const tagRespositories = getCustomRepository(TagsRepositories);

    const tags = await tagRespositories.find();

    return classToPlain(tags);
  }
}

export { ListTagService }