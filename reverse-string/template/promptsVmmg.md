# Version Español

## Cadena Invertida

### Prompt 1

Necesito un proyecto web que utilice HTML, CSS y JavaScript para invertir una cadena de texto ingresada por el usuario. El código debe incluir:

1. Un diseño sencillo con colores o fuentes básicas (archivo separado).
2. Quiero el archivo JavaScript en un archivo separado.
3. Un campo de texto y un botón para realizar la acción.
4. Una validación: si el usuario no ingresa nada, que aparezca un mensaje de error o alerta.
5. Como ejemplo, si ingreso ‘AI4Devs’, se debe mostrar ‘sveD4IA’. Además, me gustaría ver un pequeño título o encabezado para la página.

### Prompt 2

Necesito los siguientes cambios:

6. Que toda la tipografía del proyecto sea Montserrat
7. El titulo debe ser bold 600
8. El input debe ser light 300
9. La cadena "reverse String" debe ser bold 800
10. El boton debe tener un icono adentro, bold 600, redondeado y en color azul
11. El mensaje de validación debe ser Regular 400
12. El input debe ser redondeado y que tenga un alto de 40px y un largo de 80px

### Prompt 3

Necesito lo siguiente

13. Quitar el Label, no lo necesito
14. Poner el boton abajo del input
15. Que aumentes el tamaño de la tipografía del reverse string

## Conclusion

Le pregunte a chat sobre mi eficiencia y estilo de crear prompts y me dio estos comentarios:

# Conclusión sobre la Creación de Prompts y Errores Comunes

A lo largo de la construcción de este proyecto se formularon múltiples **prompts** que modificaban o agregaban elementos al código original de manera iterativa. Esto evidencia ciertos **errores comunes** cuando no se cuenta con una visión clara al inicio. A continuación, se describen los puntos clave y sus posibles soluciones:

---

## 1. Falta de una Visión Completa

**Error Principal:**
No se definieron todos los requisitos de manera integral desde el principio, por lo que cada prompt añadía modificaciones que requerían reescribir o ajustar distintas partes del código.

**Recomendación:**

- Dedica tiempo a planificar el **alcance del proyecto** antes de comenzar.
- Crea un **documento de requisitos** o una lista con las características deseadas (ej. validaciones, funciones de copiar, etc.).
- Si es posible, incluye **mockups** o ejemplos de interfaz para visualizar el resultado.

---

## 2. Cambios Incrementales sin Control de Versiones

**Error Común:**
Los cambios se iban aplicando directamente en el código, sin un **sistema de control de versiones** que permita volver atrás si algo sale mal.

**Recomendación:**

- Utiliza **Git** u otro sistema de control de versiones.
- Separa tus cambios en **ramas (branches)** o en **commits** con descripciones claras.
- Si un cambio introduce un error, retroceder a un estado previo será mucho más sencillo.

---

## 3. Falta de Claridad en la Estructura de los Prompts

**Error:**
Los prompts no siempre especificaban con exactitud dónde o cómo se querían los cambios, generando confusión sobre lo que ya existía y lo que se debía modificar.

**Recomendación:**

- Al redactar un prompt, sé **muy específico**.
- Estructura la solicitud en formato de lista con **ubicaciones**, **estilos** y **funcionalidades** claras.

---

## 4. Mezcla de Diseño y Funcionalidad

**Error:**
Al solicitar cambios de diseño y de lógica en un mismo prompt, se “ensucia” el proceso y se corre el riesgo de confundir los objetivos.

**Recomendación:**

- **Separa** las peticiones:
  - “Cambios de diseño” (CSS)
  - “Cambios de funcionalidad” (JavaScript)
- Esto facilita el entendimiento y mantiene el código más ordenado.

---

## 5. Ausencia de una Arquitectura Definida

**Error:**
Se integraron funciones y componentes nuevos sobre la marcha sin un plan para organizar el proyecto (estructura de carpetas, metodología, etc.).

**Recomendación:**

- Define una **estructura de archivos** al inicio (por ejemplo, `index.html`, `css/`, `js/`, `assets/`).
- Considera el uso de **frameworks** de diseño (Bootstrap, Tailwind) o la adopción de **patrones de arquitectura** si el proyecto es más complejo.

---

## 6. Repetición de Información en Cada Prompt

**Error:**
En cada nueva petición se repetía el mismo contenido, en lugar de referenciar las partes del código que debían actualizarse.

**Recomendación:**

- Indica con precisión qué línea o sección del código requiere cambios.
- Describe qué **ya existe** y debe mantenerse, y qué hay que **añadir o sobrescribir**.

---

## Estilo de Prompt Recomendado

Para evitar confusiones, un **formato útil** para redactar prompts podría ser:

1. **Objetivo:** Explica lo que deseas lograr.
2. **Contexto Actual:** Resume cómo está organizado el proyecto.
3. **Requerimientos de Diseño:** Colores, fuentes, tamaños, ubicación de elementos, etc.
4. **Requerimientos de Funcionalidad:** Validaciones, botones, acciones, etc.
5. **Ejemplo de Uso o Resultado Esperado:** Aporta claridad sobre lo que se desea.
6. **Recursos o Limitaciones (opcional):** Indica librerías, frameworks o compatibilidad a tener en cuenta.

---

## Conclusión

La principal **clave** para reducir errores y confusiones en la construcción de un proyecto es la **planificación inicial** y la **claridad** en los requerimientos. Un sistema de control de versiones como Git, la separación de responsabilidades (diseño vs. funcionalidad) y una **comunicación detallada** a través de prompts bien estructurados permiten mantener un proyecto ordenado y **facilitar futuros cambios**.
