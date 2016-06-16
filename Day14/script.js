var app = angular.module("ChommiesApp", ["ngRoute"]);
var CHOMMIES_TOKEN = "87b42babbd1f9305d1d0b32ad7482ff0";

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/me", {
    templateUrl: "templates/me.html"
  })
});


app.controller("FeedCtrl", function($scope, $http) {
  var url = "http://ixchommies.herokuapp.com/";
  $http({
    method: "GET",
    url: url + "brus",
    params: { token: "87b42babbd1f9305d1d0b32ad7482ff0" }
  }).then(function(response) {
    $scope.brus = response.data;
    console.log("b", $scope.brus);
  });

  $http({
    method: "GET",
    url: url + "props",
    params: { token: "87b42babbd1f9305d1d0b32ad7482ff0" }
  }).then(function(response) {
    $scope.props = response.data;
    console.log("p", $scope.props);
  });

  $scope.addProp = function() { 
    $http({
      method: "POST",
      url: url + "props",
      params: { token: "87b42babbd1f9305d1d0b32ad7482ff0" },
      data: {
        props: $scope.newProp.text,
        for: $scope.newProp.receiver.id,
      }
    }).then(function(response) {
       console.log(response.data);
       $scope.newProp = {};
    }).catch(function(response) {
      
        });
   $scope.reload=function(){
  window.location.reload();
   }
  }
});
app.controller("MeCtrl", function($scope, $http) {
  var url = "http://ixchommies.herokuapp.com/props/me";
  $http({
    method: "GET",
    url: url,
    params: { token: "87b42babbd1f9305d1d0b32ad7482ff0" }
  }).then(function(response) {
    $scope.props = response.data;
  });
});

