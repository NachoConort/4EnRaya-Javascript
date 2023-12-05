const columnas = document.querySelectorAll(".columna");
const ventanaGanador = document.getElementById("ventana");
const textoGanador = document.getElementById("texto-ganador");

let turno = 0;
let posicion = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let ventanaIsShowing = false;

for(let i = 0; i < columnas.length; i++) {
  columnas[i].setAttribute("id", "" + (i+1));
}

columnas.forEach(columna => {
  columna.addEventListener("click", () => {
    let todasLasCeldas = document.querySelectorAll(".celda");
    const celdas = document.querySelectorAll(".c" + columna.id);
    let ficha = crearFicha();
    for(let i = celdas.length -1; i >= 0; i--) {
      if(!celdas[i].hasChildNodes() && ventanaIsShowing === false) {
        celdas[i].appendChild(ficha);
        turno++;
        break;
      }
    };
    actualizarPosicion(todasLasCeldas);
    evaluacionPosicion();
    });
});

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
    if(posicion[i] === 1 && posicion[i+6] === 1 && posicion[i+12] === 1 && posicion[i+18] === 1 || posicion[i] === 1 && posicion[i+5] === 1 && posicion[i+10] === 1 && posicion[i+15] === 1 || posicion[i] === 1 && posicion[i+7] === 1 && posicion[i+14] === 1 && posicion[i+21] === 1 || posicion[i] === 1 && posicion[i+1] === 1 && posicion[i+2] === 1 && posicion[i+3] === 1 && (i+1) % 6 != 0 && (i+2) % 6 != 0 && (i+3) % 6 != 0) {
      setTimeout(() => {
        textoGanador.innerText = "Amarillo gana!";
        ventanaGanador.style.display = "block";
        ventanaIsShowing = true;
      }, 600);
      break;
    } else if (posicion[i] === 2 && posicion[i+6] === 2 && posicion[i+12] === 2 && posicion[i+18] === 2 || posicion[i] === 2 && posicion[i+5] === 2 && posicion[i+10] === 2 && posicion[i+15] === 2 || posicion[i] === 2 && posicion[i+7] === 2 && posicion[i+14] === 2 && posicion[i+21] === 2 || posicion[i] === 2 && posicion[i+1] === 2 && posicion[i+2] === 2 && posicion[i+3] === 2 && (i+1) % 6 != 0 && (i+2) % 6 != 0 && (i+3) % 6 != 0) {
      setTimeout(() => {
        textoGanador.innerText = "Rojo gana!";
        ventanaGanador.style.display = "block";
        ventanaIsShowing = true;
      }, 600);
      break;
    }
  }
}

function ReiniciarJuego () {
  let celdasFinales = document.querySelectorAll(".celda");
  for(let i = 0; i < posicion.length; i++) {
    if(posicion[i] === 1 || posicion[i] === 2) {
      posicion[i] = 0;
      if(celdasFinales[i].hasChildNodes()) {
        let hijo = celdasFinales[i].firstElementChild;
        celdasFinales[i].removeChild(hijo);
      }
    }
  };
  ventanaGanador.style.display = "none";
  ventanaIsShowing = false;
  turno = 0;
}
