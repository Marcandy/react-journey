import React, { Component } from 'react';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList';
import Title from './Title';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id: 0
    }

   this.addTodo = this.addTodo.bind(this);
   this.handleRemove = this.handleRemove.bind(this);
  }

  addTodo(val){
    const todo = {text: val, id: this.state.id++};

    this.state.data.push(todo);
    this.setState({
      data: this.state.data
    })
  }

  handleRemove(id) {
    const remainder= this.state.data.filter(function(todo) {
      if(todo.id !== id) return todo;
    })

    this.setState({data: remainder});
  }
  render() {
    return (
      <div className="App">
        <Title/>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          todos={this.state.data}
          remove={this.handleRemove}
        />
      </div>
    );
  }
}

export default TodoApp;
