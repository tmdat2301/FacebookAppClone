import {combineReducers} from 'redux';
import info from './infoReducer';
import themeReducer from './themeReducer'
const reducers = combineReducers({
    personalInfo: info,
    themeReducer: themeReducer
});
export default (state, action) => reducers(state, action);
