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
          text: 'walk the dog',
          completed: false
        },
        {
          id:uuid(),
          text: 'finish app',
          completed: true
        },
        {
          id:uuid(),
          text: 'learn',
          completed: false
        },
        {
          id:uuid(),
          text: 'Go to school',
          completed: true
        }
      ]
    };
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map( (todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
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
        <TodoList todos={todos} onToggle={this.handleToggle}></TodoList>
        <TodoAdder onAddTodo={this.handleAddTodo}></TodoAdder>
      </div>
    )
  }
});

module.exports = TodoApp;
