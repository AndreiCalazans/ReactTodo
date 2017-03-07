import expect from 'expect';
var reducers = require('reducers');
import df from 'deep-freeze-strict';


describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''),df(action));

      expect(res).toEqual(action.searchText);
    });

  });

  describe('showCompletedReducer', () => {
    ///Test that the showCommpleted status gets flipped
    it('should flip showCompleted status when it gets called', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false),df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {

          id: 'abc123',
          text: 'something to do',
          completed: false,
          createdAt: 1990
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    //define todos array with realistic todo item
    //generate action// call reducer and assert completed flipped
    it('should update todo', () => {
      var todos = [
        {
          id: 20,
          text: 'go to school',
          completed: false,
          createdAt: 'Jan 14th, 2015 10:00',
          completedAt: undefined
        },
        {
          id: 15,
          text: 'work',
          completed: true,
          createdAt: 'Jan 14th, 2015 10:00',
          completedAt: 'Jan 14th, 2015 12:00'
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos) , df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 22000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    })
  });
});
