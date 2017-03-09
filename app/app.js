import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

// components
import router from 'router/index';
//redux
// import {addTodo , setSearchText, toggleShowCompleted} from 'actions';
var actions = require('actions');
import firebase from 'firebase/index';



// var actions = require('actions'); if you want to dispatch using actions.actionGenerator use this else use the import
// above
// import actions from 'actions'  this doesnt work in es6
var store = require('configureStore').configure();


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logOut());
    hashHistory.push('/');
  }
});





//Load foundations-sites o
// require("foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App css
require('app.scss');




ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
