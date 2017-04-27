angular.module('login.service', [])

.service('LogInService', function ($http) {
    this.login = function (email, pass) {
        return $http.post("http://puppypals.azurewebsites.net/api/LogIn",{
            'Email': email,
            'Password': pass
        })
    };
})
