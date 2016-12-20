function init() {
	
	let button = document.querySelector('#add');
	
	button.addEventListener('click', function() {
		
		// 1. Get the input
		let textBox = document.querySelector('input');
		// value is a property that <input> elements have
		// textBox.value = 'hello!'; 
		// textBox.value += ' sounds amazing!';
		
		// 2. Create new <li>
		let child = document.createElement('li'); // parameter = element type
		child.textContent = textBox.value;
		
		if (textBox.value[0].toLowerCase() === 'k') {
			child.classList.add('highlight');
		}
		
		textBox.value = '';
		
		// 3. Place the <li> in the <ul>
		let parent = document.querySelector('#list'); // the <ul>
		parent.appendChild(child); // add the element to the parent
		
	});
}

window.addEventListener('load', init);