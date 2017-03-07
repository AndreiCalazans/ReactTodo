import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import * as actions from 'actions';
import {TodoAdder} from 'TodoAdder';

describe('TodoAdder', () => {
  it('Should exist', () => {
    expect(TodoAdder).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    var todoText = 'watch tv';
    var action = actions.startAddTodo(todoText);
    var spy = expect.createSpy();
    var todoAdder = TestUtils.renderIntoDocument(<TodoAdder dispatch={spy}></TodoAdder>);
    var $el = $(ReactDOM.findDOMNode(todoAdder));

    todoAdder.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    var spy = expect.createSpy();
    var todoAdder = TestUtils.renderIntoDocument(<TodoAdder dispatch={spy}></TodoAdder>);
    var $el = $(ReactDOM.findDOMNode(todoAdder));

    todoAdder.refs.todoText.value = "";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
