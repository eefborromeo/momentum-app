let greeting;
let today = new Date();
let format = today.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit'}).split(' ');
let hour = parseInt(format[0].split(':'));

export function getTime() {   
    time.innerHTML = `<span>${format[0]}</span><span class="abbreviation">${format[1]}</span>`;
}

export function getGreeting() {
    if (hour < 12 && format[1] === "AM") {
        return greeting = 'Good morning'
    } else if (hour < 6 && format[1] === "PM") {
        return greeting = 'Good afternoon'
    } else {
        return greeting = 'Good evening'
    }
}