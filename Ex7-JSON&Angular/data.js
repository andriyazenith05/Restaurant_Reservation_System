//save this as school.js
var employeeAppModule = angular.module("employeeApp", []);
employeeAppModule.filter('myFormat', function () {
  return function (x) {
    var i, c, txt = "";
    for (i = 0; i < x.length; i++) {
      c = x[i];
      if (i % 2 == 0) {
        c = c.toUpperCase();
      }
      txt += c;
    }
    return txt;
  };
});
employeeAppModule.controller("employeeCtrl", function ($scope, $http) {
  $http.get('data.json')
    .success(function (data) {
      $scope.employees = data;
    })
    .error(function (data, status) {
      console.error('Fail to load data', status, data);
      $scope.employees = {};
    });
});
//