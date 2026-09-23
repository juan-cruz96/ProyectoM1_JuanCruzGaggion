# Documentación del uso de inteligencia artificial

**Proyecto:** Colorfly Studio — Generador de paletas de colores  
**Estudiante:** Juan Cruz Gaggion  
**Herramienta:** ChatGPT (OpenAI)  
**Contexto:** Challenge Módulo 1 — Full Stack

## Alcance de este documento

Utilicé ChatGPT como asistencia durante el desarrollo de mi primera aplicación web interactiva: para aprender conceptos, recibir propuestas de código, corregir errores y revisar la experiencia de usuario y la documentación. La aplicación está desarrollada con HTML, CSS y JavaScript sin frameworks.

---

## Consulta 01 — Generación aleatoria de colores

### Objetivo

Comprender cómo obtener números enteros aleatorios y revisar los rangos utilizados para crear un color HSL.

### Prompt de revisión

Estoy implementando una función de JavaScript para generar colores aleatorios en una aplicación de paletas.
Quiero comprender cómo utilizar Math.random() y Math.floor() para obtener valores enteros dentro de un rango determinado.
¿Podés explicarme la diferencia entre ambos métodos y cómo aplicarlos para generar los componentes de un color HSL?
También me gustaría que revises si los rangos de tono, saturación y luminosidad que utilizo son válidos y si existe alguna consideración visual que debería tener en cuenta.

### Respuesta de ChatGPT — síntesis elaborada para esta documentación

`Math.random()` devuelve un número mayor o igual a `0` y menor que `1`. `Math.floor()` redondea hacia abajo. Al multiplicar por la cantidad de valores posibles y aplicar `Math.floor()`, obtenemos un entero en el rango buscado:

```javascript
Math.floor(Math.random() * 360); // 0 a 359
Math.floor(Math.random() * 101); // 0 a 100
```

En Colorfly Studio, la función devuelve un objeto con los componentes:

```javascript
function generarColorHsl() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 101);
  const l = Math.floor(Math.random() * 101);

  return { h: h, s: s, l: l };
}
```

Los rangos son válidos para CSS. Como saturación y luminosidad pueden valer `0` o `100`, a veces se generan grises, negros, blancos o colores muy claros: es un resultado esperable del rango elegido, no necesariamente un error.

### Aplicación y aprendizaje

Apliqué estos métodos en la generación de HSL y entendí por qué se utiliza `360` para obtener tonos entre `0` y `359`, y `101` para obtener porcentajes entre `0` y `100` inclusive.

### Capturas
![Respuesta del prompt 1](<./capturas/promt 1.png>)
![Respuesta del prompt 1](<./capturas/promt 1.1.png>)
---

## Consulta 02 — Actualización de las tiras mediante el DOM

### Objetivo

Revisar cómo modificar el fondo y el código de cada tira sin confundir una colección de elementos con un elemento individual.

### Prompt de revisión

Mi aplicación contiene nueve tiras de colores definidas en HTML y necesito actualizar sus fondos y códigos mediante JavaScript.
Estoy utilizando querySelectorAll() y forEach() para recorrer los elementos, pero quiero asegurarme de comprender cómo funcionan.

¿Podés revisar mi implementación y explicarme la diferencia entre seleccionar una colección de elementos y trabajar con cada elemento individual dentro del recorrido?
También quiero entender cómo utilizar querySelector() dentro de cada tira para actualizar su código sin modificar accidentalmente los códigos de las demás.

### Respuesta de ChatGPT — síntesis elaborada para esta documentación

`document.querySelectorAll(".tira-color")` devuelve una colección (`NodeList`) de las tiras. Dentro de `forEach`, el parámetro `tira` representa **una sola** de ellas. Por eso no corresponde usar `tiras.style` ni `tiras.querySelector()` para modificar cada elemento.

```javascript
const tiras = document.querySelectorAll(".tira-color");

tiras.forEach(function (tira) {
  const codigo = tira.querySelector(".color-code");
  const color = "#DAE251"; // ejemplo

  tira.style.backgroundColor = color;
  codigo.textContent = color;
});
```

Buscar `.color-code` **dentro de `tira`** permite actualizar el texto correcto sin tocar el de otra tira. El segundo parámetro de `forEach`, `index`, sirve para relacionar la tira grande con su equivalente en la paleta pequeña.

### Aplicación y aprendizaje

Corregí el error de confundir `tiras` y `tira` y logré actualizar individualmente los fondos y los códigos. La versión actual muestra u oculta nueve tiras ya declaradas en HTML; no crea un número variable de tiras desde cero.

### Capturas
![Respuesta del prompt 2](<./capturas/promt 2.png>)
![Respuesta del prompt 2](<./capturas/promt 2.2.png>)
![Respuesta del prompt 2](<./capturas/promt 2.3.png>)
---

## Consulta 03 — Conversión HSL → RGB → HEX

### Objetivo

