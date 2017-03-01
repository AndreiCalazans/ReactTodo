import React from 'react';

import TodoList from 'TodoList';
import TodoAdder from 'TodoAdder'
import TodoSearch from 'TodoSearch';


var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
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
  handleSearch: function( showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}></TodoSearch>
        <TodoList todos={todos}></TodoList>
        <TodoAdder onAddTodo={this.handleAddTodo}></TodoAdder>
      </div>
    )
  }
});

module.exports = TodoApp;
