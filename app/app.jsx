var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TodoApi = require('TodoApi');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

/*
store.subscribe (() => {
  var state = store.getState();
  console.log('New State' , state);

  //This was in the componentDidUpdate in TodoApp earlier.
  //componentDidUpdate updates the todos anytime the state is changed.
  //Here the subscribe is called anytime the state is changed and the same
  //setTodos function is called to save it to localStorage.
  //Adding todos was in TodoApp earlier (handleAddItem) but now it is handled in the
  //reducer.
  TodoApi.setTodos(state.todos);
});
*/
//Fetches the todos in localStorage. This was in the getInitialState in TodoApp
/*
var initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));
*/
// Added from Firebase
store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
