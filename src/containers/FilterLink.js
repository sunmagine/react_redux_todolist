import {setVisibility} from "../actions/todoAction";
import {connect} from "react-redux";
import Link from "../components/Link";

const mapStateToProps = ( state, ownProps ) => {
    //console.log(state,ownProps);
    return {
        active : ownProps.filter === state.visibilityFilter,
    }
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    //console.log(dispatch,ownProps);
    return {
        onClick: () => {
            dispatch(setVisibility(ownProps.filter));
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps,
) (Link);

export default FilterLink;