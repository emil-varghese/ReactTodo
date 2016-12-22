var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    };
  },

  handleSearch: function(showCompleted,searchText){
    this.setState ({
      showCompleted : showCompleted,
      searchText : searchText.toLowerCase()
    });
  },

  handleAddItem: function (todo) {
    alert(todo);
  },

  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddItem={this.handleAddItem}/>
      </div>
    );
  }
});

module.exports = TodoApp;
