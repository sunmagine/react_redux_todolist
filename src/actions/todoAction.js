import {ADD_TODO, SET_VISIBILITY, TOGGLE_TODO} from "../constants/todoConstant";
import todos from "../reducers/todos";

/**
 * 定义用户的行为，
 * 并在用户触发相应的行为后
 * state返回一个状态
 * @type {number}
 */


let nextTodoId = 0;//全局变量

export const addTodo = (text) => {
    console.log(text);
    return {
        type : ADD_TODO,
        id: nextTodoId++,
        text: text,
    }
};

export const setVisibility = (filter) => {
    console.log(filter);
    return {
        type : SET_VISIBILITY,
        filter: filter,
    }
};

export const toggleTodo = (id) => {
    return {
        type : TOGGLE_TODO,
        id: id,
    }
};