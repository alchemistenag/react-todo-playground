import { Dispatch } from "redux";
import { } from 'redux-thunk';
import { AppState } from "..";
import { setTodoLoading, toggleTodo } from "./actions";

const asyncTimeout = (time: number) => new Promise(resolve => {
    setTimeout(resolve, time);
});

export const toggleInDb = (id: string, isDone: boolean) => async (dispatch: Dispatch, getState: () => AppState) => {
    dispatch(setTodoLoading(id, true));

    await asyncTimeout(500);

    dispatch(toggleTodo(id, isDone));

    dispatch(setTodoLoading(id, false));
}