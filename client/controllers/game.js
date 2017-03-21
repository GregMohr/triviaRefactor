app.controller('gameController', function($scope, gameFactory, $location){
  $scope.selects = {};

  if($location.path() == '/dashboard'){
    gameFactory.getGames(function(data){
      $scope.games = data;
    })
  }
  if($location.path() == '/play'){
    gameFactory.chooseQuestions(function(data){
      for(var i = 0;i < data.length;i++){
        var answersArr = data[i].answers
        //This randomize should break once all elements touched once or only 1 remains to be touched. It instead goes for the full length of the array. Should also not swap an element with itself. maybe if randomIndex == currentIndex(after dec), then dec randomIndex?
        var currentIndex = answersArr.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          //will below effectively solve swapping an element with itself?
          if(randomIndex == currentIndex && randomIndex>0){
            randomIndex--
          }
          temporaryValue = answersArr[currentIndex];
          answersArr[currentIndex] = answersArr[randomIndex];
          answersArr[randomIndex] = temporaryValue;
        }
        data[i].answers = answersArr;
      }
      $scope.gameQuestions = data;
    });
  }
  $scope.score = function(){
    if(Object.keys($scope.selects).length < 3){
      $scope.errMsg = 'Please answer all questions.'
      return;
    }
    $scope.score = 0
    for(selection in $scope.selects){
      if($scope.selects[selection] == 1){
        $scope.score++
      }
    }
    var game = {};
    game.player = $scope.sessionUser.name;
    game.score = $scope.score;
    gameFactory.submitGame(game);
    $scope.selects = {};
    $location.path('/dashboard')
  }
})
