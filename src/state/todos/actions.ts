import { AddToDoItem, RemoveToDoItem, ToggleTodo, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, ToDoLoading, TODO_LOADING } from './types';

export const addToDoItem = (id: string, name: string): AddToDoItem => ({
    type: ADD_TODO,
    id,
    name 
})

export const removeToDoItem = (id: string): RemoveToDoItem => ({
    type: REMOVE_TODO,
    id
})

export const toggleTodo = (id:string, isDone: boolean): ToggleTodo => ({
    type: TOGGLE_TODO,
    id,
    isDone
})

export const setTodoLoading = (id: string, isLoading: boolean): ToDoLoading => ({
    type: TODO_LOADING,
    id,
    isLoading
})