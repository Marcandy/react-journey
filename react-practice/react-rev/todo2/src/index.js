import React from 'react';
import ReactDOM from 'react-dom';

import {List, Map} from 'immutable';
import reducer from './reducer.js';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {TodoList} from './containers';

const dummyTodos = [
  Map({ id: 0, isDone: true,  text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
];

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
