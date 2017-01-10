import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
import firebase from 'app/firebase/';
import Login from 'Login';

var requireLogin = (nextState, replace, next) => {
  console.log(firebase.auth().currentUser);
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var isLoggedIn = (nextState, replace, next) => {

  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path='/'>
      <Route path='todos' component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={isLoggedIn} />
    </Route>
  </Router>
);
