
// VARIABLES
const time = document.getElementById('time');
const text = document.getElementById('text');
const nameInput = document.querySelector('input#name');
const focus = document.querySelector('#focus')
const focusQuestion = document.querySelector('#focus > .question');
const focusAnswer = document.querySelector('#focus > .answer');
const focusInput = document.querySelector('#focus > .question input');
const focusAnswerSpan = document.querySelector('#focus > .answer h2 span');
const quoteElement = document.querySelector('#quote');
const quoteButton = document.querySelector('.add-quote');
const quoteInput = document.querySelector('.add-quote input')
const toDoButton = document.querySelector('#todo button');
const toDoInput = document.querySelector('#todo input');
const toDoList = document.querySelector('#todo .tooltip > ul');

const quotes = [`Nothing is impossible`, `You are never too old to set another goal or to dream a new dream.`, `Believe you can and you’re halfway there.`]
const toDoItems = ['code', 'eat', 'sleep'];

// DATE
let greeting;

function getTime() {
    let today = new Date();
    
    if (today.getHours() < 12) {
        greeting = 'Good morning'
    } else if (today.getHours() < 18) {
        greeting = 'Good afternoon'
    } else {
        greeting = 'Good evening'
    }
    let timer = `${today.getHours()}:${today.getMinutes() < 10 ? '0'+ today.getMinutes() : today.getMinutes()}`
   time.textContent = timer;
}
getTime();
setInterval(getTime, 5000)

// NAME
text.innerHTML = "<h1>Hello, What's your name?</h1>";

function updateName(event) {
    if (event.code === 'Enter') {
        text.innerHTML = `<h1 class="name">${greeting}, ${nameInput.value}!</h1>`;
        nameInput.classList.add('hide');
        focus.classList.remove('hide');
    }
}

// FOCUS
function updateFocus(event) {
    if (event.code === 'Enter') {
       focusAnswerSpan.textContent = focusInput.value;
       focusQuestion.classList.add('hide');
       focusAnswer.classList.remove('hide');
    }
}

// QUOTE
// function showRandomQuote() {
    let randomNumber = Math.round(Math.random() * (quotes.length - 1));
    const select = document.createElement('select');
    quotes.forEach(quote => {
        const option = document.createElement('option');
        option.textContent = `"${quote}"`;
        select.appendChild(option);
    })
    select.selectedIndex = randomNumber
    quoteElement.prepend(select);
// }

function showQuoteInput(event) {
    event.target.nextElementSibling.classList.toggle('hide')
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

// showRandomQuote();

// TODO 
function toggleToDo() {
    this.previousElementSibling.classList.toggle('show')
}

function showToDo(newItem) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.textContent = newItem;
    li.prepend(checkbox);
    toDoList.appendChild(li);
}

function addToDo(event) {
    if (event.code === 'Enter') {
        toDoItems.push(toDoInput.value);
        showToDo(toDoInput.value);
        toDoInput.value = '';
    }
}

function deleteToDo(event) {
   if (event.target.checked) {
       let itemIndex = toDoItems.indexOf(event.target.nextSibling.textContent);
       if (itemIndex > -1) {
           const removeBtn = document.createElement('span');
           removeBtn.textContent = 'x';
           toDoItems.splice(itemIndex, 1);
           event.target.parentElement.appendChild(removeBtn);
           event.target.parentElement.style.textDecoration = 'line-through';

           removeBtn.addEventListener('click', function() {
               this.parentElement.remove();
           })
       }
    }
}

toDoItems.forEach(item => {
    showToDo(item);
})

// EVENTS
nameInput.addEventListener('keyup', updateName);
focusInput.addEventListener('keyup', updateFocus);
toDoButton.addEventListener('click', toggleToDo);
toDoInput.addEventListener('keyup', addToDo);
toDoList.addEventListener('change', deleteToDo);
quoteButton.addEventListener('click', showQuoteInput);
quoteInput.addEventListener('keyup', addQuote);