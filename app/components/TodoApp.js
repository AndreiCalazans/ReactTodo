import React from 'react';
import uuid from 'uuid';
import TodoList from 'TodoList';
import TodoAdder from 'TodoAdder'
import TodoSearch from 'TodoSearch';
import moment from 'moment';


var TodoApp = React.createClass({
  render: function() {
      return (
      <div>
        <h1 className='page-title'>Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch></TodoSearch>
              <TodoList></TodoList>
              <TodoAdder></TodoAdder>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
