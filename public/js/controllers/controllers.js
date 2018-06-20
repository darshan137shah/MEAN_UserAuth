var app = angular.module('angular-app');

//Landing Page Controller
app.controller('landing-page-ct', ['$scope', function($scope) {
  $scope.title = 'Welcome Title'
}]);

//SignUp Page Controller
app.controller('register-page-ct', ['$scope','users', function($scope , users) {
  $scope.signUpData = function(user) {
    $scope.requestdata = users.postdata(user);
    $scope.requestdata.then(function(data) {
      console.log(data);
    })
  }
}])

//Login Page Controller
app.controller('login-page-ct', ['$scope','users','$location', function($scope , users, $location) {
  $scope.authUser = function(tryUser) {
    $scope.ifUser = users.postdata(tryUser);
    $scope.ifUser.then(function(resp) {
      if(resp.data) {
          $location.path('/')
      }
    })
  }
}])
