import { field } from "../services/variables.js"

let typed = 1;

const act_h = {
    glitch_field_1: `<p>LOADING...</p>`,
    glitch_field_2: `<p class="erro_alert">AN ERROR WAS FOUND IN THE PROJECTION!</p>`,
    glitch_field_3: `<p class="erro_alert">TRYING TO RESTART IT. PLEASE WAIT...</p>`,

    render(){
        field.innerHTML = this.glitch_field_1;
            setTimeout(() => {
                field.innerHTML += this.glitch_field_2
            }, 5000);
                setTimeout(() => {
                    field.innerHTML += this.glitch_field_3
                }, 8000);
    }
}

const act_1 = {
    input_field: `
                <p>
                    1. Make a program that asks for a score between 0 and 10. It should:
                    <br> 1.1. Show a message if the value is invalid, and
                    <br> 1.2. Keep asking until the user enters a valid value.
                </p>

                <br><br>

                <div class="to_hide">
                    <label for="act_input">Type a number between 0 and 10:</label> <br>
                        <input type="text" class="score_in" id="act_input" minlength="1" maxlength="4">
                </div>`,

    invalid: 'The score typed is invalid. Please enter a number between 0 and 10.',
    success: 'The score was saved successfully.',
    
    render(){
        field.innerHTML = this.input_field;
    }
}

let act_2 = {
    input_field: `
                <p>
                    2. Make a program that reads 5 numbers and informs the largest of them.
                </p>

                <br><br>
                <div class="to_hide">
                    <label for="act_input" id="typed_field">Type the ${typed}th number:</label> <br>
                        <input type="text" class="score_in" id="act_input" minlength="1">
                </div>`,

    render(){
        field.innerHTML = this.input_field;
    },
}

let act_3 = {
    input_field: `
                <p>
                    3. Make a program that reads 5 numbers and gives the sum and average of the numbers.
                </p>

                <br><br>
                <div class="to_hide">
                    <label for="act_input" id="typed_field">Type the ${typed}th number:</label> <br>
                        <input type="text" class="score_in" id="act_input" minlength="1">
                </div>`,

    render(){
        field.innerHTML = this.input_field;
    },
}

let act_4 = {
    input_field: `
                <p>
                    4. Make a program that asks 2 numbers and informs the largest of them.
                </p>

                <br><br>
                <div class="to_hide">
                    <label for="act_input" id="typed_field">Type the ${typed}th number:</label> <br>
                        <input type="text" class="score_in" id="act_input" minlength="1">
                </div>`,

    render(){
        field.innerHTML = this.input_field;
    },
}

let act_5 = {
    input_field: `
                <p>
                    5. Make a program that asks for a value and shows on the screen whether the value is positive or negative.
                </p>

                <br><br>
                <div class="to_hide">
                    <label for="act_input" id="typed_field">Type the number:</label> <br>
                        <input type="text" class="score_in" id="act_input" minlength="1">
                </div>`,

    render(){
        field.innerHTML = this.input_field;
    },
}

let act_6 = {
    input_field: `
                <p>
                    6. Make a program that reads three numbers and displays them in descending order.
                </p>

                <br><br>
                <div class="to_hide">
                    <label for="act_input" id="typed_field">Type the ${typed}th number:</label> <br>
                        <input type="text" class="score_in" id="act_input" minlength="1">
                </div>`,

    render(){
        field.innerHTML = this.input_field;
    },
}

export { act_h, act_1, act_2, act_3, act_4, act_5, act_6 }