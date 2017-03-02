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
    // intenarary operator below
  return $.isArray(todos) ? todos : [] ;

  }
};
