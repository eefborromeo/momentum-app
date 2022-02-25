import createEventListener from "./event.js";

const body = document.querySelector('body');
const file = document.querySelector('input[type="file"]');
const fileButton = document.querySelector('#file button');

const terms = ['https://source.unsplash.com/random/900x700/?mountain', 'https://source.unsplash.com/random/900x700/?sunset', 'https://source.unsplash.com/random/900x700/?forest']

function showFileInput() {
    this.classList.add('hide');
    file.classList.remove('hide');
}

function handleFile() {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('bg-image', reader.result);
        body.style.backgroundImage = `url(${localStorage.getItem('bg-image')})`
        file.value = '';
        file.classList.add('hide');
        fileButton.classList.remove('hide');
    })

    reader.readAsDataURL(this.files[0]);
}

export function getRandomBackgroundImage() {
    body.style.setProperty('--background-term', `url(${terms[Math.round(Math.random() * (terms.length - 1))]})`);
}

export function getBackgroundImage() {
    if (localStorage.getItem('bg-image')) {
        body.style.backgroundImage = `url(${localStorage.getItem('bg-image')})`
    }
}

export function showFileInputEvent() {
    createEventListener(fileButton, 'click', showFileInput);
}

export function handleFileEvent() {
    createEventListener(file, 'change', handleFile)
}
