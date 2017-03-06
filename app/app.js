import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// components
import TodoApp from 'TodoApp';

//redux
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe( () => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('finish tuto'));
store.dispatch(actions.setSearchText('tuto'));
store.dispatch(actions.toggleShowCompleted());

//Load foundations-sites o
// require("foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App css
require('app.scss');


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app')
);
