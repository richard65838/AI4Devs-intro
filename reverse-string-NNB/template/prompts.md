-EJERCICIO ESTANDAR-

------------------------------
PROMPT #1:
------------------------------

Crea una pagina web, con logica en Javascript cuya finalidad sea invertir el orden de una cadena de texto, introducido por un usuario. 

Ejemplo: Entrada es "AI4Devs", la salida debe ser "sveD4IA"

La pagina debe tener un titulo "Reverse String", en negrita y en tamaño un poco más grande que el texto convencional. Luego debe existir un campo de edicion de etxto donde el usuario ingresara el texto que desee invertir. Debajo del campo de texto, debe existir un botón titulado "Reverse" para ejecutar la acción de invertir el texto colocado en el campo de texto anterior. 

El resultado debe mostrarse debajo del boton, y con el texto en color verde.

Debe existir un boton titulado "Clean", que solo se muestra cuando hay un resultado en pantalla, y que al ser presionado, limpia el campo de texto, el resultado mostrado, y esconde el boton de nuevo.

-EJERCICIO SIGUIENTE NIVEL-

------------------------------
PROMPT #2:
------------------------------
Añade una función para que el boton "Reverse" sea visible en pantalla, solamente si hay 3 caracteres en el campo de texto. Si se llegan a escribir menos de 3 caracteres o borrar texto hasta tener menos de 3 caracteres, el boton no deberia estar visible.

------------------------------
PROMPT #3:
------------------------------
Añade un Checkbox debajo del titulo, con el texto "Use In Real Time". Si el checkbox esta en Falso, los botones "Reverse" y "Clean" seguiran comportandose igual, con las condiciones actuales. 

Si el checkbox esta prendido, los botones "Reverse" y "Clean" nunca se mostraran, y por cada caracter añadido o removido del campo de texto, se ejecutara la acción de invertir el texto.

------------------------------
PROMPT #4:
------------------------------
Necesito dos mejoras: 
1. El texto "Use in real time" esta demasiado separado del checkbox. Necesito que este mucho mas cerca. Si es necesario bajar el campo de texto un espacio más, hazlo.

2. Si se esta ejecutando la accion de reverse, debe mostrar el botón "Clean" solamente si el checkbox "Use in real time" esta en Falso.