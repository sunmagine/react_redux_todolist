import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import {combineReducers} from "redux";


const todoApp = combineReducers({
    todos,
    visibilityFilter,
});

export default todoApp;


