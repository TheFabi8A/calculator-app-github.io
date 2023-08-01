// Obtener los botones del DOM
const btnNumpadMultiply = document.querySelector('.pad-btn-multiply');
const btnNumpadReset = document.querySelector('.pad-btn-reset');
const btnNumpadEqual = document.querySelector('.pad-btn-equal');
const btnNumpadSubtract = document.querySelector('.pad-btn-subtract');
const btnNumpadDel = document.querySelector('.pad-btn-del');
const btnNumpadAdd = document.querySelector('.pad-btn-add');
const btnNumpadDivide = document.querySelector('.pad-btn-divide');
const btnNumpadDecimal = document.querySelector('.pad-btn-dot');

// Función para establecer el estado de encendido o apagado de un botón
function setButtonState(button, bottom, boxShadow) {
  button.style.bottom = bottom;
  button.style.boxShadow = boxShadow;
}

function handleKeyPress(event) {
  const key = event.code;
  handleButtonState(event, key);
}

// Números del teclado fuera del numpad
const numbersOutsideNumpad = ['Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9'];

// Números del numpad
const numbersInNumpad = ['Numpad0', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract', 'NumpadAdd', 'NumpadEnter', 'NumpadDecimal'];

// Mapeo de las teclas a los botones y números
const keyToBtnMap = {
  'Escape': {button: btnNumpadReset, num: 'reset'},
  'Backspace': {button: btnNumpadDel, num: 'del'},
  'NumpadDivide': {button: btnNumpadDivide, num: '/'},
  'NumpadMultiply': {button: btnNumpadMultiply, num: 'x'},
  'NumpadSubtract': {button: btnNumpadSubtract, num: '-'},
  'NumpadAdd': {button: btnNumpadAdd, num: '+'},
  'NumpadEnter': {button: btnNumpadEqual, num: '='},
  'NumpadDecimal': {button: btnNumpadDecimal, num: '.'},
};

// Función para verificar si el Bloq Num está activado

function isNumLockOn(event) {
  return event.getModifierState('NumLock');
}

let isKeyPressed = false;

// Función para manejar eventos de teclado
function handleButtonState(event, key) {
  let targetButton = null;
  const bottom = event.type === 'keydown' ? '-5px' : '0';
  const boxShadow = event.type === 'keydown' ? '0px 0.35rem rgba(0, 0, 0, 0)' : '';

  // Verificar si el código de tecla coincide con los números del teclado fuera del numpad o dentro del numpad
  const num = key.slice(-1);
  if (numbersOutsideNumpad.concat(numbersInNumpad).indexOf(key) !== -1) {
    if (event.getModifierState('NumLock') || numbersOutsideNumpad.indexOf(key) !== -1) {
      targetButton = document.querySelector(`.pad-btn-${num}`);
    }
  }

  // Verificar si el código de tecla coincide con los botones definidos en el mapeo
  if (keyToBtnMap.hasOwnProperty(key)) {
    targetButton = keyToBtnMap[key].button;
  }

  // Si se encontró el botón, establecer el estado de encendido o apagado
  if (targetButton) {
    const bottom = isKeyPressed ? '0' : '-5px';
    const boxShadow = isKeyPressed ? '0px 0.35rem rgba(0, 0, 0, 0)' : '';
    if (numbersInNumpad.includes(key) && !event.getModifierState('NumLock')) {
      // No hacer nada si Bloq Num está desactivado
    } else {
      setButtonState(targetButton, bottom, boxShadow);
      isKeyPressed = !isKeyPressed;
    }
  }
}

// Agregar eventos de teclado
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyPress);


// themes

// Paso 1: Obtener el elemento input con el id 'themes'
const inputRange = document.getElementById('themes');

