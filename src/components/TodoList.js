
import Todo from "./Todo";
import React from "react";


const TodoList = ({todos, onTodoClick}) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return(<Todo
                        key={todo.id}
                        {...todo}
                        onClick={()=> onTodoClick(todo.id)} />);
                })
            }
        </ul>
    );
};
export default TodoList;