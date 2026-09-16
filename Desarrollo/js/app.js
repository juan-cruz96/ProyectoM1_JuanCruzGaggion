const formulario = document.querySelector("#formularioPaleta");
const tiras = document.querySelectorAll(".tira-color");
const listaColores = document.querySelector("#listaColores");
const coloresChiquitos = document.querySelectorAll(".paleta-chiquita span");
const paletaChiquita = document.querySelector(".paleta-chiquita");


function generarColorHex() {

  const caracteres = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 16);
    color += caracteres[numeroAleatorio];
  }
  return color;
}

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

  if (index < cantidad) {

    tira.style.display = "block";

    const hsl = generarColorHsl();

    const hex = convertirHslAHex(
      hsl.h,
      hsl.s,
      hsl.l
    );

    const colorHsl =
      `HSL(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

    tira.style.backgroundColor = colorHsl;

    coloresChiquitos[index].style.backgroundColor = colorHsl;

    coloresChiquitos[index].style.display = "block";

    const codigo = tira.querySelector(".color-code");

    if (formato === "hex") {

      codigo.textContent = hex;

    } else {

      codigo.textContent = colorHsl;

    }

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