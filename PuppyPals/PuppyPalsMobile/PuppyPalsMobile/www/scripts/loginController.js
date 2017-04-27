angular.module('APIModule', ['login.service'])

.controller('loginCon', function ($scope, LogInService) {
$scope.createId;

   $scope.loginc = function(email, pass){
       LogInService.login(email, pass), function(id){
            window.localStorage['id'] = angular.toJson("8");
   }
}
})
