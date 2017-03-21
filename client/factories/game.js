app.factory('gameFactory', function($http){
  var factory = {};

  factory.chooseQuestions = function(callback){
    $http.get('/chooseQuestions').then(function(output){
      callback(output.data);
    })
  }
  factory.submitGame = function(game){
    $http.post('/submitGame', game)
  }
  factory.getGames = function(callback){
    $http.get('/getGames').then(function(output){
      callback(output.data);
    })
  }
  return factory;
})
