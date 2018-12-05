import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { MessageDto } from './message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService){

    }

    @Post()
    async createMessage(@Body() message: MessageDto){
        return await this.messagesService.createMessage(message);
    }

    @Get()
    async getMessages(){
        return await this.messagesService.getMessages();
    }

    @Get(':id')
    async getMessage(@Param('id') id: String){
        return await this.messagesService.getMessage(id);
    }

}
