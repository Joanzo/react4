import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const store = createStoreWithMiddleware(Reducers);