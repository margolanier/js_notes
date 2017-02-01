# Organizing Angular

## Modules
Separate controllers into multiple modules to simplify the code

## Components
Components are files that define the styles for an element (i.e. button) so that it can be reused across the app
- Material Design

Goal of components is to break up a template into smaller parts

## Serve
Use a webserver to use Angular components  
Only need to serve the public folder

	npm install -g serve
	serve public // or 'server public -c 0' to prevent caching

Then use http://localhost:3000 (or whatever port is defined) to check your changes instead of index.html

## Bindings
Bindings allow you to specify the data that you want to use in another file

bindings : components :: parameters : functions

Types of bindings
1.	'<' means one-way binding (components CANNOT CHANGE the value) // read-only
2.	'=' means two-way binding (components CAN CHANGE the value) // read-write
3.	'@' means you are passing in a function