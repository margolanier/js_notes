# React library

## Intro

DOM diffing:
-	compared rendered content with new UI changes
-	makes only minimal changes necessary
-	compares JS objects
-	faster than writing to/reading from the DOM

React.createElement() takes 3 arguments:
1.	property to create (h1, p)
2.	an object of any properties (id or class name)
3.	child elements it will have (other elements, text)

ReactDOM.render() takes 2 arguments:
1.	which element to render
2.	where to render it

Hello world in React before JSX

	const { createElement } = React;
	const { render } = ReactDOM;

	const style = {
		backgroundColor: '#BF9FB1',
		color: 'white',
		fontFamily: 'verdana'
	}

	const title = createElement(
		'h1',
		{id: 'title', className: 'header', style: style},
		'Hello World'
	);

	render(
		title,
		document.querySelector('#react-container')
	);

JSX: JS as XML  
tag-based syntax to create react elements

Hello World after JSX

	const { render } = ReactDOM;

	const title = createElement();

	render(
		<h1	id='title'
			className='header'
			style={{backgroundColor: '#BF9FB1', color: 'white', fontFamily: 'verdana'}}>
		Hello World
		</h1>,
		document.querySelector('#react-container')
	)
	
## Babel inline transpiling
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
<script type="text/babel" src="index.js"></script>


