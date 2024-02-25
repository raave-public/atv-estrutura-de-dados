//importação de funções:
import { say, validate_input, hide_title } from "./services/base.js";

//importação de variaveis:
import { audio, buttons, glass, poesy, result_field } from "./services/variables.js"

//importação de objetos e seus métodos:
import { result } from "./objects/result.js";
import { act_h, act_1, act_2, act_3, act_4, act_5, act_6 } from "./objects/acts.js";

let numbers = [];
let typed = 1;

buttons.btn_h.addEventListener('click',()=>{
    result_field.innerHTML = "";
    hide_title();
    act_h.render()

    setTimeout(() => {
        glass.classList.add('glass_glitch');
    }, 6000);
        setTimeout(() => {
            glass.classList.add('glicthed');
        }, 10000);
            setTimeout(() => {
                location.reload();
            }, 15000);
})

buttons.btn_1.addEventListener('click',()=>{
    hide_title();
    result_field.innerHTML = "";
    
    act_1.render();
    
        const data_input = document.getElementById('act_input');
        const container = document.getElementsByClassName('to_hide')[0]

        data_input.addEventListener('keypress',validate_input)

        data_input.addEventListener('keydown',(event)=>{
            let key = event.code;
            let input_value = event.target.value;

            if(key==='Enter'){
                if(input_value>10){
                    result.render(act_1.invalid);
                    data_input.value = '';
                    return;
                } else {
                    container.classList.add('hide');
                    result.render(act_1.success);
                }
            }
        })
})

buttons.btn_2.addEventListener('click',()=>{
    typed = 1;
    hide_title();
    result_field.innerHTML = "";
    act_2.render();

    const data_input = document.getElementById('act_input');
    const container = document.getElementsByClassName('to_hide')[0]
    const typed_field = document.getElementById('typed_field');

    data_input.addEventListener('keypress',validate_input)

    data_input.addEventListener('keydown', (event) => {
        let key = event.code;

        if (key === 'Enter') {
            numbers.push(parseFloat(event.target.value));
            event.target.value = '';
            
            typed++
                typed_field.innerHTML= `Type the ${typed}th number:`
        }

            if(numbers.length==5){
                container.classList.add('hide');
                result.render(`The largest of the numbers entered is: ${Math.max(...numbers)}`);
                    numbers = [];
                    typed = 1;
            }
    });
})

buttons.btn_3.addEventListener('click',()=>{
    typed = 1;
    hide_title();
    result_field.innerHTML = "";
    act_3.render();

    const data_input = document.getElementById('act_input');
    const container = document.getElementsByClassName('to_hide')[0]
    const typed_field = document.getElementById('typed_field');

    data_input.addEventListener('keypress',validate_input)

    data_input.addEventListener('keydown', (event) => {
        let key = event.code;

        if (key === 'Enter') {
            numbers.push(parseFloat(event.target.value));
            event.target.value = '';
            
            typed++
                typed_field.innerHTML= `Type the ${typed}th number:`
        }

            if(numbers.length==5){
                const sum = numbers.reduce((battery, ammount) => battery + ammount, 0);

                container.classList.add('hide');
                result.render(`
                            The sum of the numbers entered is: ${sum} 
                            <br>The average of the numbers entered is: ${sum/5}`);
                    numbers = [];
                    typed = 1;
            }
    });
})

buttons.btn_4.addEventListener('click',()=>{
    typed = 1;
    hide_title();
    result_field.innerHTML = "";
    act_4.render();

    const data_input = document.getElementById('act_input');
    const container = document.getElementsByClassName('to_hide')[0]
    const typed_field = document.getElementById('typed_field');

    data_input.addEventListener('keypress',validate_input);

    data_input.addEventListener('keydown', (event) => {
        let key = event.code;

        if (key === 'Enter') {
            numbers.push(parseFloat(event.target.value));
            event.target.value = '';
            
            typed++
                typed_field.innerHTML= `Type the ${typed}th number:`
        }

            if(numbers.length==2){
                container.classList.add('hide');
                result.render(`The largest of the numbers entered is: ${Math.max(...numbers)}`);
                    numbers = [];
                    typed = 1;
            }
    });
})

buttons.btn_5.addEventListener('click',()=>{
    hide_title();
    result_field.innerHTML = "";
    act_5.render();

    const data_input = document.getElementById('act_input');
    const container = document.getElementsByClassName('to_hide')[0]

    data_input.addEventListener('keypress',validate_input);

    data_input.addEventListener('keydown', (event) => {
        const key = event.code;

        if (key === 'Enter') {
            const number = event.target.value;
            
            if(number>0){
                result.render(`${number} IS POSITIVE.`)
            } else if (number<0){
                result.render(`${number} IS NEGATIVE.`)
            } else {
                container.classList.add('hide');
                result.render(poesy)
            }
        }
    });
})

buttons.btn_6.addEventListener('click',()=>{
    typed = 1;
    hide_title();
    result_field.innerHTML = "";
    act_6.render();

    const data_input = document.getElementById('act_input');
    const container = document.getElementsByClassName('to_hide')[0]

    data_input.addEventListener('keypress',validate_input);

    data_input.addEventListener('keydown', (event) => {
        let key = event.code;

        if (key === 'Enter') {
            numbers.push(parseFloat(event.target.value));
            event.target.value = '';
            
            typed++
                typed_field.innerHTML= `Type the ${typed}th number:`
        }

            if(numbers.length==3){
                container.classList.add('hide');
                    const decreasing = numbers.sort((a, b) => b - a);
                    result.render(`The largest of the numbers entered is: ${decreasing}`);
                    numbers = [];
                    typed = 1;
            }
    });
})

buttons.btn_p.addEventListener('click',()=>{
    if(audio.is_playing === false){
        audio.memory_reboot.play();
            audio.is_playing = true;
    } else {
        audio.memory_reboot.pause();
            audio.is_playing = false;
    }
})