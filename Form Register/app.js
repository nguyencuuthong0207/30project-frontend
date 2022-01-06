var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email'); 
var confirmPassword = document.getElementById('confirmPassword');
var form = document.querySelector('form');

//Show error message
function showError(input,message){
    const formControl = input.parentElement
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success message
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = ''
}

//Check email
function checkEmail(input) {
    const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Email is not valid')
	}
}

//Check required fields
function checkRequired(inputArr){
    let isRequired = false
    inputArr.forEach(function(input){
        if(input.value.trim() ===''){
            showError(input, `${getFieldName(input)} is required` )
            isRequired = true
        } else {
            showSuccess(input)
        }
    })
    return isRequired
}

//Check input length
function checkLength(input,min,max){
    if(input.value.length < min) {
        showError(input,`${getFieldName(input)} must be at least ${min}`)
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at most ${max}`)
    } else {
        showSuccess(input)
    }
}

//Check password matches
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match')
    }
}

//Get fieldsName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Event listener
form.addEventListener('submit', function(e){
    e.preventDefault()

    if (!checkRequired([username, email, password, confirmPassword])) {
        checkLength(username, 3, 20)
        checkLength(password, 6, 25)
        checkEmail(email)
        checkPasswordMatch(password, confirmPassword)
    }
})