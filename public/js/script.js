$(document).ready(function() {
	$("#podcats").click(function(event) {
		$("#a").load("podcats.html #project1", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
	});
	
	$("#mwch").click(function(event) {
		$("#a").load("podcats.html #project2", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
	});

	$("#leicester").click(function(event) {
		$("#a").load("podcats.html #project3", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
	});

	$("button").click(function(event) {
		$("#a").hide();
	});

// function closeContent() {
// 	$("button").click(function(event) {
// 		$("#a").hide();
// 	});
// }

});