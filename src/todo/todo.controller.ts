import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { identity } from 'rxjs';
import { TodoRequest } from './dto/Todo.dto';
import { Todo } from './schema/todo.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) { }

  @Post()
  async create(@Body() todo: TodoRequest) {
    return this.todoService.create(todo);
  }

  @Get(':date')
  async getByDate(@Param('date') date): Promise<Todo[]> {
    let startDate = new Date(Date.UTC(
      Number.parseInt(date.toString().substring(0, 4)),
      Number.parseInt(date.toString().substring(4, 6)) - 1,
      Number.parseInt(date.toString().substring(6, 8)),
      0, 0, 0));
    console.log(startDate)
    return this.todoService.getByDate(startDate);
  }

  @Post(':id')
  async update(@Param('id') id, @Body() todo: TodoRequest): Promise<Todo> {
    return this.todoService.update(id, todo);
  }
}
