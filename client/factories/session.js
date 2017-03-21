app.factory('sessionFactory', function($http){
  var factory = {};

  factory.getSessionUser = function(callback){
    $http.get('/getSessionUser').then(function(output){
      factory.sessionUser = output.data;
      callback(output);
    })
  }
  factory.index = function(callback){
    $http.get('/index').then(function(output){
      factory.users = output.data;
      callback(output);
    })
  }
  factory.login = function(user, callback){
    $http.post('/login', user).then(function(output){
      callback(output.data)
    })
  }
  factory.logout = function(){
    $http.get('/logout')
  }
  factory.clearSession = function(){
    factory.sessionUser = null;
    $http.get('/clearSession');
  }

  return factory;
})
