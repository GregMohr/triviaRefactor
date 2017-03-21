app.controller('sessionController', function($scope, sessionFactory, $location, $routeParams){
  $scope.sessionUser = null;
  $scope.showUser = null;

  sessionFactory.getSessionUser(function(output){
    $scope.sessionUser = output.data;
    if(!$scope.sessionUser || $scope.sessionUser == null){
      $location.path('/login')
    }
  })
  $scope.login = function(){
    sessionFactory.login($scope.user, function(data){
      $scope.sessionUser = data;
      $location.path('/dashboard')
    });
  }
  $scope.logout = function(){
    $scope.sessionUser = {};
    sessionFactory.logout();
  }
  $scope.clearSession = function(){
    $scope.sessionUser = null;
    sessionFactory.clearSession();
  }
})
