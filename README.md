
# Colorfly Studio 

## Generador de paletas de colores

Colorfly Studio es una aplicación web estática e interactiva que permite generar paletas de colores aleatorias, seleccionar su tamaño y visualizar sus códigos en formato HEX o HSL.

El proyecto fue desarrollado como parte del Challenge del Módulo 1 de Full Stack JavaScript, utilizando HTML, CSS y JavaScript puro.

La aplicación permite explorar diferentes combinaciones de colores, bloquear los que se desean conservar y copiar sus códigos para utilizarlos en otros proyectos.

---

## Demo


---

## Funcionalidades

- Generación de paletas de 6, 8 o 9 colores aleatorios.
- Selección del formato de visualización HEX o HSL.
- Conversión de colores HSL a HEX.
- Cambio dinámico entre formatos sin modificar los colores generados.
- Cambio de cantidad de colores sin necesidad de generar una nueva paleta.
- Bloqueo individual de colores mediante botones con íconos SVG.
- Conservación de los colores bloqueados al generar una nueva paleta.
- Copia de códigos de color al portapapeles.
- Notificación visual al copiar un color.
- Representación secundaria de la paleta en formato reducido.
- Transiciones suaves durante los cambios de color.

---

## Tecnologías utilizadas

| Tecnología | Utilización |
|---|---|
| HTML5 | Estructura y contenido de la aplicación. |
| CSS3 | Diseño visual, distribución de elementos y animaciones. |
| JavaScript | Generación de colores, eventos y manipulación del DOM. |
| Git | Control de versiones del proyecto. |
| GitHub | Alojamiento del código fuente. |
| GitHub Pages | Publicación de la aplicación web. |

El proyecto se desarrolló sin utilizar frameworks de JavaScript.

---

## Instrucciones de uso

### 1. Seleccionar el formato

Elegir el formato en el que se desean visualizar los códigos de color:

- **HEX:** representación hexadecimal, por ejemplo `#DAE251`.
- **HSL:** representación mediante tono, saturación y luminosidad, por ejemplo `hsl(64, 70%, 60%)`.

### 2. Seleccionar la cantidad de colores

Elegir entre las siguientes opciones:

- 6 colores.
- 8 colores.
- 9 colores.

### 3. Generar una paleta

Presionar el botón **Generar paleta**.

La aplicación generará una combinación aleatoria y mostrará cada color junto con su código correspondiente.

### 4. Bloquear colores

Presionar el candado ubicado en la parte superior de una tira para bloquear ese color.

Al generar una nueva paleta, los colores bloqueados permanecerán sin modificaciones, mientras que los desbloqueados recibirán nuevos valores aleatorios.

Para desbloquear un color, volver a presionar su candado.

### 5. Copiar un código

Hacer clic sobre una tira de color para copiar su código al portapapeles.

La aplicación mostrará una notificación visual confirmando que el código fue copiado.

---

## Decisiones técnicas

### Generación de colores

La aplicación genera colores aleatorios en formato HSL mediante la función `generarColorHsl()`.

Cada color contiene tres valores:

- **H (Hue):** tono del color.
- **S (Saturation):** saturación del color.
- **L (Lightness):** luminosidad del color.

Los valores se generan utilizando `Math.random()` y `Math.floor()`.

Para obtener la representación hexadecimal, se utiliza la función `convertirHslAHex()`, que realiza la conversión de HSL a RGB y posteriormente a HEX.

Esto permite que ambos formatos representen el mismo color y que el usuario pueda alternar entre ellos sin modificar la combinación generada.

### Renderizado dinámico

La aplicación utiliza JavaScript para modificar los elementos HTML mediante el DOM.

Se dispone de nueve tiras de colores en el documento HTML.

Según la cantidad seleccionada por el usuario, JavaScript muestra u oculta las tiras correspondientes y actualiza la distribución de columnas mediante CSS Grid.

La paleta secundaria utiliza los mismos colores que la principal, manteniendo ambas representaciones sincronizadas.

### Almacenamiento de los formatos

Cada tira almacena sus códigos HEX y HSL mediante atributos `data-*` del HTML.

Esto permite recuperar los valores de cada color sin necesidad de volver a generarlos.

De esta manera, el usuario puede cambiar el formato de visualización sin modificar los colores de la paleta.

### Bloqueo de colores

Se utiliza un array llamado `coloresBloqueados` para registrar el estado de cada tira.

Cada posición del array contiene un valor booleano:

- `true`: el color está bloqueado.
- `false`: el color está desbloqueado.

Cuando se genera una nueva paleta, JavaScript verifica el estado de cada tira.

Si el color está desbloqueado, genera uno nuevo. Si está bloqueado, conserva los valores anteriores.

Los botones de bloqueo se crean dinámicamente mediante JavaScript y utilizan íconos SVG para representar sus diferentes estados.

### Interacción y accesibilidad

La interfaz utiliza elementos HTML semánticos como `header`, `main`, `section`, `form`, `fieldset`, `legend` y `button`.

Los controles permiten seleccionar la cantidad de colores y el formato de visualización.

Se incorporaron etiquetas descriptivas en los botones de bloqueo, estilos de foco visible y notificaciones visuales para proporcionar información sobre las acciones realizadas.

También se utilizaron transiciones CSS para suavizar los cambios de color.

---

## Cómo ejecutar el proyecto localmente

### Requisitos

- Un navegador web actualizado.
- Visual Studio Code (opcional).
- Extensión Live Server de Visual Studio Code (opcional).

No es necesario instalar dependencias ni configurar una base de datos.

### Instalación

**1. Clonar el repositorio**

Abrir una terminal y ejecutar:

```bash
git clone https://github.com/juan-cruz96/ProyectoM1_JuanCruzGaggion.git
```

**2. Abrir el proyecto**

Ingresar a la carpeta descargada y abrirla en Visual Studio Code.

**3. Ejecutar la aplicación**

Abrir el archivo `index.html` en el navegador.

También se puede utilizar la extensión Live Server para ejecutar el proyecto mediante un servidor local.

---

## Despliegue en GitHub Pages

Para publicar la aplicación:

1. Subir los archivos del proyecto a un repositorio de GitHub.
2. Ingresar a la sección **Settings** del repositorio.
3. Seleccionar **Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Elegir la rama `main` y la carpeta `/ (root)`.
6. Guardar los cambios.
7. Esperar a que GitHub Pages publique la aplicación.
8. Acceder al enlace generado y comprobar su funcionamiento.

---

## Estructura del proyecto

```text
ProyectoM1_JuanCruzGaggion/
│
├── index.html
│
├── Desarrollo/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── fonts/
│
├── Documentacion/
│   ├── capturas/
│   └── uso-ia/
│
└── README.md
```

---

## Capturas de pantalla

Las capturas del funcionamiento de la aplicación se encuentran en la carpeta `Documentacion/capturas`.

Incluyen evidencia de:

- Generación de paletas de 6, 8 y 9 colores.
- Visualización de códigos HEX y HSL.
- Bloqueo individual de colores.
- Copia de códigos y notificación de confirmación.

---

## Uso de inteligencia artificial

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de apoyo para comprender conceptos de JavaScript, resolver errores y estudiar diferentes alternativas de implementación.

La asistencia incluyó explicaciones sobre manipulación del DOM, manejo de eventos, generación aleatoria de colores, conversión entre formatos y desarrollo de funcionalidades interactivas.

Los prompts utilizados y sus resultados se documentan en la carpeta `Documentacion/uso-ia`.

---

## Autor

**Juan Cruz Gaggion**

Challenge Módulo 1 — Full Stack JavaScript.