import $ from 'jquery';


module.exports = {
  setTodos: function (todos) {
    if( $.isArray(todos)){
      localStorage.setItem('todos' , JSON.stringify(todos));  // local storage doesnt take arrays must be string
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      //parse strings to json ,if there is a problem here , if it doesnt exist it will return blank array below
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    // intenary operator below
  return $.isArray(todos) ? todos : [] ;

},
filterTodos: function(todos, showCompleted, searchText) {
  var filteredTodos = todos;

  //fillter by show completed
  filteredTodos = filteredTodos.filter((todo) => {
    return !todo.completed || showCompleted;
  });

  //filter by searchText
  filteredTodos = filteredTodos.filter((todo) => {
    var text = todo.text.toLowerCase();
    return searchText.length === 0 || text.indexOf(searchText) > -1;
  });

  //sort todos with non-completed first
  filteredTodos.sort((a ,b) => {
    if ( !a.completed && b.completed ){
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
  return filteredTodos;
}
};
