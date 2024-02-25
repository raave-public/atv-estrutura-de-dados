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

function hide_input_field(){
    field.classList.add('hide')
}

function hide_result(){
    if(result.classList.contains('hide')){
        result.classList.remove('hide');
    } else {
        result.classList.add('hide')
    }
}

function check_fields(){
    if(title.classList.contains('hide')){
        title.classList.remove('hide')
    }
}

export { say, validate_input, hide_title, hide_input_field, hide_result, check_fields }