import { title, field, result_field } from "./variables.js";

function say(text){
    console.log(text);
}

function validate_input(keyboard_event) {
    const only_numbers = /[0-9-.]/;
    const key_validation = keyboard_event.key;

    if (!only_numbers.test(key_validation)) {
        keyboard_event.preventDefault();
        return;
    }
}

function hide_title(){
    title.classList.add('hide');
}

export { say, validate_input, hide_title }