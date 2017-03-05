import uuid from 'node-uuid';
import moment from 'moment';

export var searchTextReducer = (state = '' , action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

// showCommpletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = (state = false , action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
      // add case for TOGGLE_TODO completed equal to opposite value $ updateCompletedAt
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          var nextCompleted = !todo.completed;
          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        } else {
          return todo;
        };
      });
    default:
      return state;
  }
};



// state.map((todo) => {
// if (todo.id === action.id) {
//   let nextCompleted = !todo.completed;
//   return {
//     ...todo ,
//     completed: nextCompleted,
//     completedAt : todo.completed ? moment().unix() : undefined
//   }
// } else {
//     return todo;
//   }
// }
// );
