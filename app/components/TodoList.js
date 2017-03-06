import React from 'react';
import Todo from 'Todo';
import {connect} from 'react-redux';
export var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className='container__message'>Nothing To Do</p>
        )
      }
      return todos.map( (todo) => {
        return (
          <Todo key={todo.id} {...todo} ></Todo>
        )
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList); // this connect gives access to the state in the redux store;
