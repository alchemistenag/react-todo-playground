import React, { FC } from 'react';
import { TodoItem } from '../state/todos/types';

export interface ToDoDetailProps {
    todo: TodoItem
}

export const TodoDetail: FC<ToDoDetailProps> = ({todo}) => {

    const status = todo.isLoading ? '...lade' : todo.isDone ? '[x]' : '[ ]'

    return (
        <div>{todo.name}: {status}</div>
    )
}