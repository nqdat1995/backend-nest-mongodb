import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { TodoStatus } from "../dto/TodoStatus";

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  name: string;

  @Prop()
  startDate: Date

  @Prop()
  duration: number

  @Prop()
  status: TodoStatus
}

export const TodoSchema = SchemaFactory.createForClass(Todo);