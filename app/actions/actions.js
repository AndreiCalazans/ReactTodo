import firebase, { firebaseRef } from '../firebase/index';

import moment from 'moment';
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

//toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}


export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

// this is returning a function that will trigger to firebase
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo =   {
        text ,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
      };
      // this adds to the database
      var todoRef = firebaseRef.child('todos').push(todo);
// this returns to the state and adds to the state at localstorage
      return todoRef.then(() => {
        dispatch(addTodo({
          ...todo,
          id: todoRef.key
        }));
      });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

// toggleTodo(id) TOGGLE_TODO
export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id , completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id ,updates));
    })
  };
};
