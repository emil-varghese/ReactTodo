var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export var Todo = React.createClass({

  handleCheckbox: function() {
      this.props.dispatch(actions.startToggleTodo(this.props.id,!this.props.completed));
      //this.props.onToggle(this.props.id);
  },

  render: function() {
    var {id,text,completed,createdAt,completedAt,dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    }
    return (
      <div className={todoClassName}>
        <div>
          <input type="checkbox" checked={completed} onChange={this.handleCheckbox}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
