var app=angular.module("ContactApp",[]);

app.controller("MainCtrl", function($scope){

	$scope.newName="";
		$scope.newNumber="";
		$scope.items=[];
		$scope.showForm=true;
	$scope.addName=function(){
	var isFormValid= true;
		if(!nameIsValid($scope.newName)){
			alert("Name must not be left empty");
			isFormValid=false;
		};
		if(!phoneIsValid($scope.newNumber)) {
			alert("Phone number must be in the format XXX-XXX-XXXX");
			isFormValid=false;
		};
		if(isFormValid){
			$scope.showForm=false;
			alert("Successfully added" + " " + $scope.newName + " " + "to your contact book")
		}
		
			$scope.items.push($scope.newName);
			$scope.items.push($scope.newNumber);
			$scope.newName="";
			$scope.newNumber="";
	};

		var nameIsValid=function(newName){
			if(newName && newName.length>0){
				return true;
			}
			else{
				return false;
			}
		};

		var phoneIsValid = function(newNumber) {
			if(newNumber) {
				var test=newNumber.split('-');
				if(test.length !==3){
					return false;
				}
				else if((test[0].length !==3) || (test[0]===NaN)){
					return false;
				}
				else if((test[1].length !==3) || (test[1]===NaN)){
					return false;
				}
				else if((test[2].length !==4) || (test[2]===NaN)){
					return false;
				}
				else{
					return true;
				}
			}
			else {
				return false;
			}
		};
	});