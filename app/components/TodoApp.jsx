import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

var uuid = require('node-uuid');
var TodoApi = require('TodoApi');
var moment = require('moment');

export var TodoApp = React.createClass({
  /*
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
*/
  onLogout(e) {
    e.preventDefault();

    var {dispatch} = this.props;

    dispatch(actions.startLogout());
  },
  render: function() {

    //var {todos,showCompleted,searchText} = this.state;
    //var filterTodos = TodoApi.filterTodos(todos,showCompleted,searchText);

    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);
