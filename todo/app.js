angular.module('app',[])

.controller('MainController', function($scope, Todos){
  angular.extend($scope, Todos);
})
.factory('Todo', function(){
  var todo = [];
  var addTodo = function(title){
    todos.push({title: todo, due: Date.now()});
  };
  var done= function(index){
    todos.splice(index,1);
  };

  return {
    todos: todo,
    addTodo: addTodo,
    done: done
  }
});
