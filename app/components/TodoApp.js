import React from 'react';

import TodoList from 'TodoList';
import TodoAdder from 'TodoAdder'
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
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
    this.state.todos.push({
      id: this.state.todos.length + 1,
      text: text
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}></TodoList>
        <TodoAdder onAddTodo={this.handleAddTodo}></TodoAdder>
      </div>
    )
  }
});

module.exports = TodoApp;
