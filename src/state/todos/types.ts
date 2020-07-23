export interface TodoItem {
    id: string;
    name: string;
    isDone: boolean;
    isLoading: boolean;
}

type TodosMap = { [id: string]: TodoItem };

export interface TodoState {
    data: TodosMap;
}

export const ADD_TODO = 'todo/add';
export interface AddToDoItem {
    type: typeof ADD_TODO,
    name: string;
    id: string;
}

export const REMOVE_TODO = 'todo/remove';
export interface RemoveToDoItem {
    type: typeof REMOVE_TODO;
    id: string;
}

export const TOGGLE_TODO = 'todo/set-done';
export interface ToggleTodo {
    type: typeof TOGGLE_TODO;
    id: string;
    isDone: boolean;
}

export const TODO_LOADING = 'todo/set-loading';
export interface ToDoLoading {
    type: typeof TODO_LOADING,
    id: string,
    isLoading: boolean
}

export type TodoActionTypes = AddToDoItem | RemoveToDoItem | ToggleTodo | ToDoLoading;