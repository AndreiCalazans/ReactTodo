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
});
