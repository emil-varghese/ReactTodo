import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

//Uses thunk. Wait for firebase to comeback
export var startAddTodo = (text) => {
  return (dispatch, getState) =>  {

    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    //This adds to the database.
    var todoRef = firebaseRef.child('todos').push(todo);

    //Once added to databse, this is dispatched to addTodo and used to add to Store
    return todoRef.then( () => {
      dispatch(addTodo( {
        ...todo,
        id: todoRef.key
      }));
    });
  };
}

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
};

export var startAddTodos = () => {
  return (dispatch, getState) => {

    var todosRef = firebaseRef.child('todos');
    todosRef.once('value').then ( (snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach( (todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch (addTodos(parsedTodos));
    })

  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch,getState) => {
    var todoRef  = firebaseRef.child(`todos/${id}`);

    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then( () => {
      dispatch (updateTodo (id, updates));
    });
  }
}
