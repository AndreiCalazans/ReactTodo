import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'firebase/index';



//midleware from react-router middlea
var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser){
    replace('/');
  }
  next();
};

var redirectIfLogged = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};


export default (
  <Router history={hashHistory}>
    <Route path='/' >
    <IndexRoute component={Login} onEnter={redirectIfLogged}></IndexRoute>
    <Route path='/todos' component={TodoApp} onEnter={requireLogin}></Route>
    </Route>
  </Router>
);
