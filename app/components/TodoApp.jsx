var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoApi = require('TodoApi');
var moment = require('moment');

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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },

  handleToggle: function(id){
    var updatedTodos = this.state.todos.map ( (todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filterTodos} onToggle = {this.handleToggle}/>
              <AddTodo onAddItem={this.handleAddItem}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
