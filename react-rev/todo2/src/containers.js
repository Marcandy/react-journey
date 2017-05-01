import { connect } from 'react-redux';
import comp from './TodoList';
import { addTodo, toggleTodo } from './Actions';


export const TodoList = connect(
    function MapStateToProps(state) {
        return {todos: state}
    },

    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        }
        
  }
)(comp)