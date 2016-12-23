var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoApi = require('TodoApi');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
    };
  },

  componentDidUpdate: function() {
    TodoApi.setTodos(this.state.todos);
  },

  handleSearch: function(showCompleted,searchText){
    this.setState ({
      showCompleted : showCompleted,
      searchText : searchText.toLowerCase()
    });
  },

  handleAddItem: function (todo) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todo,
          completed: false
        }
      ]
    });
  },

  handleToggle: function(id){
    var updatedTodos = this.state.todos.map ( (todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },

  render: function() {
    var {todos,showCompleted,searchText} = this.state;
    var filterTodos = TodoApi.filterTodos(todos,showCompleted,searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filterTodos} onToggle = {this.handleToggle}/>
        <AddTodo onAddItem={this.handleAddItem}/>
      </div>
    );
  }
});

module.exports = TodoApp;
