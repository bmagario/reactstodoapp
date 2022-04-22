import { Todo } from "./Todo";

export interface TodoState {
	todoCount: number;
	todos: Todo[];
	completed: number;
	pending: number;
}