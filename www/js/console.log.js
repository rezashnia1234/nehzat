if(true)
{
	is_document_ready = false;
	var originallog = console.log;
	var Old_ConsoleLog_OBJ = "";
	// console.log("test");
	console.log = function(txt) {
		if(is_document_ready == false)
		{
			alert("console.log :\n  " + txt);
			Old_ConsoleLog_OBJ = "<li>" + txt + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li>" + txt + "</li>");
		}
		//originallog.apply(console, arguments);
	}

	$( document ).ready(function() {
		if(!is_document_ready)
		{
			is_document_ready = true;
			$("body").append("<style>#consolelog ul li{font-size: 13px !important;}</style><div style='position: fixed; height: 40%; left: 0px; bottom: 0px; background: black none repeat scroll 0% 0%; color: white; overflow: auto; width: 100%; text-align: left; direction: ltr; padding: 10px 21px !important;' id='consolelog'><ul><li>console.log init();</li>" + Old_ConsoleLog_OBJ + "</ul></div>");
		}
	});
}