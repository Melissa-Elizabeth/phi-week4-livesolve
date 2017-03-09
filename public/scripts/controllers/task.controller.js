myApp.controller('TaskController', ['$http', 'TaskFactory', function($http, TaskFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  // self.taskList = [];
  self.someThingToGoOnTheView = TaskFactory.testProperty;
  self.someRandomArray = TaskFactory.testArray;
  self.taskList = TaskFactory.allTasks;


  self.addTask = function() {
    TaskFactory.addTask(self.newTask);
};


  self.deleteTask = function(taskId) {
    TaskFactory.deleteTask(taskId);
};

  //self.completeTask will stay, because it's the glue between controller and view
  self.completeTask = function(taskId) {
    // http request moves to factory because it's the glue between the factory and the server
    TaskFactory.completeTask(taskId);
  };


    self.uncompleteTask = function(taskId) {
      TaskFactory.uncompleteTask(taskId);
};


}]);
