import { Store, createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { todos } from './todos/reducer';
import { TodoActionTypes } from './todos/types';

const rootReducer = combineReducers({
    todos
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppActions = TodoActionTypes;

export type StoreFactory = () => Store<AppState, AppActions>;

export const createDefaultStore:StoreFactory = () => {

    const store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
}