const glass = document.getElementById('glass');

const field = document.getElementById('input_field');
const result_field = document.getElementById('result');
const title = document.getElementById('title');

const buttons = {
    btn_h: document.getElementById('btn-h'),
    btn_1: document.getElementById('btn-1'),
    btn_2: document.getElementById('btn-2'),
    btn_3: document.getElementById('btn-3'),
    btn_4: document.getElementById('btn-4'),
    btn_5: document.getElementById('btn-5'),
    btn_6: document.getElementById('btn-6'),
    btn_p: document.getElementById('btn-p')
}

const month_names = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const time_element = document.getElementById('time_orn');
const date_element = document.getElementById('date_orn');

let audio = {
    memory_reboot: new Audio('./resources/assets/audios/memory-reboot.mp3'),
    is_playing: false
}

const poesy =  `<p class="poesy">
                    Zero, that numerical enigma, 
                    <br>In the vastness of the numbers, solitary, 
                    <br>Equidistant between positive and negative, 
                    <br>A threshold where duality is undone.
                </p>

                <p class="poesy">
                    <br>Neither positive nor negative, it resides, 
                    <br>At the midpoint of the scale, impartial, 
                    <br>Like a philosopher contemplating the abyss, 
                    <br>Zero, the epicenter of mathematics.
                </p>

                <p class="poesy">
                    <br>On the numerical lines, its mark is inscribed, 
                    <br>The same distance from positive and negative, 
                    <br>Symmetrical, like a reflection in a mirror, 
                    <br>Zero, the balance between extremes.
                </p>

                <p class="poesy">
                    <br>Neutral, it remains, without bias, 
                    <br>It doesn't lean towards light or shadow, 
                    <br>In the dance of numbers, it is silence, 
                    <br>The pause between the verses of the equation.
                </p>                                

                <p class="poesy">
                    <br>Zero, a paradox in its essence, 
                    <br>Neither positive nor negative, 
                    <br>But the starting point and destination.
                    <br>Where everything begins and dissolves.
                </p>`

export { glass, field, result_field, title, buttons, month_names, time_element, date_element, audio, poesy }