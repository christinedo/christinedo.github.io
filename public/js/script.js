$(document).ready(function() {
	$(".overlay").click(function(event) {
		$("#a").load("podcats.html #project1", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
	});
});