var ContactListApp = angular.module("ContactListApp", []);

ContactListApp.controller('ContactListCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    $scope.isAdded= true;

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

    $scope.removeContact = function(id) {
      console.log(id);
      $http.delete('/contactList/' + id).success(function(response) {
        refresh();
      })
    }

    $scope.editContact = function(id) {
      console.log(id);
      $scope.isAdded = false;
      $http.get('/contactList/' + id).success(function(response) {
        $scope.contact = response;
      })
    }

    $scope.updateContact = function() {
      console.log($scope.contact._id);
      $http.put('/contactList/' + $scope.contact._id, $scope.contact).success(function(response) {
        refresh();
      })            
      $scope.isAdded = true;
    }

    $scope.deselect = function() {      
      $scope.contact = "";      
      $scope.isAdded = true;
    }
  }]);