Comprender por qué ambos formatos deben provenir del mismo color y revisar la conversión implementada.

### Prompt de revisión

En Colorfly Studio quiero permitir que el usuario visualice una misma paleta en formato HSL o HEX.
Actualmente genero colores aleatorios en HSL y utilizo una función para convertirlos a HEX.
¿Podés revisar esta decisión técnica y explicarme por qué es conveniente generar un único color y obtener sus diferentes representaciones a partir de los mismos valores?

También necesito comprender el proceso de conversión HSL → RGB → HEX, incluyendo la normalización de los valores, la conversión a hexadecimal y el uso de padStart().
Me interesa entender la lógica de la función para poder explicar su funcionamiento.

### Respuesta de ChatGPT — síntesis elaborada para esta documentación

Si generáramos HSL y HEX por separado, podrían representar colores diferentes. Por eso la aplicación crea un único HSL, lo utiliza para pintar el fondo y calcula su HEX equivalente para mostrarlo cuando el usuario cambia de formato.

La conversión se puede entender en tres etapas:

1. Normalizar `s` y `l` dividiéndolos por `100` y calcular los componentes intermedios a partir del tono.
2. Obtener los canales rojo, verde y azul (RGB), ajustados a enteros entre `0` y `255`.
3. Convertir cada canal a base 16 y unirlos en una cadena `#RRGGBB`.

```javascript
function convertirAHex(numero) {
  return numero.toString(16).padStart(2, "0");
}
```

`toString(16)` representa un número en hexadecimal y `padStart(2, "0")` agrega el cero inicial cuando hace falta (`10` → `"0a"`). Los atributos `tira.dataset.hex` y `tira.dataset.hsl` conservan ambas representaciones para que el cambio de formato no regenere la paleta. Puede haber diferencias de redondeo al expresar HSL en canales HEX de 8 bits, pero ambos corresponden al mismo color dentro de esa precisión.

### Aplicación y aprendizaje

Implementé la función `convertirHslAHex()` y entendí para qué sirven los pasos de normalización, conversión de canales y representación hexadecimal.

### Capturas
![Respuesta del prompt 3](<./capturas/promt 3.png>)
![Respuesta del prompt 3](<./capturas/promt 3.1.png>)
![Respuesta del prompt 3](<./capturas/promt 3.3.png>)
---

## Consulta 04 — Bloqueo individual de colores

### Objetivo

Comprender cómo conservar el estado y los valores de una tira cuando se genera una nueva paleta.

### Prompt de revisión

Quiero revisar la funcionalidad de bloqueo individual de colores que implementé en mi aplicación.

Estoy utilizando un array de valores booleanos para registrar qué tiras están bloqueadas y atributos data-* para conservar sus representaciones HEX y HSL.
¿Podés explicarme cómo se relacionan estos datos y revisar si la lógica permite conservar correctamente el color bloqueado cuando se genera una nueva paleta?

También quiero comprender el uso de addEventListener(), el operador de negación lógica y stopPropagation() para evitar que al presionar un candado se ejecute accidentalmente la función de copiar el código.

### Respuesta de ChatGPT — síntesis elaborada para esta documentación

El array `coloresBloqueados` registra el estado de cada posición (`true` = bloqueado; `false` = desbloqueado). La expresión siguiente invierte el valor actual:

```javascript
coloresBloqueados[index] = !coloresBloqueados[index];
```

Al generar la paleta, la condición evita actualizar el fondo, el código HEX, el código HSL y el color de la miniatura cuando la tira está bloqueada:

```javascript
if (!coloresBloqueados[index]) {
  // Generar y guardar un color nuevo para esta tira.
}
```

El botón del candado está contenido dentro del `<li>` que también escucha clics para copiar. `event.stopPropagation()` impide que pulsar el candado dispare ese evento del contenedor. Los íconos SVG indican visualmente el estado abierto o cerrado y el `aria-label` describe la acción disponible.

### Aplicación y aprendizaje

Incorporé candados individuales, mantuve sincronizadas la paleta grande y la pequeña y comprendí el uso de booleanos, eventos y propagación de clics. Al reducir la cantidad de colores, los estados de las tiras ocultas permanecen en el array hasta que vuelvan a mostrarse.

### Capturas
![Respuesta del prompt 4](<./capturas/promt 4.png>)
![Respuesta del prompt 4](<./capturas/promt 4.1.png>)
![Respuesta del prompt 4](<./capturas/promt 4.2.png>)

---

## Consulta 05 — Notificaciones y validación del formulario

### Objetivo

Revisar los mensajes de error y confirmación sin recurrir a ventanas bloqueantes del navegador.

### Prompt de revisión

Estoy revisando la experiencia de usuario de Colorfly Studio.
Actualmente utilizo un formulario con controles de selección para elegir el formato y la cantidad de colores, y una función mostrarToast() para presentar notificaciones.

