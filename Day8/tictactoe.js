$(document).ready(function() {
	var clickCount = 0; //change this strategically!

	$(".grid-box").click(function(e) {
		var clickedID = e.currentTarget.id; //the id of the box that was clicked.
		//fill in stuff HERE!
		clickCount++;
		if(clickCount%2===0){
		$("#"+clickedID).html("X");
		}
		else {
		$("#"+clickedID).html("O");
		}
	});
});