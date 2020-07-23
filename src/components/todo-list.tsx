import React, {FC} from 'react';
import { TodoItem } from '../state/todos/types';
import { TodoDetail } from './todo-detail';
import { useStyleWithTheme } from '../theme';
import { Theme } from '../App';

export interface TodoListProps {
    todos: TodoItem[],
    onItemClick?: (id: string) => void
}

const style = (theme: Theme) => ({
    header: {
        color: theme.primary
    }
});

export const TodoList: FC<TodoListProps> = ({todos, onItemClick}) => {

    const styles = useStyleWithTheme(style);

    const handleTodoClick = (todo: TodoItem) => () => {
        if(!todo.isLoading && onItemClick && typeof onItemClick === 'function') {
            onItemClick(todo.id);
        }
    }

    return (<ul style={styles.header}>
        {
            todos.map((todo: TodoItem) => {
                return (
                <li key={todo.name} onClick={handleTodoClick(todo)}><TodoDetail todo={todo}/></li>
                );
            })
        }
    </ul>)
}