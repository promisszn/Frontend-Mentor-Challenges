const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstnameValue === '') {
        setErrorFor(firstname, 'First Name cannot be empty');
        firstname.placeholder = ''
    }else {
        normal(firstname);
        firstname.placeholder = 'First Name'
    }

    if (lastnameValue === '') {
        setErrorFor(lastname, 'Last Name cannot be empty');
        lastname.placeholder = ''
    }else {
        normal(lastname);
        lastname.placeholder = 'Last Name'
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
        email.placeholder = 'email@example.com'
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Looks like this is not an email');
        email.placeholder = 'email@example.com'
	} else {
		normal(email);
        email.placeholder = 'Email Address'
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
        password.placeholder = ''
	} else {
		normal(password);
        password.placeholder = 'Password'
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const span = formControl.querySelector('span');
	formControl.className = 'form-control error';
	span.innerText = message;
}

function normal(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}