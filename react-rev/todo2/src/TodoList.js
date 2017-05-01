import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo, addTodo}) => {

  // const {todos, toggleTodo, addTodo} = props;
  

  const onSubmit = (e) => {
    const input = e.target;
    const text = input.value;
    const isEnterKey = (e.which == 13);
    const isLongEnough = text.length > 0;
    
    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  }

  const toggleClick = id => e => toggleTodo(id);

  const todoLoop = todos.map(elm => {
    return(
      <li key={elm.get('id')}
      className='todo_item'
      onClick={toggleClick(elm.get('id') )}
      >
        <Todo todo={elm.toJS()}/>
      </li>
    )
  })

  return (
    <div>
      <input type="text" 
      placeholder='Add todo'
      onKeyDown={onSubmit}
      />

      <ul className='todo__list'>
          {todoLoop}
      </ul>
    </div> 
  )
}

export default TodoList;
