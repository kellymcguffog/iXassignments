$(document).ready(function(){

	$(document).mousemove(function(e){
		$('#box').css({
	       left:  e.pageX,
	       top:   e.pageY
	    });
	});
	$(document).keyup(function(e){
		console.log(e);
		if (e.keyCode === 71){
			$(".text").css("color","green")
		}
		else if(e.keyCode === 66){
			$(".text").css("color","blue")
		}

	});
	var numberOfClicks=0;
	$(document).click(function(e){
		numberOfClicks ++;
		$(".number").text (numberOfClicks);
		
	})
});