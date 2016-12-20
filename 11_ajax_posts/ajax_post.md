# AJAX POST request

Differences between GET and POST

1.	open('POST', ...)

2.	don't care about the response  
	leave out the event listener bc you don't need to add an action that that
	
3.	usually need to send data in the 'request body'  
	add the body as a parameter to send()  
	JSON.stringify converts from JS to a string (opposite of JSON.parse)

get requests send the url and an empty body

