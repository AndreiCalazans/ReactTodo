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
    //expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
};
    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);
    todoApp.setState({todos: [todoData]});
  // check the todo completed is false
    expect(todoApp.state.todos[0].completed).toBe(false);
// call handleToggle with the id
    todoApp.handleToggle(11);
// verify that handletoggle actualy changed the completed status
    expect(todoApp.state.todos[0].completed).toBe(true);
// expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });


  //test that when toggle from true to false, completedAt gets removed
  it('should change completedAt status to undefined when completed is toggle to false', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: 120
};
    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);

  });
});
