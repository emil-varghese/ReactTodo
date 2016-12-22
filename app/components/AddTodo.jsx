var React = require('react');

var AddTodo = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();

    var todo = this.refs.todoitem.value;

    if (todo.length > 0) {
      this.refs.todoitem.value = '';
      this.props.onAddItem(todo);
    }else {
      this.refs.todoitem.focus();
    }

  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
            <input type="input" ref="todoitem" placeholder="What do you need to do?"/>
            <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
