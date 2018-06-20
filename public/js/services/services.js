var app = angular.module('angular-app');

app.factory('users', function($http, $q) {

  return {
    postdata: function(userdata) {
      var defer = $q.defer();
        $http.post('http://localhost:3000/reg', userdata).then(function(resp) {
            defer.resolve(resp);
        });
        return defer.promise;
    },

    getdata: function() {
      var defer = $q.defer();
        $http.get('http://localhost:3000/getuser').then(function(resp) {
          defer.resolve(resp)
        });
        return defer.promise;
    }
  }

})
