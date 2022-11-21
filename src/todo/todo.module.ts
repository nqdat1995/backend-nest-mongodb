import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schema/todo.schema';

@Module({
  // providers: [TodoService],
  // controllers: [TodoController]
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],

  exports: [MongooseModule]
})

export class TodoModule { }
