var redux = require('redux');
import { searchTextReducer, showCompletedReducer, todosReducer} from 'reducers'


export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore( reducer, initialState , redux.compose(

    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));
  return store;
};
