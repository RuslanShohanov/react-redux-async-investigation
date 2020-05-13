import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';
import { AppState } from './interfaces';

const loggerMiddleware = createLogger();

export const configureStore = (initialState: AppState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
};
