# chatbot utilizado: ChatGPT

# PRIMER PROMPT
<!-- Eres un experto desarrollador de software, además siempre te has caracterizado por ser muy divertido, ingenioso y creativo a la hora de realizar las tareas encomendadas.
Por favor crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto. 
Te voy a presentar algunos ejemplos para que tengas el contexto:
Ejemplo1: si introduzco “AI4Devs” devuelve “sveD4AI”.
Ejemplo2: si introduzco “otorrinolaringolo2025” devuelve “5202ologniralonirroto”.
Ejemplo3: si introduzco “Colombia es la mejor” devuelve “rojem al se aibmoloc”.

Tener presente los siguientes objetivos para ejecutar la tarea:
1.	Documentar y estructurar toda la información técnica requerida para ejecutar cada una de las acciones de forma que un programador junior le sea fácil de replicar y/o actualizar.
2.	Crear el archivo (index.html), que contendrá la estructura de la página web, incluyendo el campo de texto, los botones y el área de resultado.
3.	Crear el archivo (script.js), que contendrá la lógica para invertir la palabra ingresada y mostrar el resultado en la página.
4.	Como se que eres muy creativo y te gusta sobresalir con tus creaciones divertidas, ten en cuenta lo siguiente:
4.1.	Se requiere un Título en la parte superior con una fuente legible y en idioma inglés que diga “Reverse Sting”. 
4.2.	Se requiere un recuadro estándar para el campo de texto (input), que el usuario ingresara y que tenga un ejemplo predeterminado por defecto con la cadena de texto “Hello, welcome to AI4Devs”. Y si el usuario inicia con el ingreso de texto, estas líneas de caracteres que estaban por defecto, se eliminen y el campo quede con la información que se está ingresando. Solo se puede permitir un máximo de 100 caracteres.
4.3.	Debajo del recuadro del campo de texto (input), ubicar a una distancia optima un botón “Reverse” que ejecutará la acción de invertir el texto ingresado en el recuadro estándar para el campo de texto (input).
4.4.	Debajo del botón “Reverse” ubicar a una distancia optima otro recuadro, pero esta vez sin ninguna margen dibujada para imprimir la respuesta (output).
4.5.	Debajo del recuadro destinado para (output), ubicar a una distancia optima un botón “Copy” que ejecutará la acción de copiar en portapapeles el texto resultante de la salida (output).



Consideraciones:
1.	Ejemplo1: si introduzco “AI4Devs” devuelve “sveD4AI”.
input = AI4Devs
output= sveD4AI
2.	Ejemplo2: si introduzco “otorrinolaringolo2025” devuelve “5202ologniralonirroto”.
input = otorrinolaringolo2025
output= 5202ologniralonirroto
3.	Ejemplo3: si introduzco “Colombia es la mejor” devuelve “rojem al se aibmoloc”.
input = Colombia es la mejor
output= rojem al se aibmoloc

4.	Esta página web tiene un ejemplo de punto de partido con el siguiente index.html:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>

Con este anterior html, podrías verificar que todo este alineado hacia la izquierda.

Que el botón de “Reverse” sea de color azul y que contenga la palabra “Reverse” en color blanco y con el icono que represente su acción de color verde en la parte superior derecha del botón “Reverse”.
Que el botón de copiar “Copy” se de color Gris Cemento y que contenga la palabra “Copy” en color blanco y con el icono que represente su acción en la parte derecha del botón “Copy”
5.	Tener presente que si el usuario NO ingresa una cadena de caracteres permitida o al menos lógica (que tenga mínimamente tres letras)
6.	La función creada en el archivo “script.js” debe considerar buenas practicas para el desarrollo y ejecuciones seguras; es decir, debe garantizar que se ingrese texto que explote la ejecución de código JavaScript. 
7.	Tener presente que los caracteres entre comillas (“ ”), en los ejemplos descritos anteriormente solo es para que lo tengas en cuenta de que son cadena de texto.  

Tengo una imagen de ejemplo de como se ve el html, por si te sirve para más contexto: -->


# SEGUNDO PROMPT

<!-- El archivo "style.css", se puede incluir en el "index.html"? -->

# TERCER PROMPT

<!-- Super bien, pero hagamos el área de trabajo un poco más grande, digamos que se acomode al tamaño del monitor del usuario. y agreguemos la funcionalidad de que cuando el usuario use el botón de copiar "Copy", se actualice el recuadro de (input), para que quede disponible para otro ingreso -->

# CUARTO PROMPT

<!-- En cuanto a tamaño me gusto, aunque me faltó:
1- El titulo debe quedar alineado a la izquierda también.
2- Cuando el usuario ejecuta el botón "Copy", en el recuadro de "input" se debe borrar el texto existente y solo debe quedar como al inicio con la palabra "Hello, welcome to AI4Devs" y disponible para otro ingreso. -->