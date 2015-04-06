var ContactListApp = angular.module("ContactListApp", []);

ContactListApp.controller('ContactListCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    $http.get('/contactList').success(function(response) {
      console.log("Data Received");
      $scope.contactList = response;
    })
  }]);
