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
});