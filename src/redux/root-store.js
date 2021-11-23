import {combineReducers, createStore} from 'redux';
import empty from './reducers/empty';
const rootReducer = combineReducers({empty});

export const store = createStore(rootReducer);
