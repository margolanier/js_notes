window.addEventListener('load', function() {
	let email = new RegExp('^[a-zA-Z][\\w\\.-_]{0,63}@[a-z\.]+\\.(com|org|edu)$');
	let phone = new RegExp('^[0-9]{3}[- ]?[0-9]{4}$');
	
	let user_email = document.querySelector('#email');
	user_email.addEventListener('keyup', validate.bind(null, email, user_email));
	
	let user_phone = document.querySelector('#phone');
	user_phone.addEventListener('keyup', validate.bind(null, phone, user_phone));
});

function validate(regex, input) {
	if (regex.test(input.value)) {
		input.classList.add('valid');
		input.classList.remove('invalid');
	} else {
		input.classList.add('invalid');
		input.classList.remove('valid');
	}
}