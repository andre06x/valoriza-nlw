import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../database/repositories/ComplimentsRepositories';
import { UserRepositories } from '../database/repositories/UsersRepositories';



interface IComplimentRequest{
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;

}

class CreateComplimentService {
  
  async execute({ message, tag_id, user_receiver, user_sender}: IComplimentRequest){
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UserRepositories);

    const userReceiverExists = await userRepositories.findOne(user_receiver);

    if(user_sender === user_receiver){
      throw new Error("Incorrect User Receiver")
    }
    if(!userReceiverExists){
      throw new Error("User Receiver does not exists!")
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    });

    await complimentsRepositories.save(compliment);
    return compliment;
  }
}

export { CreateComplimentService }