
const formulario = document.querySelector("#formularioPaleta");
const tiras = document.querySelectorAll(".tira-color");
const listaColores = document.querySelector("#listaColores");
const coloresChiquitos = document.querySelectorAll(".paleta-chiquita span");
const paletaChiquita = document.querySelector(".paleta-chiquita");
const toast = document.querySelector("#toast");

// ARRAY PARA GUARDAR LOS BLOQUEOS

let coloresBloqueados = [];

// ICONOS DE LOS CANDADOS

const iconoCerrado = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
`;

const iconoAbierto = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
`;

// CREAR LOS BOTONES DE BLOQUEO

tiras.forEach(function (tira, index) {

  coloresBloqueados[index] = false;

  const botonBloquear = document.createElement("button");

  botonBloquear.type = "button";
  botonBloquear.classList.add("boton-bloquear");
  botonBloquear.innerHTML = iconoAbierto;
  botonBloquear.setAttribute("aria-label", "Bloquear color");

  botonBloquear.addEventListener("click", function (event) {

    event.stopPropagation();

    coloresBloqueados[index] = !coloresBloqueados[index];

    if (coloresBloqueados[index]) {

      botonBloquear.innerHTML = iconoCerrado;
      botonBloquear.setAttribute("aria-label", "Desbloquear color");

    } else {

      botonBloquear.innerHTML = iconoAbierto;
      botonBloquear.setAttribute("aria-label", "Bloquear color");

    }

  });

  tira.appendChild(botonBloquear);

});

// GENERAR COLOR HSL

function generarColorHsl() {

  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 101);
  const l = Math.floor(Math.random() * 101);

  return {
    h: h,
    s: s,
    l: l
  };

}

// CONVERTIR HSL A HEX

function convertirHslAHex(h, s, l) {

  s = s / 100;
  l = l / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));

  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  const m = l - c / 2;

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  function convertirAHex(numero) {

    return numero.toString(16).padStart(2, "0");

  }

  return (
    "#" +
    convertirAHex(r) +
    convertirAHex(g) +
    convertirAHex(b)
  ).toUpperCase();

}

// GENERAR PALETA

formulario.addEventListener("submit", function (event) {

  event.preventDefault();

  const cantidadSeleccionada = document.querySelector(
    'input[name="color-cantidad"]:checked'
  );

  const cantidad = Number(cantidadSeleccionada.value);

  const formatoSeleccionado = document.querySelector(
    'input[name="formato-color"]:checked'
  );

  const formato = formatoSeleccionado.value;

  tiras.forEach(function (tira, index) {

    // GENERAR UN NUEVO COLOR SOLO SI NO ESTA BLOQUEADO

    if (!coloresBloqueados[index]) {

      const hsl = generarColorHsl();

      const hex = convertirHslAHex(
        hsl.h,
        hsl.s,
        hsl.l
      );

      const colorHsl =
        `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

      // GUARDAR LOS DOS FORMATOS

      tira.dataset.hex = hex;
      tira.dataset.hsl = colorHsl;

      // ACTUALIZAR LOS FONDOS

      tira.style.backgroundColor = colorHsl;

      coloresChiquitos[index].style.backgroundColor = colorHsl;

    }

    // MOSTRAR EL CODIGO EN EL FORMATO SELECCIONADO

    const codigo = tira.querySelector(".color-code");

    if (formato === "hex") {

      codigo.textContent = tira.dataset.hex;

    } else {

      codigo.textContent = tira.dataset.hsl;

    }

    // MOSTRAR LA CANTIDAD DE COLORES SELECCIONADA

    if (index < cantidad) {

      tira.style.display = "block";

      coloresChiquitos[index].style.display = "block";

    } else {

      tira.style.display = "none";

      coloresChiquitos[index].style.display = "none";

    }

  });

  // AJUSTAR LAS COLUMNAS DE AMBAS PALETAS

  listaColores.style.gridTemplateColumns =
    `repeat(${cantidad}, 1fr)`;

  paletaChiquita.style.gridTemplateColumns =
    `repeat(${cantidad}, 1fr)`;

});

// CAMBIAR ENTRE HEX Y HSL SIN GENERAR COLORES NUEVOS

const opcionesFormato = document.querySelectorAll(
  'input[name="formato-color"]'
);

opcionesFormato.forEach(function (opcion) {

  opcion.addEventListener("change", function () {

    tiras.forEach(function (tira) {

      const codigo = tira.querySelector(".color-code");

      if (opcion.value === "hex") {

        codigo.textContent = tira.dataset.hex;

      } else {

        codigo.textContent = tira.dataset.hsl;

      }

    });

  });

});

// CAMBIAR ENTRE 6, 8 Y 9 COLORES

const opcionesCantidad = document.querySelectorAll(
  'input[name="color-cantidad"]'
);

opcionesCantidad.forEach(function (opcion) {

  opcion.addEventListener("change", function () {

    const cantidad = Number(opcion.value);

    tiras.forEach(function (tira, index) {

      if (index < cantidad) {

        tira.style.display = "block";

        coloresChiquitos[index].style.display = "block";

      } else {

        tira.style.display = "none";

        coloresChiquitos[index].style.display = "none";

      }

    });

    listaColores.style.gridTemplateColumns =
      `repeat(${cantidad}, 1fr)`;

    paletaChiquita.style.gridTemplateColumns =
      `repeat(${cantidad}, 1fr)`;

  });

});

// COPIAR EL CODIGO DEL COLOR

let temporizadorToast;

tiras.forEach(function (tira) {

  tira.addEventListener("click", function () {

    const codigo = tira.querySelector(".color-code");

    navigator.clipboard.writeText(codigo.textContent)
      .then(function () {

        toast.classList.add("visible");

        clearTimeout(temporizadorToast);

        temporizadorToast = setTimeout(function () {

          toast.classList.remove("visible");

        }, 2000);

      });

  });

});

// GENERAR UNA PALETA INICIAL AL CARGAR LA PAGINA

formulario.requestSubmit();