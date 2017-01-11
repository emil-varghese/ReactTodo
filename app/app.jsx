var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
//var TodoApi = require('TodoApi');
//import Login from 'Login';

var {hashHistory} = require('react-router');

//var TodoApp = require('TodoApp');
//import TodoApp from 'TodoApp';
import firebase from 'app/firebase/';
import router from 'app/router';

var actions = require('actions');
var store = require('configureStore').configure();

//Redirects when user logs in or logs out
firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    store.dispatch(actions.onLogin(user.uid));
    store.dispatch(actions.startAddTodos());

    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.onLogout());
    hashHistory.push('/');
  }
});
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

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
