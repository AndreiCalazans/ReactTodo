import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }
    return (
      <div className={todoClassName} onClick={ () => {
        // this.props.onToggle(id);
        dispatch(actions.startToggleTodo(id, !completed));
      }}>
      <div>
        <input type="checkbox" defaultChecked={completed}/>
      </div>
        <div>
          <p>{text}</p>
          <p className="todo_subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});


export default connect()(Todo);
//
// module.exports = connect()(Todo); // this connect things gives access to the dispatch
