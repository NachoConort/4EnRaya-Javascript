const columnas = document.querySelectorAll(".columna");

let turno = 0;
let posicion = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for(let i = 0; i < columnas.length; i++) {
  columnas[i].setAttribute("id", "" + (i+1));
}

columnas.forEach(columna => {
  columna.addEventListener("click", () => {
    let todasLasCeldas = document.querySelectorAll(".celda");
    const celdas = document.querySelectorAll(".c" + columna.id);
    let ficha = crearFicha();
    for(let i = celdas.length -1; i >= 0; i--) {
      if(!celdas[i].hasChildNodes()) {
        celdas[i].appendChild(ficha);
        turno++;
        break;
      }
    };
    actualizarPosicion(todasLasCeldas);
    console.log(posicion);
    evaluacionPosicion();
  });
})

function crearFicha () {
  const ficha = document.createElement("div");
  ficha.style.width = "80px";
  ficha.style.height = "80px";
  ficha.style.borderRadius = "50%";
  ficha.style.animation = "caida linear 0.5s";
  if (turno % 2 === 0) {
    ficha.style.backgroundColor = "#ffff66";
    ficha.classList.add("a");
  } else {
    ficha.style.backgroundColor = "#ff3333";
    ficha.classList.add("r");
  };
  return ficha;
}

function actualizarPosicion(todasLasCeldas) {
  for(let i = 0; i < posicion.length; i++) {
    if (todasLasCeldas[i].hasChildNodes() && todasLasCeldas[i].firstElementChild.classList.contains("a")) {
      posicion[i] = 1;
    } else if (todasLasCeldas[i].hasChildNodes() && todasLasCeldas[i].firstElementChild.classList.contains("r")) {
      posicion[i] = 2;  
    }
  }
}

function evaluacionPosicion () {
  for(let i = 0; i < posicion.length; i++) {
    if(posicion[i] === 1 && posicion[i+6] === 1 && posicion[i+12] === 1 && posicion[i+18] === 1) {
      setTimeout(() => {
        alert("Amarillo gana!");
      }, 600);
      break;
    } else if (posicion[i] === 1 && posicion[i+5] === 1 && posicion[i+10] === 1 && posicion[i+15] === 1) {
      setTimeout(() => {
        alert("Amarillo gana!");
      }, 600);
      break;
    } else if(posicion[i] === 1 && posicion[i+7] === 1 && posicion[i+14] === 1 && posicion[i+21] === 1) {
      setTimeout(() => {
        alert("Amarillo gana!");
      }, 600);
      break;
    }
  }
}
