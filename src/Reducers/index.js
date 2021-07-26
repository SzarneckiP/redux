import { combineReducers } from "redux";
import todos from './Todo.reducer';
import filter from './Filter.reducer';

export default combineReducers({
    todos,
    filter,
});