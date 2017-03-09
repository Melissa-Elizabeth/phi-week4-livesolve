myApp.factory('TaskFactory', ['$http', function($http) {

  // var testArrayVariable = ['queso', 'bagel', 'donald bagel', 'salsa'];
  // testArrayVariable.pop();

var factoryTasks ={list: []};

  getTasks();

  function getTasks() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log(response.data);
      factoryTasks.list = response.data;
    });
  }

function addTask(newTask) {
  $http({
    method: 'POST',
    url: '/tasks',
    data: newTask
  }).then(function(response){
    console.log(response);
  getTasks();

  });
}

function deleteTask(taskId) {
$http({
  method: 'DELETE',
  url: '/tasks/' + taskId
}).then(function(response) {
  getTasks();
});
}

  function completeTask(taskId) {
    $http({
      method: 'PUT',
      url: '/tasks/' + taskId
    }).then(function(response) {
    getTasks();
    });
  }

function uncompleteTask(taskId){
  $http({
    method: 'PUT',
    url: '/tasks/uncomplete/' + taskId
  }).then(function(response) {
    getTasks();
  });
}

// this is the public API, if it's not in here, your controller won't see it
  return {
    // testProperty: 'taco',
    // testArray: testArrayVariable,
    allTasks: factoryTasks,
    updateTasks: getTasks,
    completeTask: completeTask,
    addTask: addTask,
    deleteTask: deleteTask,
    uncompleteTask: uncompleteTask
  };

}]);
