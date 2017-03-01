import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import TodoAdder from 'TodoAdder';

describe('TodoAdder', () => {
  it('Should exist', () => {
    expect(TodoAdder).toExist();
  });

  it('should call onAddTodo if valid input is entered', () => {
    var spy = expect.createSpy();
    var todoAdder = TestUtils.renderIntoDocument(<TodoAdder onAddTodo={spy}></TodoAdder>);
    var $el = $(ReactDOM.findDOMNode(todoAdder));

    todoAdder.refs.todoText.value = "watch tv";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('watch tv');
  });

  it('should NOT be called onAddTodo if invalid input is entered', () => {
    var spy = expect.createSpy();
    var todoAdder = TestUtils.renderIntoDocument(<TodoAdder onAddTodo={spy}></TodoAdder>);
    var $el = $(ReactDOM.findDOMNode(todoAdder));

    todoAdder.refs.todoText.value = "";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
