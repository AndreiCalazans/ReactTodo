import expect from 'expect' ;

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach( () => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    })

  });

  describe('getTodos', () => {
    it('should return empty array for nad local Storage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in locaStorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    })
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'some text',
        completed: true
      },
      {
        id: 2,
        text: 'other text here',
        completed: false
      },
      {
        id: 3,
        text: 'some text here',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true , '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should NOT return all items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false , '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos,true , "");

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by SearchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true , 'some');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all todos if SearchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true , '');
      expect(filteredTodos.length).toBe(3);
    });
  })
});
