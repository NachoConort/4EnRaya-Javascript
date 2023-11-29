const columnas = document.querySelectorAll(".columna");

let turno = 0;

for(let i = 0; i < columnas.length; i++) {
  columnas[i].setAttribute("id", "" + (i+1));
}

columnas.forEach(columna => {
  columna.addEventListener("click", () => {
    const celdas = document.querySelectorAll(".c" + columna.id);
    let ficha = crearFicha();
    let fichaNueva = document.getElementsByClassName("ficha");
    celdas.forEach(celda => {
      if(!celda.hasChildNodes()) {
        celda.appendChild(ficha)
      }
    })
    turno++;
  });
})

function crearFicha () {
  const ficha = document.createElement("div");
  ficha.style.width = "80px";
  ficha.style.height = "80px";
  ficha.style.borderRadius = "50%";
  ficha.classList.add("ficha");
  if (turno % 2 === 0) {
    ficha.style.backgroundColor = "#ffff66";
  } else {
    ficha.style.backgroundColor = "#ff3333";
  };
  return ficha;
}
