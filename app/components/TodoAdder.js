import React from 'react';

var TodoAdder = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
  var todoText = this.refs.todoText.value;
  if( todoText.length > 0){
    this.props.onAddTodo(todoText);
    this.refs.todoText.value = "";
  } else {
    this.refs.todoText.focus();  //puts the courser back in the input area
  };

},
  render: function() {
    return (
      <div className='container__footer'>
        <form onSubmit={this.handleSubmit} >
          <input ref='todoText' type="text" placeholder='add a todo!'/>
          <button className='button expanded' type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoAdder;
