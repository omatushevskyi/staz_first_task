class FormElements {
    constructor() {
        // tagName, qualifiedName, value
        // this.tagName = tagName;
        // this.qualifiedName = qualifiedName;
        // this.value = value;
    }

    generateDivElements(divClass, divId, selectorClass) {
        let divElement = document.createElement('div');
        divElement.setAttribute('class', divClass);
        divElement.setAttribute('id', divId);
        document.querySelector(selectorClass).appendChild(divElement);
    }

    generateInputElement(typeOfElement, inputName, inputType, inputPlaceholder, inputId, selector) {
        let inputElement = document.createElement(typeOfElement);
        inputElement.setAttribute("name", inputName);
        inputElement.setAttribute("type", inputType);
        inputElement.setAttribute("placeholder", inputPlaceholder);
        inputElement.setAttribute("id", inputId);
        document.querySelector(selector).appendChild(inputElement);
    }

    generateHeader(headerInnerHTML) {
        let header = document.createElement("h1");
        header.innerHTML = headerInnerHTML;
        document.querySelector(".header").appendChild(header);
    }

    generateForm(formAction, formMethod) {
        let form = document.createElement('form');
        form.setAttribute('action', formAction);
        form.setAttribute('method', formMethod);
        form.setAttribute("class", "form");
        form.setAttribute("id", "form");
        document.querySelector('.container').appendChild(form);
    }

    generateButton(buttonType, buttonInnerHTML) {
        let button = document.createElement("button");
        button.setAttribute("type", buttonType);
        button.innerHTML = buttonInnerHTML;
        document.querySelector('.form').appendChild(button);
    }

    generateSmallElement(selector) {
        const smallElementEmail = document.createElement('small');
        smallElementEmail.innerHTML = 'Error message';
        document.querySelector(selector).appendChild(smallElementEmail);
    }
}




