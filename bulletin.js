$(document).ready(function() {

$("#signinPage").hide();
$("#createEvent").hide();
alert("Stuff was read.");


$("#signin").click(function(){
    $("#signinPage").slideDown();
    $("#envents").slideUp();
    $("#createEvent").slideUp();
    alert("More stuff.");
	});

$("#go").click(function(){
    $("#createEvent").slideDown();
    $("#envents").slideUp();
    $("#signinPage").slideUp();
    alert("Stuff was read");
	});
