let cart = [];

function init() {
	getProducts();
}

function getProducts() {
	let request = new XMLHttpRequest();
	
	request.open('GET', 'http://api.queencityiron.com/books');
	
	request.addEventListener('load', function() {
		
		let response = JSON.parse(request.responseText);
		let books = response.books;
		
		for (let i=0; i<books.length; i++) {
			showProduct(books[i]);
		}
		
	});
	
	request.send();
}


function showProduct(product) {
	let bookList = document.querySelector('#products ul');
    let book = document.createElement('li');
    let template = document.querySelector('#product-template');
	
    book.innerHTML = Mustache.render(template.innerHTML, {
        bookName: product.title,
        bookAuthor: product.author,
		bookCover: product.cover,
        bookPrice: product.price,
    });
	
	let button = book.querySelector('button');
	button.addEventListener('click', function() {
		cart.push(product);
		showCart();
	})
	
    bookList.appendChild(book);
}


function showCart() {
	let cartList = document.querySelector('#cart ul');
	cartList.innerHTML = '';
	
	// list items in cart
	for (let i=0; i<cart.length; i++) {
		let cartItem = document.createElement('li');
		let template = document.querySelector('#cart-template');
		
		cartItem.innerHTML = Mustache.render(template.innerHTML, {
			bookName: cart[i].title,
			bookPrice: cart[i].price,
		});
		
		cartList.appendChild(cartItem);
	}
	
	// get total price of cart
	let subtotal = 0;
	for (let i=0; i<cart.length; i++) {
		subtotal += cart[i].price;
	}
	document.querySelector('#cart-subtotal').textContent = subtotal;
	document.querySelector('#cart-tax').textContent = (subtotal * 0.1).toFixed(2);
	document.querySelector('#cart-total').textContent = (subtotal * 1.1).toFixed(2);
	
}

window.addEventListener('load', init);