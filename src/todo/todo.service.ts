import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoRequest } from './dto/Todo.dto';
import { TodoStatus } from './dto/TodoStatus';
import { Todo, TodoDocument } from './schema/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) { }

  async create(todoRequest: TodoRequest): Promise<Todo> {
    const todoCreated = new this.todoModel(todoRequest);

    return todoCreated.save();
  }

  async getByDate(date: Date): Promise<Todo[]> {
    let todos = await this.todoModel.find({ startDate: date });
    return todos;
  }

  async update(id: string, todo: TodoRequest): Promise<Todo> {
    let todoObj = await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
    console.log(TodoStatus[todoObj.status]);
    return todoObj;
  }
}
