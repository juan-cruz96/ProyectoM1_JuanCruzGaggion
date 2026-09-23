
# Colorfly Studio

## Generador de paletas de colores

Colorfly Studio es una aplicación web estática e interactiva que permite generar paletas de colores aleatorias, seleccionar su tamaño y visualizar sus códigos en formato HEX o HSL.

El proyecto fue desarrollado como parte del Challenge del Módulo 1 de Full Stack JavaScript, utilizando HTML, CSS y JavaScript puro.

La aplicación permite explorar diferentes combinaciones de colores, bloquear aquellos que se desean conservar y copiar sus códigos para utilizarlos en proyectos de diseño y desarrollo web.

---

## 1. Demo y repositorio

**[Ver aplicación en GitHub Pages](https://juan-cruz96.github.io/ProyectoM1_JuanCruzGaggion/)**

**[Ver repositorio en GitHub](https://github.com/juan-cruz96/ProyectoM1_JuanCruzGaggion)**

---

## 2. Funcionalidades

La aplicación permite realizar las siguientes acciones:

- Generar paletas de 6, 8 o 9 colores aleatorios.
- Seleccionar el formato de visualización HEX o HSL.
- Convertir los colores generados en HSL a formato HEX.
- Cambiar entre ambos formatos sin modificar los colores de la paleta.
- Modificar la cantidad de colores sin necesidad de generar una nueva combinación.
- Bloquear individualmente los colores que se desean conservar.
- Generar nuevas paletas manteniendo los colores bloqueados.
- Desbloquear colores para permitir que vuelvan a cambiar.
- Copiar los códigos de color al portapapeles.
- Visualizar notificaciones de confirmación o error.
- Visualizar una representación secundaria de la paleta en formato reducido.
- Disfrutar de transiciones suaves durante los cambios de color.

---

## 3. Tecnologías utilizadas

| Tecnología | Utilización |
|---|---|
| HTML5 | Estructura y contenido de la aplicación. |
| CSS3 | Diseño visual, distribución de elementos y transiciones. |
| JavaScript | Generación de colores, manejo de eventos y manipulación del DOM. |
| Git | Control de versiones del proyecto. |
| GitHub | Alojamiento del código fuente. |
| GitHub Pages | Publicación y despliegue de la aplicación. |

El proyecto fue desarrollado sin utilizar frameworks de JavaScript.

---

## 4. Instrucciones de uso

### 4.1. Seleccionar el formato

Elegir el formato en el que se desean visualizar los códigos de color:

- **HEX:** representación hexadecimal, por ejemplo `#DAE251`.
- **HSL:** representación mediante tono, saturación y luminosidad, por ejemplo `hsl(64, 70%, 60%)`.

El formato puede modificarse después de generar una paleta sin alterar los colores existentes.

### 4.2. Seleccionar la cantidad de colores

Elegir entre las siguientes opciones:

- 6 colores.
- 8 colores.
- 9 colores.

La aplicación adapta la cantidad de tiras visibles y su distribución según la opción seleccionada.

### 4.3. Generar una paleta

Presionar el botón **Generar paleta**.

La aplicación generará una combinación aleatoria de colores y mostrará cada uno junto con su código correspondiente.

Para generar otra combinación, volver a presionar el botón.

### 4.4. Bloquear colores

Presionar el candado ubicado en la parte superior de una tira para bloquear ese color.

Al generar una nueva paleta, los colores bloqueados permanecerán sin modificaciones, mientras que los desbloqueados recibirán nuevos valores aleatorios.

Para desbloquear un color, volver a presionar su candado.

### 4.5. Copiar un código

Hacer clic sobre una tira de color para copiar su código al portapapeles.

La aplicación mostrará una notificación visual confirmando que el código fue copiado.

### 4.6. Mensajes de validación

Para generar una paleta, es necesario seleccionar un formato y una cantidad de colores.

Si falta alguna de estas opciones, la aplicación mostrará una notificación indicando qué selección debe realizar el usuario.

---

## 5. Cómo ejecutar el proyecto localmente

### Requisitos

Para ejecutar Colorfly Studio se necesita:

- Un navegador web actualizado.
- Visual Studio Code (opcional).
- La extensión Live Server de Visual Studio Code (opcional).

No es necesario instalar dependencias, ejecutar un backend ni configurar una base de datos.

### Paso 1. Descargar el proyecto

Ingresar al repositorio de GitHub:

https://github.com/juan-cruz96/ProyectoM1_JuanCruzGaggion

Seleccionar **Code → Download ZIP** y descomprimir el archivo.

También se puede clonar el repositorio utilizando Git:

```bash
git clone https://github.com/juan-cruz96/ProyectoM1_JuanCruzGaggion.git
```

### Paso 2. Abrir el proyecto

Abrir la carpeta descargada en Visual Studio Code.

La carpeta principal contiene el archivo `index.html` y las carpetas correspondientes al desarrollo y la documentación.

### Paso 3. Ejecutar la aplicación

Abrir el archivo `index.html` en un navegador web.

También se puede utilizar Live Server:

1. Abrir `index.html` en Visual Studio Code.
2. Hacer clic derecho sobre el archivo.
3. Seleccionar **Open with Live Server**.
4. La aplicación se abrirá en el navegador.

Se recomienda utilizar Live Server para probar las funcionalidades relacionadas con el portapapeles.

---

## 6. Pasos para realizar el despliegue

La aplicación se publica mediante GitHub Pages, utilizando el repositorio de GitHub.

### Paso 1. Preparar el repositorio

Crear un repositorio en GitHub y agregar los archivos del proyecto.

### Paso 2. Inicializar Git

Desde la terminal, dentro de la carpeta principal del proyecto, ejecutar:

```bash
git init
```

Este comando inicializa un repositorio Git local para comenzar a registrar los cambios del proyecto.

### Paso 3. Registrar los archivos

Agregar los archivos al área de preparación:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "Estructura inicial del proyecto"
```

Los commits permiten conservar un historial de las modificaciones realizadas durante el desarrollo.

### Paso 4. Conectar el repositorio local con GitHub

Agregar la dirección del repositorio remoto:

```bash
git remote add origin https://github.com/juan-cruz96/ProyectoM1_JuanCruzGaggion.git
```

### Paso 5. Subir el proyecto

Establecer la rama principal y realizar la primera subida:

```bash
git branch -M main
git push -u origin main
```

Para subir modificaciones posteriores, se pueden utilizar los siguientes comandos:

```bash
git add .
git commit -m "Descripcion de los cambios"
git push
```

### Paso 6. Configurar GitHub Pages

1. Ingresar al repositorio en GitHub.
2. Abrir la sección **Settings**.
3. Seleccionar **Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Elegir la rama `main`.
6. Seleccionar la carpeta `/ (root)`.
7. Guardar la configuración.

### Paso 7. Verificar el despliegue

Esperar a que GitHub Pages finalice la publicación.

Abrir la dirección de la aplicación:

https://juan-cruz96.github.io/ProyectoM1_JuanCruzGaggion/

Comprobar que los archivos HTML, CSS y JavaScript se carguen correctamente y que las funcionalidades de la aplicación se encuentren operativas.

---

## 7. Decisiones técnicas

### 7.1. Generación de colores

La aplicación genera colores aleatorios en formato HSL mediante la función `generarColorHsl()`.

Cada color contiene tres valores:

- **H (Hue):** tono del color.
- **S (Saturation):** saturación del color.
- **L (Lightness):** luminosidad del color.

Los valores aleatorios se generan utilizando `Math.random()` y `Math.floor()`.

Para obtener la representación hexadecimal, se utiliza la función `convertirHslAHex()`, que realiza la conversión de HSL a RGB y posteriormente a HEX.

Se decidió generar inicialmente los colores en HSL y obtener su representación HEX a partir de los mismos valores.

De esta manera, ambas representaciones corresponden al mismo color y es posible alternar entre formatos sin generar una combinación diferente.

### 7.2. Renderizado de la paleta

La aplicación utiliza JavaScript para modificar los elementos HTML mediante el DOM.

Se dispone de nueve tiras de colores en el documento HTML.

Según la cantidad seleccionada por el usuario, JavaScript muestra u oculta las tiras correspondientes y actualiza la distribución de columnas mediante CSS Grid.

Esta solución permite utilizar la misma estructura HTML para representar paletas de diferentes tamaños.

La paleta secundaria utiliza los mismos colores que la principal, manteniendo ambas representaciones sincronizadas.

### 7.3. Almacenamiento de los formatos

Cada tira almacena sus códigos HEX y HSL mediante atributos `data-*` del HTML.

Esto permite recuperar los valores de cada color sin necesidad de volver a generarlos.

De esta manera, el usuario puede cambiar el formato de visualización sin modificar los colores de la paleta.

### 7.4. Bloqueo de colores

Se utiliza un array llamado `coloresBloqueados` para registrar el estado de cada tira.

Cada posición del array contiene un valor booleano:

- `true`: el color está bloqueado.
- `false`: el color está desbloqueado.

Cuando se genera una nueva paleta, JavaScript verifica el estado de cada tira.

Si el color está desbloqueado, genera uno nuevo. Si está bloqueado, conserva los valores anteriores.

Los botones de bloqueo se crean dinámicamente mediante JavaScript y utilizan íconos SVG para representar sus diferentes estados.

### 7.5. Interacción y experiencia de usuario

Se utilizaron controles de tipo radio para seleccionar el formato y la cantidad de colores.

Los controles se agruparon mediante `fieldset` y `legend`, y se personalizaron visualmente utilizando CSS.

Para brindar información sobre las acciones del usuario, se incorporó un sistema de notificaciones mediante una función llamada `mostrarToast()`.

La función permite mostrar mensajes de confirmación o error sin interrumpir la navegación mediante ventanas de alerta del navegador.

También se incorporaron transiciones CSS para suavizar los cambios de color.

### 7.6. Accesibilidad

Se utilizaron elementos HTML semánticos como `header`, `main`, `section`, `form`, `fieldset`, `legend` y `button`.

Los controles del formulario cuentan con etiquetas asociadas mediante elementos `label`.

Los botones de bloqueo incluyen atributos `aria-label` que permiten identificar su función y reflejar su estado.

También se incorporaron estilos de foco visible para facilitar la navegación mediante teclado.

---

## 8. Mejoras futuras

Durante el desarrollo se identificaron posibles mejoras que podrían incorporarse en futuras versiones de Colorfly Studio.

### Diseño responsive

Adaptar la distribución de la interfaz para mejorar su visualización en dispositivos móviles y pantallas de diferentes tamaños.

### Generación dinámica de elementos

Modificar el sistema de renderizado para que JavaScript cree las tiras de colores según la cantidad seleccionada, en lugar de utilizar nueve elementos previamente definidos en el HTML.

### Guardado de paletas

Incorporar una funcionalidad que permita guardar combinaciones de colores utilizando `localStorage`, para recuperarlas posteriormente desde el navegador.

### Exportación de paletas

Agregar la posibilidad de descargar una paleta generada como imagen o exportar sus códigos de color.

### Accesibilidad visual

Incorporar una función que ajuste automáticamente el contraste de los códigos según el color de fondo y mejorar la lectura de los códigos en pantallas pequeñas.

---

## 9. Documentación del uso de inteligencia artificial

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de asistencia y aprendizaje.

Se utilizó principalmente para:

- Comprender conceptos básicos de JavaScript.
- Estudiar la manipulación del DOM y el manejo de eventos.
- Comprender la generación aleatoria de colores.
- Implementar y analizar la conversión de HSL a HEX.
- Resolver errores durante el desarrollo.
- Incorporar funcionalidades adicionales, como el bloqueo de colores y las notificaciones.
- Revisar alternativas de implementación y mejorar los estilos visuales.

El uso de inteligencia artificial se documenta mediante capturas de los prompts utilizados y sus respuestas.

Las capturas y la descripción de las consultas se encuentran en:

`Documentacion/uso-ia/`

La documentación permite identificar cómo se utilizó la asistencia de IA durante las distintas etapas del proyecto.

---

## 10. Flujo de la aplicación

El funcionamiento principal de Colorfly Studio se documenta mediante capturas de pantalla.

El flujo de uso comprende las siguientes etapas:

1. Acceso a la aplicación.
2. Selección del formato y la cantidad de colores.
3. Generación de una paleta.
4. Cambio entre los formatos HEX y HSL.
5. Bloqueo individual de colores.
6. Generación de una nueva paleta conservando los colores bloqueados.
7. Copia de un código de color al portapapeles.

Las capturas correspondientes se encuentran en la carpeta:

`Documentacion/capturas/`

Estas imágenes permiten visualizar el funcionamiento de la aplicación y comprobar las principales interacciones implementadas.

---

## Autor

**Juan Cruz Gaggion**

Challenge Módulo 1 — Full Stack 2026