import React from 'react';

import TodoList from 'TodoList';

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id:1,
          text: 'walk the dog'
        },
        {
          id:2,
          text: 'finish app'
        },
        {
          id:3,
          text: 'learn'
        },
        {
          id:4,
          text: 'Go to school'
        }



      ]
    };
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}></TodoList>
      </div>
    )
  }
});

module.exports = TodoApp;
