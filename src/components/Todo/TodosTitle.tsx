import { useTodos } from "../../hooks/useTodos"

export const TodosTitle = () => {
	const { pendingTodos } = useTodos();

	return (
		<h1>
			Todo List: { pendingTodos.length }
		</h1>
	)
}
