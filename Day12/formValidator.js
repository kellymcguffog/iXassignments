var app=angular.module("FormApp",[]);
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
			alert("welcome" + " " + $scope.name)
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