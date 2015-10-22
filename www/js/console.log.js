if(true)
{
	var originallog = console.log;
	$("body").append("<div style='width: 100%; position: fixed; height: 40%; left: 0px; bottom: 0px; background: black none repeat scroll 0% 0%; color: white; overflow: auto;' id='#consolelog'><ul><li>console.log init()</li></ul></div>");
	var ConsoleLog_OBJ	=	$("#consolelog ul");
	console.log = function(txt) {
		ConsoleLog_OBJ.append("<li>" . txt . "</li>");
		//originallog.apply(console, arguments);
	}
}