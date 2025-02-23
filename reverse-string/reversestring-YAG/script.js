/**
 * Función pura que invierte una cadena de texto.
 * Se utiliza Array.from para manejar adecuadamente caracteres especiales (Unicode).
 */
function reverseString(str) {
    return Array.from(str).reverse().join('');
  }
  
  // Referencias a elementos del DOM
  const input = document.getElementById('inputString');
  const button = document.getElementById('reverseButton');
  const realTimeResult = document.getElementById('realTimeResult');
  const buttonClickResult = document.getElementById('buttonClickResult');
  const modeSwitch = document.getElementById('modeSwitch');
  const modeHeading = document.getElementById('modeHeading');
  
  /**
   * Listener para el input:
   *  - Muestra la cadena invertida en tiempo real.
   *  - Controla la visibilidad del botón según la longitud del texto.
   */
  input.addEventListener('input', (event) => {
    const text = event.target.value;
    
    // Inversión en tiempo real
    realTimeResult.textContent = reverseString(text);
    
    // Lógica para mostrar/ocultar el botón
    if (text.length > 3) {
      button.style.display = 'inline-block';
    } else {
      button.style.display = 'none';
      // Limpia la inversión por botón si se redujo el texto a menos de 4
      buttonClickResult.textContent = 'Aquí aparecerá el contenido una vez pulses el botón';
    }
  });
  
  /**
   * Listener para el botón:
   *  - Invierte la cadena al hacer clic y muestra el resultado.
   */
  button.addEventListener('click', () => {
    const text = input.value;
    buttonClickResult.textContent = reverseString(text);
  });
  
  /**
   * Listener para el checkbox de modo (Light / Dark)
   * - Si está checked => activamos .light-mode en body y actualizamos el título
   * - Caso contrario => removemos .light-mode y actualizamos el título
   */
  modeSwitch.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.body.classList.add('light-mode');
      modeHeading.textContent = 'Reverse String - Yoberty Alej Garcia (Light Mode ☀)';
    } else {
      document.body.classList.remove('light-mode');
      modeHeading.textContent = 'Reverse String - Yoberty Alej Garcia (Dark Mode 🌙)';
    }
  });
  