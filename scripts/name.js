import createEventListener from "./event.js";
import { getGreeting } from "./time.js";

const user = localStorage.getItem('name');
const nameInput = document.querySelector('input#name');
const focus = document.querySelector('#focus');
const text = document.getElementById('text');

function printGreeting() {
    text.innerHTML = `<h1 class="name">${getGreeting()}, <span id="update-name">${localStorage.getItem('name')}</span>!</h1>`;
    nameInput.value = '';
    nameInput.classList.add('hide');
    focus.classList.remove('hide');
}

export function getName() {
    if (user) {
        printGreeting();
    } else {
        text.innerHTML = "<h1>Hello, What's your name?</h1>";
    }
}

function updateName(event) {
    if (nameInput.value !== '' && event.code === 'Enter') {
        localStorage.setItem('name', nameInput.value);
        printGreeting();   
    }
}

export function nameEvent() {
    createEventListener(nameInput, 'keyup', updateName);
}

function showNameInput(event) {
    if (event.target.tagName === 'SPAN') {
        text.innerHTML = "<h1>Hello, What's your name?</h1>";
        nameInput.classList.remove('hide');
        focus.classList.add('hide');
        localStorage.removeItem('name');
    }
}

export function nameInputEvent() {
    createEventListener(text, 'click', showNameInput)
}



