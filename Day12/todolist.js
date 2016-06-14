var app=angular.module("TodoApp",[]);
app.controller("MainCtrl", function($scope){
	$scope.newItem="";
	$scope.items=[];


$scope.addItem=function(){
	$scope.items.push($scope.newItem);
	$scope.newItem="";
};
$scope.remove=function(item){
	$scope.items.splice(item,1);
};
});