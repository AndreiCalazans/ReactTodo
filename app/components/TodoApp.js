import React from 'react';
import uuid from 'uuid';
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
          id:uuid(),
          text: 'walk the dog'
        },
        {
          id:uuid(),
          text: 'finish app'
        },
        {
          id:uuid(),
          text: 'learn'
        },
        {
          id:uuid(),
          text: 'Go to school'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
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
