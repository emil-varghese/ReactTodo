var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();

    var todo = this.refs.todoitem.value;
    var {dispatch} = this.props;

    if (todo.length > 0) {
      this.refs.todoitem.value = '';
      dispatch(actions.addTodo(todo));
    }else {
      this.refs.todoitem.focus();
    }

  },

  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="todoitem" placeholder="What do you need to do?"/>
            <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
