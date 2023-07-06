import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// const middleware = [thunk];
export const store = createStore(reducers,applyMiddleware(thunk));
