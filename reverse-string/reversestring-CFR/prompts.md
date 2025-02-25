Compórtate como un experto en el desarrollo de software que está realizando una acción formativa básica.
El objetivo es proporcionar todo el material técnico necesario para el conjunto de acciones que se pedirá a los alumnos en un laboratorio. Describo los objetivos a continuación:
1. Crear una página HTML (index.html) que se apoye en un fichero javascript (script.js) que muestre:
1.1 Un título destacado "Reverse String"
1.2 Un campo de de texto (input) donde el usuario pueda meter el texto que desee, por ejemplo, "Hello, welcome to AI4Devs". Debe permitir un máximo de 150 caracteres.
1.3 Un botón de título "Reverse", que desdenadenará la lógica que te describo más adelante
1.4 En la zona inferior de la página, una zona donde aparecerá el texto resultante de ejecutar la acción "Reverse"
1.5 Debajo, un botón "Copy" que permita copiar el texto generado por la acción "Reverse" al portapapeles
1.6 Ajusta los estilos del HTML para que:
1.6.1 Que todo esté alineado a la izquierda
1.6.2 Que el botón de reverse salga en azul, con un icono pequeño en su interior que refleje el significado de la acción. El icono estará a la derecha del texto del botón.
1.6.3 Que el botón de copiar salga en gris oscuro, también con un icono pequeño en su interior que refleje el significado de su acción. El icono estará a la derecha del texto del botón.
2. Crear el fichero script.js que contenga:
2.1 Una función que permita invertir una cadena de texto. Por ejemplo, si recibe el texto "AI4Devs", devolverá "sveD4IA"
2.2 Esta función será invocada desde el botón "Reverse" del html (index.html)
2.3 La función debe contemplar buenas prácticas para el desarrollo seguro. En concreto, debe evitar que se pueda inyectar texto que dispare la ejecución de código javascript
2.4 Hay que validar que se recibe un texto a invertir considerado válido. En concreto, se requiere un mínimo de tres letras. Es decir, el botón "Reverse" debe permanecer desactivado hasta que se hayan tecleado en el campo de texto "input" un mínimo de tres caracteres.
3. Los alumnos deberán entregar su código como un pull-request a un repositorio del curso. Necesito instrucciones detalladas para:
3.1 Hacer un fork del repositorio, en concreto, https://github.com/LIDR-academy/AI4Devs-intro
3.2 Describir todos los pasos que tienen que hacer para trabajar en local y para incorporar, después, vía pull-request, su código especializado

Como una parte opcional del laboratorio se pedirá una mejora en nuestro código que me gustaría que también contemplaras.

4.1 Usando el mismo HTML y JS del apartado anterior.
4.2 En la parte inferior repetimos el código, pero con las siguientes diferencias:
4.2.1 El título destacado será "Reverse String in real time"
4.2.2 En lugar de usar el botón de "Reverse" para lanzar la acción de javascript, el texto se irá actualizando, invertido, cada vez que el usuario teclee un nuevo caracter.
4.2.3 En este segundo ejemplo, desaparece la limitación de un mínimo de tres caracteres. Mantenemos la de un máximo de 150.
4.2.4 Mantenemos las buenas prácticas, en concreto, las que eviten la inyección de código javascript

