var ContactListApp = angular.module("ContactListApp", []);

ContactListApp.controller('ContactListCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    var refresh = function() {
      $http.get('/contactList').success(function(response) {
        console.log("Data Received");
        $scope.contactList = response;
        $scope.contact = "";
      })
    };

    refresh();

    $scope.addContact = function() {
      console.log($scope.contact);
      $http.post('/contactList', $scope.contact).success(function(response) {
        console.log(response);
        refresh();
      });
    }
  }]);
