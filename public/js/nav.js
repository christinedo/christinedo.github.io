$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
		myFunction();
        console.log("open");
	});
	/* When the user clicks on the button,
	toggle between hiding and displaying the dropdown content */
	function myFunction() {
	    document.getElementById("myDropdown").classList.toggle("display");
	    console.log("dropdown");
	}
});
