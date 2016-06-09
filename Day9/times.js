$(document).ready(function(){
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
		'api-key': "3d9da224bb394d3292600fd02fff99aa"
	});
	$(document).keypress(function(e){
		if(e.keyCode===13){
			var search=$("#times").val();
			url=url + "&q=" + search;
			
			$.ajax({
				url:url,
				method: "GET",
				success: handleResponse
			});

		}
	})

	function handleResponse(response){
		for (var i=0; i<response.response.docs.length; i++){
			$("#list").append("<div>"+response.response.docs[i].headline.main+"</div>");
		}
	}
})