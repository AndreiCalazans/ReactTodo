import React from 'react';
import uuid from 'uuid';
import TodoList from 'TodoList';
import TodoAdder from 'TodoAdder'
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';
import moment from 'moment';


var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map( (todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos , showCompleted, searchText);

      return (
      <div>
        <h1 className='page-title'>Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}></TodoSearch>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}></TodoList>
              <TodoAdder onAddTodo={this.handleAddTodo}></TodoAdder>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
