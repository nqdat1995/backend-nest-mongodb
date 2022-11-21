import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterController } from './twitter/twitter.controller';
import { TwitterService } from './twitter/twitter.service';
import { TwitterModule } from './twitter/twitter.module';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1/twitter'
//Container connect to another container --> mongodb://host.docker.internal/twitter

@Module({
  imports: [
    TwitterModule,
    //MongooseModule.forRoot('mongodb://127.0.0.1/twitter')
    MongooseModule.forRoot(MONGODB_URL),
    AuthModule,
    UsersModule,
    TodoModule
  ],
  controllers: [AppController, TwitterController, TodoController],
  providers: [AppService, TwitterService, TodoService],
})
export class AppModule { }
