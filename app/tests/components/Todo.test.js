import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
// import $ from 'jquery';
import * as actions from 'actions';
import TestUtils from 'react-addons-test-utils';

import {Todo} from 'Todo';

describe('Todo', () => {
  it('Should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click ', () => {
    var todoData = {
      id: 199,
      text: 'write todo test',
      completed: true
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument( <Todo {...todoData} dispatch={spy}></Todo>);

    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  })
});
