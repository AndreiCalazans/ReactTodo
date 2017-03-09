import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {Provider} from 'react-redux';
// import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

var configureStore = require('configureStore');
import TodoList from 'TodoList';

import {TodoApp} from 'TodoApp';



describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp></TodoApp>
      </Provider>
    );
      // the scryRenderedComponentsWithType lets you look in a component (argument 1) for another component (argument 2)
    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
