import { TodoState, TodoActionTypes, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, TODO_LOADING } from "./types";

const initialState: TodoState = {
    data: {
        '1': {
            id: '1',
            name: "Wäsche machen",
            isDone: true,
            isLoading: false
        },
        '2': {
            id: '2',
            name: "Bupsen",
            isDone: false, 
            isLoading: false
        },
        '3': {
            id: '3',
            name: "Kakn",
            isDone: false, 
            isLoading: false
        }
    }
}

export const todos = (
    state = initialState,
    action: TodoActionTypes
): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            const todo = {
                id: action.id,
                name: action.name,
                isDone: false,
                isLoading: false
            }
            return {
                ...state,
                data: {
                    ...state.data,
                    [todo.id]: todo
                }
            }
        case REMOVE_TODO:
            const derivedData = { ...state.data };
            delete derivedData[action.id];
            return {
                ...state,
                data: derivedData
            }
        case TOGGLE_TODO:
            if (!state.data[action.id]) {
                return state;
            }
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.id]: {
                        ...state.data[action.id],
                        isDone: action.isDone
                    }
                }
            }
        case TODO_LOADING:
            if(!state.data[action.id]) {
                return state;
            }

            return {
                ...state,
                data: {
                    ...state.data,
                    [action.id]: {
                        ...state.data[action.id],
                        isLoading: action.isLoading
                    }
                }
            }
        default:
            return state;
    }
}