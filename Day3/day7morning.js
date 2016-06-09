//window.onload = function() {
	// console.log the values of First Name and Last Name 
	function getFormValues() {  
		var formElement =document.getElementById("first").value;
		var formElements =document.getElementById("last").value;
		console.log (formElement); 
		console.log (formElements);
	}

	// Change the color of the div with id "color-div"
	function changeColor() {
		document.getElementById("color-div").style.color="red";
	}

//}