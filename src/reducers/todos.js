/**
 * 定义action触发后的响应
 *
 */
import {ADD_TODO, TOGGLE_TODO} from "../constants/todoConstant";

const todo = (state, action) => {
    switch (action.type){
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false,
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({},state, {
                completed: !state.completed
            });
        default:
            return state === undefined ? null : state;
    }
};
/**
 * 触发ADD事件时，将原来的待办事件和新生成的待办事件合并成为一个新列表
 * 触发TOGGLE事件时，遍历所有的状态列表，若点击的id和state的id相同则将待办状态置反，否则返回原状态。
 *
 * @param state
 * @param action
 * @returns {*}
 */
const todos = (state, action) => {
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action),
            ];
        case TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default:
            return state === undefined ? [] : state;
    }
};

export default todos;