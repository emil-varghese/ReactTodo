import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAy1LDGn0O5FReCLRzMJCwOlqjzJpQfaM4",
    authDomain: "emil-todo.firebaseapp.com",
    databaseURL: "https://emil-todo.firebaseio.com",
    storageBucket: "emil-todo.appspot.com",
    messagingSenderId: "224507999615"
  };
  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
