# 📌 Prompts y Resultados con chatGPT 4.0

## 🔹 Prompt 1: Definición del Proyecto

### **Instrucción inicial del usuario:**
Actúa como un ingeniero de software experto en creación de proyectos web, con las mejores prácticas en programación siguiendo el principio SOLID, que sepa analizar las necesidades de cada proyecto y defina la mejor arquitectura y patrones de diseño. De igual forma, eres un experto en PROMPTS de AI.

- **Desarrolla un prompt** con todas las actividades necesarias para la creación del siguiente proyecto:
    - Crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto.

Ejemplo: si introduzco `AI4Devs`, devuelve `sveD4IA`.

---

## 🔹 Prompt 2: Desarrollo de un Prompt para Generación de Código en IA

### **Instrucciones para el modelo de IA:**
Eres un experto en desarrollo web siguiendo buenas prácticas, incluyendo el principio SOLID. Genera una aplicación web en JavaScript con una interfaz simple que permita a los usuarios ingresar una cadena de texto y obtener su reverso.

### **Requisitos del proyecto**
1. **Lenguaje y tecnologías:**
    - HTML, CSS y JavaScript puro (Vanilla JS) sin frameworks.
    - Código modular y reutilizable.

2. **Funcionalidad principal:**
    - Un campo de entrada donde el usuario pueda escribir texto.
    - Un botón para invertir la cadena de texto.
    - Una sección que muestre el resultado.

3. **Requisitos técnicos:**
    - Seguir el principio **SRP (Single Responsibility Principle)**: cada función debe tener una sola responsabilidad.
    - Separar la lógica del DOM y la manipulación de la UI.
    - Código limpio, bien comentado y documentado.
    - Función pura para invertir la cadena.
    - Manejo de errores si el usuario ingresa caracteres no válidos o deja el campo vacío.

4. **Experiencia de usuario (UX):**
    - Interfaz minimalista con estilos CSS modernos.
    - Feedback visual al usuario (por ejemplo, cambio de color en el input si está vacío).

### **Estructura esperada del código**
- **index.html** → Contiene la estructura de la interfaz.
- **styles.css** → Contiene los estilos.
- **script.js** → Contiene la lógica para invertir la cadena.

### **Ejemplo de Código Esperado**
- Una función en **JavaScript** que tome una cadena de texto y devuelva su reverso.
- Uso de **event listeners** para manejar la interacción del usuario.
- Código modular y reutilizable.

```javascript
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("textInput");
    const reverseButton = document.getElementById("reverseButton");
    const resultDisplay = document.getElementById("result");

    reverseButton.addEventListener("click", function () {
        const text = inputField.value.trim();
        if (text === "") {
            resultDisplay.textContent = "Por favor, ingresa un texto.";
            return;
        }
        resultDisplay.textContent = reverseString(text);
    });

    function reverseString(str) {
        return str.split("").reverse().join("");
    }
});
```

---

## 🔹 Prompt 3: Código Final Aplicando Buenas Prácticas

### **Estructura del Proyecto**
```
/proyecto-invertir-texto
│── index.html
│── styles.css
│── script.js
```

### **📌 1. Estructura HTML (`index.html`)**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inversor de Texto</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Inversor de Texto</h1>
        <input type="text" id="textInput" placeholder="Escribe aquí...">
        <button id="reverseButton">Invertir</button>
        <p id="result"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### **🎨 2. Estilos CSS (`styles.css`)**

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    margin: 0;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
}

input {
    width: 80%;
    padding: 8px;
    margin: 10px 0;
    border: 2px solid #ccc;
    border-radius: 4px;
}

input:focus {
    border-color: #007bff;
}

button {
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
}

button:hover {
    background: #0056b3;
}

#result {
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}
```

### **🛠️ Explicación de Buenas Prácticas Aplicadas**
✅ Separación de responsabilidades (**SRP**).  
✅ Código modular y reutilizable.  
✅ Mejora en la experiencia de usuario (UX).  
✅ Validaciones y manejo de errores.

---
