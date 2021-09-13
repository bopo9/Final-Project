import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxLogger from 'redux-logger';

import rootReducers from './modules';

export const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore(
    combineReducers({
        ...rootReducers,
        ...reducers,
    }),
    preloadedState,
    compose(
        applyMiddleware(
            ...middlewares,
            thunkMiddleware,
            reduxLogger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default configureStore;
