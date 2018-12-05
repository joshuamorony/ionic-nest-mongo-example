import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MessageDto } from './message.dto';
import { Message } from './message.interface';

@Injectable()
export class MessagesService {

    constructor(@InjectModel('Message') private messageModel: Model<Message>){

    }

    async createMessage(messageDto: MessageDto): Promise<Message>{
        const message = new this.messageModel(messageDto);
        return await message.save();
    }

    async getMessages(): Promise<Message[]>{
        return await this.messageModel.find().exec();
    }

    async getMessage(id): Promise<Message>{
        return await this.messageModel.findOne({_id: id});
    }

}
