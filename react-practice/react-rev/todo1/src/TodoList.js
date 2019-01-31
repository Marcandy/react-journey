import Todo from './Todo.js'
import React from 'react';

const TodoList = ({todos, remove}) => {

    const todoLoop = todos.map(function(elm) {
        return (<Todo todo={elm} key={elm.id} remove={remove}/>)
    });

    return (<ul>{todoLoop}</ul>);
}

export default TodoList;