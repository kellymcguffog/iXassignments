// change the color of the text in the div with class "color-div" to red
function changeColor() {
	$('.color-div').css('color','red')

}

// add the word "blue" to the div with class "add-div"
function addToDiv() {
	$('.add-div').append("blue");
	
}

// add a title to the page
function addTitle() {
	$('.title-div').append("<h1>Title</h1>");
	
}

// alert the text in the selected item of the dropdown
function getSelected() {
	var selected=$("select option:selected").text();
	alert(selected);
	
}

// change the title to be "New Title"
function changeText() {
	$('.title-div').replaceWith("<h1>New Title</h1>");

}

$(document).ready(function() {
	addToDiv();
	addTitle();
	

	$('.text-changer').click(function(){
		changeText();
	});

	$('.get-selected').click(function(){
		getSelected();

	});

  $('.the-button').click(function(){ 
  		changeColor()
    //hint: what goes in here?
	});
	


  $(".trio").click(function (e) {

    //hint: look at the currentTarget property
  	$('.clicked-id').html("you clicked on id:" + $(this).attr("id"));

});
});