import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// components
import TodoApp from 'TodoApp';


//Load foundations-sites
// require("foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App css
require('app.scss');


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app')
);
