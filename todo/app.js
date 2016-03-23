angular.module('app',[])

.controller('MainController', function($scope){
  $scope.todos = [];
  $scope.addTodo = function(todo){
    $scope.todos.push({title: todo, due: Date.now()});
    $scope.newTodo = '';
  };

  $scope.done = function(index){
    $scope.todos.splice(index, 1);
  };
});
