$(document).ready(function(){ 
	var button = $("#submit"); 

	button.on('click', function(){

		$this = $(this); 

		console.log("Click detected on: " + $this)

		button.html("Submitted");
	})
})
