import { Todo } from "../../interfaces/Todo/Todo";
import { TodoState } from "../../interfaces/Todo/TodoState";

type TodoAction = 
 | { type: "ADD_TODO"; payload: Todo }
 | { type: "TOGGLE_TODO"; payload: { id: string } }
 | { type: "REMOVE_TODO"; payload: { id: string } };


export const todoReducer = (state: TodoState, action: TodoAction) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, action.payload]
			};
		case 'TOGGLE_TODO':
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload.id
						? { ...todo, completed: !todo.completed }
						: todo
				)
			};
		case 'REMOVE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload.id)
			};
		default:
			return state;
	}
}