$(document).ready(function(){ 
	var button = $("#signup"); 

	button.on('click', function(){

		$this = $(this); 

		console.log("Click detected on: " + $this)

		button.html("Check your emails!");
	})
})
