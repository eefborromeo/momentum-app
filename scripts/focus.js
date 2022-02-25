import createEventListener from "./event.js";

const focusValue = localStorage.getItem('focus');
const focusInput = document.querySelector('#focus > .question input');
const focusQuestion = document.querySelector('#focus > .question');
const focusAnswer = document.querySelector('#focus > .answer');
const focusAnswerSpan = document.querySelector('#focus > .answer h2 span');

function updateFocus(event) {
    if (focusInput.value !== '' && event.code === 'Enter') {
        localStorage.setItem('focus', focusInput.value);
        focusAnswerSpan.textContent = localStorage.getItem('focus');
        focusQuestion.classList.add('hide');
        focusAnswer.classList.remove('hide');
        focusInput.value = '';
    }
}

function showFocus(event) {
    if (event.target.tagName === 'SPAN') {
        focusQuestion.classList.remove('hide');
        focusAnswer.classList.add('hide');
        localStorage.removeItem('focus');
    }
}

export function focusInputEvent() {
    createEventListener(focusInput, 'keyup', updateFocus)
}

export function focusAnswerEvent() {
    createEventListener(focusAnswer, 'click', showFocus)
}

export function getFocus() {
    if (focusValue !== null) {
        focusAnswerSpan.textContent = localStorage.getItem('focus');
        focusQuestion.classList.add('hide');
        focusAnswer.classList.remove('hide');
    }
}