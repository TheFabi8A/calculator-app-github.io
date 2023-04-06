// Obtener los botones del DOM
let btnNumpadMultiply = document.querySelector('.pad-btn-multiply');
let btnNumpadReset = document.querySelector('.pad-btn-reset');
let btnNumpadEqual = document.querySelector('.pad-btn-equal');
let btnNumpadSubtract = document.querySelector('.pad-btn-subtract');
let btnNumpadDel = document.querySelector('.pad-btn-del');
let btnNumpadAdd = document.querySelector('.pad-btn-add');
let btnNumpadDivide = document.querySelector('.pad-btn-divide');
let btnNumpadDecimal = document.querySelector('.pad-btn-dot');
let btnNumpad0 = document.querySelector('.pad-btn-0');
let btnNumpad1 = document.querySelector('.pad-btn-1');
let btnNumpad2 = document.querySelector('.pad-btn-2');
let btnNumpad3 = document.querySelector('.pad-btn-3');
let btnNumpad4 = document.querySelector('.pad-btn-4');
let btnNumpad5 = document.querySelector('.pad-btn-5');
let btnNumpad6 = document.querySelector('.pad-btn-6');
let btnNumpad7 = document.querySelector('.pad-btn-7');
let btnNumpad8 = document.querySelector('.pad-btn-8');
let btnNumpad9 = document.querySelector('.pad-btn-9');

// Función para establecer el estado de encendido o apagado de un botón
function setButtonState(button, bottom, boxShadow) {
    button.style.bottom = bottom;
    button.style.boxShadow = boxShadow;
}

// Mapeo de códigos de tecla a botones
const keyToBtnMap = {
    'Escape': { button: btnNumpadReset, num: 'reset' },
    'Backspace': { button: btnNumpadDel, num: 'del' },
    'NumpadDivide': { button: btnNumpadDivide, num: '/' },
    'NumpadMultiply': { button: btnNumpadMultiply, num: 'x' },
    'NumpadSubtract': { button: btnNumpadSubtract, num: '-' },
    'NumpadAdd': { button: btnNumpadAdd, num: '+' },
    'NumpadEnter': { button: btnNumpadEqual, num: '=' },
    'Enter': { button: btnNumpadEqual, num: '=' },
    'NumpadDecimal': { button: btnNumpadDecimal, num: '.' },
    'Numpad0': { button: btnNumpad0, num: '0' },
    'Numpad1': { button: btnNumpad1, num: '1' },
    'Numpad2': { button: btnNumpad2, num: '2' },
    'Numpad3': { button: btnNumpad3, num: '3' },
    'Numpad4': { button: btnNumpad4, num: '4' },
    'Numpad5': { button: btnNumpad5, num: '5' },
    'Numpad6': { button: btnNumpad6, num: '6' },
    'Numpad7': { button: btnNumpad7, num: '7' },
    'Numpad8': { button: btnNumpad8, num: '8' },
    'Numpad9': { button: btnNumpad9, num: '9' },
    'Digit0': { button: btnNumpad0, num: '0' },
    'Digit1': { button: btnNumpad1, num: '1' },
    'Digit2': { button: btnNumpad2, num: '2' },
    'Digit3': { button: btnNumpad3, num: '3' },
    'Digit4': { button: btnNumpad4, num: '4' },
    'Digit5': { button: btnNumpad5, num: '5' },
    'Digit6': { button: btnNumpad6, num: '6' },
    'Digit7': { button: btnNumpad7, num: '7' },
    'Digit8': { button: btnNumpad8, num: '8' },
    'Digit9': { button: btnNumpad9, num: '9' }
};

// Evento keydown y keyup
window.addEventListener('keydown', (event) => {
    const btn = keyToBtnMap[event.code];
    if (btn) {
        console.log(`Presionando la tecla número ${btn.num} del pad`);
        setButtonState(btn.button, '-3px', 'none');
    }
});

window.addEventListener('keyup', (event) => {
    const btn = keyToBtnMap[event.code];
    if (btn) {
        console.log(`Levantando la tecla número ${btn.num} del pad`);
        setButtonState(btn.button, '0', '');
    }
});
