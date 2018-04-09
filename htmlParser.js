
//Given an input, creates a text file of the input and link for that file
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };

//Get all script tags
var scriptArray = document.getElementsByTagName("script");
var scriptString = "";

//Get all form tags
var formArray = document.getElementsByTagName("form");
var formString = "";

//Iterate through all script tags, parse them, and write their contents to a string
for (var i = 0; i < scriptArray.length; i++) {
	if (scriptArray[i].innerHTML != "") {
		scriptString += "\n\n<script>\n";
		scriptString += scriptArray[i].innerHTML;
		scriptString += "\n</script>";
	}
}

//Iterate through all form tags, parse them, and write their contents to a string
for (var i = 0; i < formArray.length; i++) {
	if (formArray[i].innerHTML != "") {
		formString += "\n\n<form>\n";
		formString += formArray[i].innerHTML;
		formString += "\n</form>";
	}
}

var file = makeTextFile(scriptString + formString);

//Redirects to file
if (window.confirm("Click \"OK\" to view to parsed HTML info.")) {
	window.location.href = file;
}

console.log(file);






