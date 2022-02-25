import createEventListener from "./event.js";

const quotes = [`Nothing is impossible`, `You are never too old to set another goal or to dream a new dream.`, `Believe you can and you’re halfway there.`]

const quoteElement = document.querySelector('#quote');
const quoteButton = document.querySelector('.add-quote button');
const quoteInput = document.querySelector('.add-quote input');
const select = document.createElement('select');

function showQuoteInput() {
    quoteInput.classList.toggle('hide');
}

function addQuote(event) {   
    if (event.code === "Enter") {
        quotes.push(quoteInput.value);
        const option = document.createElement('option');
        option.textContent = `"${quoteInput.value}"`;
        select.appendChild(option);
        select.selectedIndex = select.children.length - 1;
        quoteInput.classList.add('hide');
    }
}

export function showQuotes() {
    let randomNumber = Math.round(Math.random() * (quotes.length - 1));
    quotes.forEach(quote => {
        const option = document.createElement('option');
        option.textContent = `"${quote}"`;
        select.appendChild(option);
    })
    select.selectedIndex = randomNumber
    quoteElement.prepend(select);
}

export function quoteButtonEvent() {
    createEventListener(quoteButton, 'click', showQuoteInput);
}

export function quoteInputEvent() {
    createEventListener(quoteInput, 'keyup', addQuote);
}