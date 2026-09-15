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


formulario.addEventListener("submit", function (event) {

  event.preventDefault();

  const cantidadSeleccionada = document.querySelector(
    'input[name="color-cantidad"]:checked'
  );

  const cantidad = Number(cantidadSeleccionada.value);

  tiras.forEach(function (tira, index) {

  if (index < cantidad) {

    tira.style.display = "block";

    const color = generarColorHex();

    tira.style.backgroundColor = color;

    coloresChiquitos[index].style.backgroundColor = color;

    coloresChiquitos[index].style.display = "block";

    const codigo = tira.querySelector(".color-code");

    codigo.textContent = color;

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