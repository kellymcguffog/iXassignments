$(document).ready(function() {
	 $("#submit-btn").click(function(){ 
  		phoneValidator($("#phone").val());
		emailValidator($("#email").val());

	});

}); 


function phoneValidator(phoneNum) {  
	var phoneTest=phoneNum.split('-');
	if(phoneTest.length !==3) {
		$("#test1").text("invalid number");
	}
	else if((phoneTest[0].length !==3) || (phoneTest[0] == NaN)) {
		$("#test1").text("invalid number");
	}
	else if((phoneTest[1].length !==3) || (phoneTest[1] == NaN)) {
		$("#test1").text("invalid number");
	}
	else if((phoneTest[2].length !==4) || (phoneTest[2] == NaN)) {
		$("#test1").text("invalid number");
	}
	else {
		$("#test1").text("valid number");
	}
}


function emailValidator(email) {
	var emailTest=email.split('@');
	if(emailTest.length !==2) {
		$("#test2").text("invalid email");
	}
	else {
		var emailTest2=emailTest[1].split('.');
		if (emailTest2.length !==2) {
			$("#test2").text("invalid email");
		}
		else {
			$("#test2").text("valid email");
		}
	}

}