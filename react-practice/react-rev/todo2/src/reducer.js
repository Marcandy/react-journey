import {List, Map} from 'immutable';

const init = List([]);

export default function reducer(todos=init, action){
    switch(action.type) {
        case 'ADD_TODO':
            return todos.push(Map(action.payload));

        case 'TOGGLE_TODO':
            return todos.map(elm => {
                if(elm.get('id') === action.payload) {
                    return elm.update('isDone', isDone => !isDone)
                }
                else {
                    return elm;
                }

            })

        default: 
            return todos
    }
}