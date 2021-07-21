class FormController {
    constructor() {
    }

    inputsValidator(eValue, tValue) {
        const emailValue = eValue.value.trim();
        const textareaValue = tValue.value.trim();

        if (emailValue === '') {
            setErrorFor(eValue, 'To pole nie może być puste');
        } else if (!isEmail(emailValue)) {
            setErrorFor(eValue, 'Email jest nie poprawny');
        } else {
            setSuccessFor(eValue);
        }

        if (textareaValue === '') {
            setErrorFor(tValue, 'To pole nie może być puste')
        } else {
            setSuccessFor(tValue);
        }
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



