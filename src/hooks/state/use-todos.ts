import { useSelector, useDispatch } from 'react-redux';
import { TodoItem } from '../../state/todos/types';
import { AppState } from '../../state';
import { addToDoItem, removeToDoItem, toggleTodo } from '../../state/todos/actions';
import { toggleInDb } from '../../state/todos/operations';

export const useTodos = (): TodoItem[] => {
    const todos = useSelector((store: AppState) => Object.values(store.todos.data));

    return todos;
}

let counter = 100;

export const useTodoActions = () => {
    const dispatch = useDispatch();
    const todos = useSelector((store: AppState) => store.todos.data);

    return {
        addToDoItem: (name: string) => dispatch(addToDoItem((counter++)+'', name)),
        removeToDoItem: (id: string) => dispatch(removeToDoItem(id)),
        toggleToDoItem: (id: string) => {
            if(todos[id]) {
                dispatch(toggleInDb(id, !todos[id].isDone))
            }
        }
    }
}