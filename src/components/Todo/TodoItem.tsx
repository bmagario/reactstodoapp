import { useContext } from "react";
import { TodoItemProps } from "../../interfaces/Todo/TodoItemProps"
import { TodoContext } from "../../context/Todo/TodoContext"
import { useTodos } from "../../hooks/useTodos";

export const TodoItem = ({ todo }: TodoItemProps) => {
	// const { toggleTodo } = useContext(TodoContext);
	const { toggleTodo } = useTodos();

	const handleDoubleClick = () => {
		toggleTodo(todo.id);
	};

	return (
		<li style={{
			cursor: 'pointer',
			textDecoration: todo.completed ? 'line-through' : 'none'
		}}
			key={ todo.id }
			onDoubleClick={ handleDoubleClick } 
		>
			{ todo.desc }
		</li>
	)
}
