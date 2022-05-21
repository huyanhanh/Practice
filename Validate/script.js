const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const username = $('.username')
const email = $('.email')
const password = $('.password')
const confirm = $('.confirm-password')
const form = $('form')

function showError(input, error) {
    const parent = input.parentElement
    const message = parent.querySelector('.message')
    parent.classList.add('error')

    message.innerHTML = error
}

function showSuccess(input) {
    const parent = input.parentElement
    const message = parent.querySelector('.message')
    parent.classList.remove('error')
    message.innerHTML = ''
}

function checkEmptyError(listInput) {
    let isEmptyError = false
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value) {
            isEmptyError = true
            showError(input, 'Please fullfill')
        } else {
            showSuccess(input)
        }
    });

    return isEmptyError
}

function checkEmail(input) {
    const regexEmail  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value = input.value.trim() 

    let isEmailError = !regexEmail.test(input.value)

    if(regexEmail.test(input.value)) {
        showSuccess(input)
    } else { 
        showError(input, 'Email Invalid')
    }

    return isEmailError
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim() 
    
    if(input.value.length < min ) {
        showError(input,  `Toi da ${min} ki tu`)
        return true
    } 

    if(input.value.length > max ) {
        showError(input, `Toi da ${max} ki tu`)
        return true
    } 

    return false
}

function checkMatchPassword(password, cpassword) {
    if(password.value !== cpassword.value) {
        showError(cpassword, 'Password not similar')
        password.value = ''
        cpassword.value = ''
        return true
    } 

    return false
}

form.onsubmit = (e) => {
    e.preventDefault()

    let isEmptyError = checkEmptyError([username, email, password, confirm])
    let isEmailError = checkEmail(email)
    let isCheckLengthError = checkLengthError(username, 3, 10)
    let isPasswordError = checkLengthError(password, 3, 10)
    let isMatchError = checkMatchPassword(password, confirm)

    if(isEmptyError || isEmailError || isCheckLengthError || isPasswordError || isMatchError) {
        // do something
    } else {
        // logic, callApi
    }
}   
