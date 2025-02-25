
    model: ChatGPT-4o

### First Prompt

    (ROL)
    Actúa como un ingeniero de software experimentado.

    (CONTEXTO)
    Como ingeniero de software, debes completar las tarea de la forma más eficáz posible.
    
    Para completar la tarea debes partir de este archivo index.html:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reverse String BRT</title>    
    </head>
    <body>
        <script src="script.js"></script>
    </body>
    </html>
    
    Debes usar solo javascript y html, sin usar librerías externas.

    Debes usar el archivo script.js para introducir el código javascript dinámico.

    Los estilos de CSS deben ser similares a la interfaz de X (anteriormente twitter) en modo oscuro. Debe ser un diseño moderno.

    (TAREA)
    Crea una interfaz web con un campo input y un botón de acción.

    El botón debe contener el texto "Reverse".

    En el campo input el usuario debe poder escribir cualquier cadena de texto, no más de 255 caractéres.

    Cuando el usuario pulse sobre el botón, el sistema debe revertir la cadena introducida por el usuario.

    El usuario podrá cambiar la cadena siempre que quiera.

    Si el usuario borra todo el contenido del input, el resultado debe desaparecer.

    Después de calcular la cadena revertida, el resultado de la misma debe aparecer debajo en formato de tweet.


    (salida)
    Incorpora los estilos en la etiqueta head del html.
    Debes devolver el código del archivo index.html y script.js


### Second prompt

    Agrega un botón para limpiar el input, y por lo tanto, el resultado. Pón en el texto del botón limpiar y sigue los patrones de diseño mencionados anteriormente. En este caso el botón debe aparecer a la derecha del botón reverse y estar en color gris.





