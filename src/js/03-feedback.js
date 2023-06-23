import throttle from 'lodash.throttle';


const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", saveMessage);

function saveMessage(evt) {
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    const formData = { email, message, };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

