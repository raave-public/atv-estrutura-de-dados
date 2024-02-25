import { time_element, date_element, month_names } from "./variables.js";

function add_zero(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

setInterval(() => {
    let current_time = new Date();
    let hours = current_time.getHours();
    let minutes = current_time.getMinutes();
    let seconds = current_time.getSeconds();

    // Verifica se é AM ou PM
    let am_pm = hours >= 12 ? 'PM' : 'AM';

    // Converte para o formato de 12 horas
    hours = hours % 12 || 12;

    minutes = add_zero(minutes);
    seconds = add_zero(seconds);

    time_element.textContent = `${hours}:${minutes}:${seconds} ${am_pm}`;
}, 1000);

function display_current_date(){
    const current_date = new Date();
        const day = current_date.getDate();
        const month = month_names[current_date.getMonth()];
        const year = current_date.getFullYear();
        const year_he = year + 10000;

            
            date_element.textContent = `${month} ${day} ${year_he.toLocaleString('en-US')}`;
}

display_current_date();