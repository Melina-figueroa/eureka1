function dibujar_linea() {
  let linea = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let base: number = Number(prompt("Ingrese Base."));
let exponente: number = Number(prompt("Ingrese exponente."));
