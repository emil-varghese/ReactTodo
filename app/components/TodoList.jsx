var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoApi = require('TodoApi');

export var TodoList = React.createClass({

  render: function() {
    var {todos,showCompleted,searchText} = this.props;

    var renderTodos = () => {

      var filterTodos = TodoApi.filterTodos(todos,showCompleted,searchText);

      if (filterTodos.length === 0) {
        return(
          <p className="container__message">Nothing to do</p>
        );
      }

      return filterTodos.map( (todo) => {
        return (
            <Todo key={todo.id} {...todo}/>
            //<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
            //Spread operator. Gets all properties of object
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

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
