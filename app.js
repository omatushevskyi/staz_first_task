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

let mainDiv = new FormElements();
mainDiv.generateDivElements('container', 'container','body');

let headerDiv = new FormElements();
headerDiv.generateDivElements('header', 'header-id', '.container');
let headerElement = new FormElements();
headerElement.generateHeader(testSettings.inputs[0].label);

let formElement = new FormElements();
formElement.generateForm(testSettings.action, testSettings.method);

let emailDiv = new FormElements();
emailDiv.generateDivElements('form-control', 'fc-email', '.form');
let emailElement = new FormElements();
emailElement.generateInputElement('input' ,testSettings.inputs[1].name, testSettings.inputs[1].type, testSettings.inputs[1].placeholder, 'email', '#fc-email');

let textareaDiv = new FormElements();
textareaDiv.generateDivElements('form-control', 'fc-textarea', '.form');
let textareaElement = new FormElements();
textareaElement.generateInputElement('textarea',testSettings.inputs[2].name, testSettings.inputs[2].type, testSettings.inputs[2].placeholder, 'textarea', '#fc-textarea');

let buttonElement = new FormElements();
buttonElement.generateButton(testSettings.inputs[3].type, testSettings.inputs[3].label);

let FirstSmallElement = new FormElements();
FirstSmallElement.generateSmallElement('#fc-email');
let SecondSmallElement = new FormElements();
SecondSmallElement.generateSmallElement('#fc-textarea');

const FindFormElement = document.getElementById('form');
const FindEmailElement = document.getElementById('email');
const FindTextareaElement = document.getElementById('textarea');



FindFormElement.addEventListener('submit', e => {
    e.preventDefault();
    let validateInputs = new FormController();
    validateInputs.inputsValidator(FindEmailElement, FindTextareaElement);
});

// console.log(FindFormElement);
// console.log(FindEmailElement);
// console.log(FindTextareaElement);

