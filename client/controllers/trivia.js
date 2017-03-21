app.controller('triviaController', function($scope, triviaFactory, $location){
  $scope.create = function(){
    if(!$scope.newQuestion || !$scope.newQuestion.question || !$scope.newQuestion.answer || !$scope.newQuestion.fakeOne || !$scope.newQuestion.fakeTwo){
      $scope.errMsg = 'All fields required.'
      return;
    }
    if($scope.newQuestion.question.length < 15){
      $scope.errMsg = 'Question must be at least 15 characters long.'
      return;
    }
    $scope.newQuestion.answers = [{id: 1, answer: $scope.newQuestion.answer}, {id: 2, answer: $scope.newQuestion.fakeOne}, {id: 3, answer: $scope.newQuestion.fakeTwo}]
    //randomize answers array
    var currentIndex = $scope.newQuestion.answers.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = $scope.newQuestion.answers[currentIndex];
      $scope.newQuestion.answers[currentIndex] = $scope.newQuestion.answers[randomIndex];
      $scope.newQuestion.answers[randomIndex] = temporaryValue;
    }

    triviaFactory.create($scope.newQuestion);
    $location.path('/dashboard')
  }
})