// Paso 2: Agregar event listener al input
inputRange.addEventListener('change', () => {
  // Paso 3: Obtener los elementos a modificar
  const body = document.body;
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
  const padBtn = document.querySelectorAll('[class^="pad-btn"]');
  const numThemeContainer = document.querySelector('.num-theme-container');
  const tableScreen = document.querySelector('.table-screen');
  const textScreen = document.querySelector('.text-screen');
  const tablePad = document.querySelector('.table-pad');
  const delBtn = document.querySelector('.pad-btn-del');
  const resetBtn = document.querySelector('.pad-btn-reset');
  const equalBtn = document.querySelector('.pad-btn-equal');

  /**
 * Defino la función para cambiar los estilos respecto al valor del input range
 *
 * @param {string} value
 * 1 para los estilos default, 2 para el estilo light y 3 para el estilo dark
 */
  function cambiarEstilos(value) {
    if (value === '1') {
      body.style.backgroundColor = 'var(--theme-1-bg-1)';
      h1.style.color = 'var(--theme-1-text-2)';
      h2.style.color = 'var(--theme-1-text-2)';
      padBtn.forEach(function(btn) {
        btn.style.color = 'var(--theme-1-text-1)';
        btn.style.backgroundColor = 'var(--theme-1-key-5)';
        btn.style.boxShadow = '0 0.35rem 0 0 var(--theme-1-key-6)';
      });
      numThemeContainer.style.color = 'var(--theme-1-text-2)';
      tableScreen.style.backgroundColor = 'var(--theme-1-bg-3)';
      textScreen.style.color = 'var(--theme-1-text-2)';
      tablePad.style.backgroundColor = 'var(--theme-1-bg-2)';
      delBtn.style.color = 'var(--theme-1-text-2)';
      delBtn.style.backgroundColor = 'var(--theme-1-key-1)';
      delBtn.style.boxShadow = '0 0.35rem 0 0 var(--theme-1-key-2)';
      resetBtn.style.color = 'var(--theme-1-text-2)';
      resetBtn.style.backgroundColor = 'var(--theme-1-key-1)';
      resetBtn.style.boxShadow = '0 0.35rem 0 0 var(--theme-1-key-2)';
      equalBtn.style.color = 'var(--theme-1-text-2)';
      equalBtn.style.backgroundColor = 'var(--theme-1-key-3)';
      equalBtn.style.boxShadow = '0 0.35rem 0 0 var(--theme-1-key-4)';
      inputRange.style.accentColor = 'var(--theme-1-key-3)';
    } else if (value === '2') {
      // Light Theme
      body.style.backgroundColor = 'var(--theme-2-bg-1)';
      h1.style.color = 'var(--theme-2-text-1)';
      h2.style.color = 'var(--theme-2-text-1)';
      padBtn.forEach(function(btn) {
        btn.style.color = 'var(--theme-2-text-1)';
        btn.style.backgroundColor = 'var(--theme-2-key-5)';
        btn.style.boxShadow = '0 0.35rem 0 0 var(--theme-2-key-6)';
      });
      numThemeContainer.style.color = 'var(--theme-2-text-1)';
      tableScreen.style.backgroundColor = 'var(--theme-2-bg-3)';
      textScreen.style.color = 'var(--theme-2-text-1)';
      tablePad.style.backgroundColor = 'var(--theme-2-bg-2)';
      delBtn.style.color = 'var(--theme-2-text-2)';
      delBtn.style.backgroundColor = 'var(--theme-2-key-1)';
      delBtn.style.boxShadow = '0 0.35rem 0 0 var(--theme-2-key-2)';
      resetBtn.style.color = 'var(--theme-2-text-2)';
      resetBtn.style.backgroundColor = 'var(--theme-2-key-1)';
      resetBtn.style.boxShadow = '0 0.35rem 0 0 var(--theme-2-key-2)';
      equalBtn.style.color = 'var(--theme-2-text-2)';
      equalBtn.style.backgroundColor = 'var(--theme-2-key-3)';
      equalBtn.style.boxShadow = '0 0.35rem 0 0 var(--theme-2-key-4)';
      inputRange.style.accentColor = 'var(--theme-2-key-3)';
    } else if (value === '3') {
      // Dark theme
      body.style.backgroundColor = 'var(--theme-3-bg-1)';
      h1.style.color = 'var(--theme-3-text-1)';
      h2.style.color = 'var(--theme-3-text-1)';
      padBtn.forEach(function(btn) {
        btn.style.color = 'var(--theme-3-text-1)';
        btn.style.backgroundColor = 'var(--theme-3-key-5)';
        btn.style.boxShadow = '0 0.35rem 0 0 var(--theme-3-key-6)';
      });
      numThemeContainer.style.color = 'var(--theme-3-text-1)';
      tableScreen.style.backgroundColor = 'var(--theme-3-bg-2)';
      textScreen.style.color = 'var(--theme-3-text-1)';
      tablePad.style.backgroundColor = 'var(--theme-3-bg-2)';
      delBtn.style.color = 'var(--theme-3-text-3)';
      delBtn.style.backgroundColor = 'var(--theme-3-key-1)';
      delBtn.style.boxShadow = '0 0.35rem 0 0 var(--theme-3-key-2)';
      resetBtn.style.color = 'var(--theme-3-text-3)';
      resetBtn.style.backgroundColor = 'var(--theme-3-key-1)';
      resetBtn.style.boxShadow = '0 0.35rem 0 0 var(--theme-3-key-2)';
      equalBtn.style.color = 'var(--theme-3-text-2)';
      equalBtn.style.backgroundColor = 'var(--theme-3-key-3)';
      equalBtn.style.boxShadow = '0 0.35rem 0 0 var(--theme-3-key-4)';
      inputRange.style.accentColor = 'var(--theme-3-key-3)';
    }
  }

  // Paso 5: Llamar a la función cuando cambie el valor del input
  cambiarEstilos(inputRange.value);
});
