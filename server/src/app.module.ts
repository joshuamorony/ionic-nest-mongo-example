import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    HttpModule,
    MessagesModule,
    MongooseModule.forRoot('mongodb://localhost/mydb')
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}