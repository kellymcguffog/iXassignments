var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/top", {
    templateUrl: "top.html"
  })
  $routeProvider.when("/search", {
    templateUrl: "search.html"
  })
});

app.controller("TopCtrl", function($scope, $http) {

  $scope.articles = [];
  $http({
    method: "GET",
    url: "https://api.nytimes.com/svc/topstories/v2/opinion.json" +
    "?api-key=6c1830c231564612bbf5484ce7933e27"
  }).then(function(response) {
    $scope.articles = response.data.results;
  });
});

app.controller("SearchCtrl", function($scope, $http) {
  $scope.searchTerm = "";
  $scope.articles = [];
  $scope.search = function() {
    $http({
      method: "GET",
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
      "?api-key=6c1830c231564612bbf5484ce7933e27"
    }).then(function(response) {
      $scope.articles = response.response.docs;
    });
  };
});
