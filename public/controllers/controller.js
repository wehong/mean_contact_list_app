var ContactListApp = angular.module("ContactListApp", []);

ContactListApp.controller('ContactListCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    console.log("Hello from ContactListCtrl");
  }]);
