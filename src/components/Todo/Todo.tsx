import { TodoProvider } from "../../context/Todo/TodoProvider"
import { TodoList } from "./TodoList"
import { TodosTitle } from "./TodosTitle"

export const Todo = () => {
	return (
		<TodoProvider>
		  <TodosTitle />
			<TodoList />
		</TodoProvider>
	)
}
