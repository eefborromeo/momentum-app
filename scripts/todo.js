import createEventListener from "./event.js";

const toDoButton = document.querySelector('#todo button');
const toDoInput = document.querySelector('#todo input');
const toDoList = document.querySelector('#todo .tooltip > ul');
let toDoItems = [];

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
        localStorage.setItem('todo', JSON.stringify(toDoItems))
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
                localStorage.setItem('todo', JSON.stringify(toDoItems))
            })
        }
    }
}

export function getToDo() {
    if (localStorage.getItem('todo')) {
        toDoItems = JSON.parse(localStorage.getItem('todo'));
        toDoItems.forEach(item => {
            showToDo(item);
        })
    }
}

export function toggleToDoListEvent() {
    createEventListener(toDoButton, 'click', toggleToDo)
}

export function addToDoEvent() {
    createEventListener(toDoInput, 'keyup', addToDo);
}

export function deleteToDoEvent() {
    createEventListener(toDoList, 'change', deleteToDo)
}