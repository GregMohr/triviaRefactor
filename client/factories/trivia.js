app.factory('triviaFactory', function($http){
  var factory = {};

  factory.create = function(question){
    $http.post('/create', question).then(function(output){
      console.log(output.data);
    })
  }
  return factory;
})
