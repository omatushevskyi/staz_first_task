const testSettings = {
    action: '/contact/by-mail',
    method: 'POST',
    inputs: [
        {type: 'header', label: 'Skontaktuj się z nami'},
        {name: 'email', type: 'email', placeholder: 'Wpisz swój email'},
        {name: 'content', type: 'textarea', placeholder: 'Wpisz treść wiadomości'},
        {type: 'submit', label: 'Wyślij wiadomość'}
    ]
}

function generateFormOnPattern(testSettings) {
    let divContainer = document.createElement('div');
    divContainer.setAttribute('class', 'container');
    document.body.appendChild(divContainer);

    // h1
    let divHeader = document.createElement('div');
    divHeader.setAttribute('class', 'header');
    divContainer.appendChild(divHeader);

    let header = document.createElement("h1");
    header.innerHTML = testSettings.inputs[0].label;
    divHeader.appendChild(header);

    // formularz
    let form = document.createElement("form");
    form.setAttribute('action', testSettings.action);
    form.setAttribute('method', testSettings.method);
    form.setAttribute("class", "form");
    form.setAttribute("id", "form");
    divContainer.appendChild(form);

    // email
    let divEmail = document.createElement('div');
    divEmail.setAttribute('class', 'form-control');
    divEmail.setAttribute('id', 'fc-email');
    form.appendChild(divEmail);

    let email = document.createElement("input");
    email.setAttribute("name", testSettings.inputs[1].name);
    email.setAttribute("type", testSettings.inputs[1].type);
    email.setAttribute("placeholder", testSettings.inputs[1].placeholder);
    email.setAttribute("id", 'email');
    divEmail.appendChild(email);

    const smallElementEmail = document.createElement('small');
    smallElementEmail.innerHTML = 'Error message';
    divEmail.appendChild(smallElementEmail);

    // pole tekstowe
    let divTextarea = document.createElement('div');
    divTextarea.setAttribute('class', 'form-control');
    divTextarea.setAttribute('id', 'fc-textarea');
    form.appendChild(divTextarea);

    let textarea = document.createElement("textarea");
    textarea.setAttribute("name", testSettings.inputs[2].name);
    textarea.setAttribute("type", testSettings.inputs[2].type);
    textarea.setAttribute("placeholder", testSettings.inputs[2].placeholder);
    textarea.setAttribute("id", "textarea");
    divTextarea.appendChild(textarea);

    const smallElementText = document.createElement('small');
    smallElementText.innerHTML = 'Error message';
    divTextarea.appendChild(smallElementText);

    // przycisk
    let button = document.createElement("button");
    button.setAttribute("type", testSettings.inputs[3].type);
    button.innerHTML = testSettings.inputs[3].label;
    form.appendChild(button);

    const formElement = document.getElementById('form');
    const emailElement = document.getElementById('email');
    const textareaElement = document.getElementById('textarea');

formElement.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

    function checkInputs() {
        const emailValue = emailElement.value.trim();
        const textareaValue = textareaElement.value.trim();

        if (emailValue === '') {
            setErrorFor(emailElement, 'To pole nie może być puste');
        } else if(!isEmail(emailValue)) {
            setErrorFor(emailElement, 'Email jest nie poprawny');
        } else {
            setSuccessFor(emailElement);
        }

        if (textareaValue === '') {
            setErrorFor(textareaElement, 'To pole nie może być puste')
        } else {
            setSuccessFor(textareaElement);
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
}

generateFormOnPattern(testSettings);
