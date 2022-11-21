import { TodoStatus } from "./TodoStatus";

export interface TodoRequest {
  name: string,
  startDate: Date,
  duration: number,
  status: TodoStatus
}