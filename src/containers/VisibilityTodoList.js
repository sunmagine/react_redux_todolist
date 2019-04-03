import {connect} from "react-redux";
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from "../constants/todoConstant";
import {toggleTodo} from "../actions/todoAction";
import TodoList from "../components/TodoList";


const getVisibilityTodos = ( todos, filter ) => {
    switch (filter){
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = ( state ) => {
    return {
        todos : getVisibilityTodos(state.todos, state.visibilityFilter),
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
};

const VisibilityTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default VisibilityTodoList;