import React from 'react';

var TodoAdder = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
  var todoText = this.refs.text.value;
  if( todoText.length > 0){
    this.props.onAddTodo(todoText);
    this.refs.text.value = "";
  };

},
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <input ref='text' type="text" placeholder='add a todo!'/>
          <button className='button' type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoAdder;
