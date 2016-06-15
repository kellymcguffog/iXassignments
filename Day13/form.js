var app=angular.module("FormApp",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"form1.html"
	})
	$routeProvider.when("/form2",{
		templateUrl:"form2.html"
	})
})
app.controller("MainCtrl", function($scope){
	$scope.showForm=true;
	$scope.submit=function(){
		var isFormValid= true;

		if(!nameIsValid($scope.name)){
			alert("Name must not be left empty");
			isFormValid=false;
		};
		if(!phoneIsValid($scope.number)) {
			alert("Phone number must be in the format XXX-XXX-XXXX");
			isFormValid=false;
		};
		if(!emailIsValid($scope.email)){
			alert("Email must be blah@blah.blah");
			isFormValid=false;
		};
		if(!passwordIsValid($scope.password)){
			alert("Password must be at least 6 characters long");
			isFormValid=false;
		};
		if($scope.confirm!==$scope.password){
			alert("Passwords do not match");
			isFormValid=false;
		};
		if(isFormValid){
			$scope.showForm=false;
			window.location="#/form2";
		}
	} 

	var nameIsValid=function(name){
		if(name && name.length>0){
			return true;
		}
		else{
			return false;
		}
	}

	var phoneIsValid = function(number) {
		if(number) {
			var test=number.split('-');
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
	}

	var emailIsValid=function(email){
		if(email){
			var emailTest=email.split('@');
			if(emailTest.length !==2) {
				return false;
			}
			else {
				var emailTest2=emailTest[1].split('.');
				if (emailTest2.length !==2) {
					return false;
				}
				else {
					return true;
				}
			}
		}
	}

	var passwordIsValid=function(password){
		if(password && password.length>=6){
				return true;
			}
			else{
				return false;
			}
		}

});

app.controller("RouterCtrl", function($scope){

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