¿Podés analizar cómo mejorar los mensajes de validación cuando falta seleccionar una opción y cómo reutilizar el mismo sistema para confirmar la copia de un código al portapapeles?
Busco una solución sencilla, visualmente coherente con mi interfaz y que no interrumpa la navegación mediante ventanas de alerta.

### Respuesta de ChatGPT — síntesis elaborada para esta documentación

En lugar de un `alert()`, el mismo elemento de notificación puede mostrar distintos mensajes. Antes de generar una paleta se verifica si hay un radio seleccionado en cada grupo; si falta alguno, se muestra un aviso específico y se detiene esa generación con `return`.

```javascript
if (!formatoSeleccionado) {
  mostrarToast("Seleccioná un formato de color.", "error");
  return;
}

if (!cantidadSeleccionada) {
  mostrarToast("Seleccioná la cantidad de colores.", "error");
  return;
}
```

Para el copiado, conviene confirmar el éxito *después* de que se resuelva la promesa de `navigator.clipboard.writeText()` y contemplar un mensaje de error si falla:

```javascript
navigator.clipboard.writeText(codigo.textContent)
  .then(function () {
    mostrarToast("¡Color copiado!", "success");
  })
  .catch(function () {
    mostrarToast("No se pudo copiar el color.", "error");
  });
```

**Nota de revisión:** el `.catch()` es una sugerencia de mejora; no aparece en la última versión de `app.js` compartida para esta documentación.

### Aplicación y aprendizaje

Reemplacé el `alert()` por un toast reutilizable con variantes visuales de éxito y error, y separé la validación del formato de la validación de cantidad. Aprendí a utilizar `classList`, `setTimeout()` y `.then()`.

### Capturas
![Respuesta del prompt 5](<./capturas/promt 5.png>)
![Respuesta del prompt 5](<./capturas/promt 5.1.png>)

---

## Consulta 06 — Revisión final y mejoras futuras

### Objetivo

Distinguir los requisitos de funcionamiento de las mejoras que podrían quedar para una segunda versión.

### Prompt de revisión

Terminé la primera versión de Colorfly Studio y quiero realizar una revisión técnica antes de entregar el proyecto.
Voy a compartir mi HTML, CSS y JavaScript completos.

Necesito que analices si las funcionalidades cumplen con los requisitos del challenge y que identifiques posibles errores, limitaciones y oportunidades de mejora.

Me interesa especialmente revisar la generación de colores, los selectores de cantidad y formato, el bloqueo individual, la accesibilidad básica y la organización del código.
Como es mi primer proyecto, prefiero que distingas los problemas que afectan realmente el funcionamiento de aquellas mejoras que podrían dejarse para una versión futura.

No quiero reestructurar toda la aplicación: busco comprender mis decisiones técnicas y documentar las limitaciones de la versión actual.

### Respuesta de ChatGPT — síntesis elaborada para esta documentación

La revisión del código compartido identifica funcionalidades implementadas: generación aleatoria, cambio de formato sin regenerar, cambio de cantidad, bloqueo individual, sincronización con la paleta reducida, copiado de códigos y notificaciones. **La revisión del código no sustituye una prueba de funcionamiento en el navegador y en GitHub Pages.**

Hay oportunidades de mejora que no impiden necesariamente usar la app en el alcance actual:

- Las nueve tiras ya existen en HTML: la app cambia su visibilidad y el ancho de la grilla, pero no crea y elimina tiras dinámicamente. La interpretación de «render dinámico» depende de cómo lo evalúe la consigna.
- La generación recorre también las tiras ocultas, aunque la interfaz solo muestre la cantidad elegida.
- El ancho fijo de las columnas y `zoom: 90%` pueden dificultar la visualización en algunas pantallas.
- Los códigos HSL son extensos; conviene revisar su legibilidad y el tamaño de texto.
- El manejo de errores del portapapeles y los avisos accesibles se pueden ampliar.

Es razonable documentar estas limitaciones como mejoras futuras, siempre que la entrega describa con precisión lo que sí hace la versión actual.

### Aplicación y aprendizaje

Decidí mantener una implementación sencilla en esta primera versión y documentar posibles mejoras, entre ellas una grilla creada íntegramente desde JavaScript, adaptación a más tamaños de pantalla, un ajuste de accesibilidad y guardado de paletas. La idea de `localStorage` se investigó, pero no se incorporó a la versión entregada.

### Capturas
![Respuesta del prompt 6](<./capturas/promt 6.png>)
![Respuesta del prompt 6](<./capturas/promt 6.1.png>)

---

## Balance del uso de IA

La IA me ayudó tanto a aprender como a producir partes del código: brindó explicaciones, ejemplos, propuestas de implementación y correcciones que fui probando en la aplicación. La conversación se desarrolló por etapas: desde la estructura inicial hasta las interacciones y la documentación. Esta asistencia no reemplaza la necesidad de comprobar que cada funcionalidad trabaja correctamente ni de poder explicar las decisiones de mi proyecto.
