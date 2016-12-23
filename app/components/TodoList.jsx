var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

  render: function() {
    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map( (todo) => {
        return (
            <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> //Spread operator. Gets all properties of object
        );
      });
    };


/* The above code without arrow functions
    var renderTodos = function () {
      return todos.map( function(todo) {

        return (
            <Todo key={todo.id} {...todo}/> //Spread operator. Gets all properties of object
        );
      });
    };
*/

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
