# API

API = application programming interface

REST API

JSON = javscript object notation

In ajax function {

1.	Set up xml http request
2.	open url
3.	give instructions for after loaded
4.	send request

}

	function ajaxCall() {
		let request = new XMLHttpRequest();

		request.open('GET', 'https://url');

		request.addEventListener('load', function() ) {
			// do something
			let response = JSON.parse(request.responseText);
		}

		request.send();
	}

request.responseText = answer  
parse it from JSON to js object

to loop through responses:

	let response = JSON.parse(request.responseText);
	
	for(let i=0; i<response.results.length; i++) {
		let user = response.results[i];
		showPerson(user);
	}

