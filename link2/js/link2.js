$(document).ready(function() {

$("#dropMenu").click(dropDown);

function dropDown()
{
	console.log("I am here");
	$("#dropMenuContent").slideToggle();
}



});