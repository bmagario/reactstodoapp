import { useReducer } from "react";
import { TodoProviderProps } from "../../interfaces/Todo/TodoProviderProps";
import { TodoState } from "../../interfaces/Todo/TodoState";
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
	todoCount: 2,
	todos: [
		{
			id: '1',
			desc: 'Task 1',
			completed: false
		},
		{
			id: '2',
			desc: 'Task 2',
			completed: false
		}
	],
	completed: 0,
	pending: 2
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
	const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

	const toggleTodo = (id: string) => {
		dispatch({
			type: 'TOGGLE_TODO',
			payload: {
				id
			}
		});
	};

	return (
		<TodoContext.Provider value={{
			todoState,
			toggleTodo
		}}>
			{ children }
		</TodoContext.Provider>
	)
};