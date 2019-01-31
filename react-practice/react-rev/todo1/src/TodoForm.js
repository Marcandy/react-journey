import React from 'react';

const TodoForm = ({addTodo}) => {
    let inp;
    return (
        <div>
            <input  ref={node => {
                inp = node;
            }}
            />

            <button onClick={() => {
                addTodo(inp.value);
                inp.value = '';
                }}
            >
                +
            </button>

          
        </div> 

    )
}

export default TodoForm;