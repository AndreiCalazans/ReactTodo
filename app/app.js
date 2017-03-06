import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// components
import TodoApp from 'TodoApp';

//redux
// import {addTodo , setSearchText, toggleShowCompleted} from 'actions';
var actions = require('actions');

// var actions = require('actions'); if you want to dispatch using actions.actionGenerator use this else use the import
// above
// import actions from 'actions'  this doesnt work in es6
var store = require('configureStore').configure();
import TodoAPI from 'TodoAPI';

store.subscribe( () => {
  var state = store.getState();

  console.log('New state', state);

  TodoAPI.setTodos(state.todos);
});

// seed the todos
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));



//Load foundations-sites o
// require("foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App css
require('app.scss');


ReactDOM.render(
  <Provider store={store}>
    <TodoApp></TodoApp>
  </Provider>,
  document.getElementById('app')
);
