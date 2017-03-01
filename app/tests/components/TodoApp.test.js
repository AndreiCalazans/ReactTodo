import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
// import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add to do to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false
};
    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);
    todoApp.setState({todos: [todoData]});
  // check the todo completed is false
    expect(todoApp.state.todos[0].completed).toBe(false);
// call handleToggle with the id
    todoApp.handleToggle(11);
// verify that handletoggle actualy changed the completed status
    expect(todoApp.state.todos[0].completed).toBe(true);


  });
});
