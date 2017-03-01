import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
// import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import Todo from 'Todo';

describe('Todo', () => {
  it('Should exist', () => {
    expect(Todo).toExist();
  });

  it('should call on Toggle prop with id on click ', () => {
    var todoData = {
      id: 199,
      text: 'write todo test',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument( <Todo {...todoData} onToggle={spy}></Todo>);

    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);
  })
});
