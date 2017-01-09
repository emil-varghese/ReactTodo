var $ = require('jquery');

module.exports = {
  //Commented when using firebase. Not using localStorage any more.
  /*
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos',JSON.stringify(todos)); //only strings can be stored
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    }catch(e){

    }

    if ($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }
  },
 */

  filterTodos: function(todos,showCompleted,searchText) {
    var filterTodos = todos;
    //Filter by showCompleted
    filterTodos = filterTodos.filter( (todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    if (searchText.length > 0 ) {
      filterTodos = filterTodos.filter( (todo) => {
        if (todo.text.toLowerCase().indexOf(searchText) < 0) {
          return false;
        }else {
          return true;
        }
      });
    }

    //sort todos with non-completed first
    filterTodos.sort( (a,b) => {
      if(!a.completed && b.completed){
        return -1;
      }else if (a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    return filterTodos;
  }
}
