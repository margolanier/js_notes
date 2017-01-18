module.exports = {
	show: function(items) {
		
		let ul = document.querySelector('#list');
		
		items.forEach(function(item) {
			let li = document.createElement('li');
			li.textContent = item.name;
			ul.appendChild(li);
		});
		
	},
	
	hide: function(items) {
		
	}
};