function dibujar_linea() {
  let linea = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}
let num1: number = Number(prompt("Ingrese número 1"));
let num2: number = Number(prompt("Ingrese número 2"));
let opcion2: number = Number(
  prompt(
    "°Para SUMAR ingrese [1]°; °Para RESTAR ingrese [2]°; °Para SALIR ingrese cualquier tecla°"
  )
);
let resultado2: number = 0;

switch (opcion2) {
  case 1:
    resultado2 = num1 + num2;
    dibujar_linea();
    console.log("El resultado de su suma es:", resultado2);
    dibujar_linea();
    break;

  case 2:
    resultado2 = num1 - num2;
    dibujar_linea();
    console.log("El resultado de su resta es", resultado2);
    dibujar_linea();
    break;

  default:
    console.log("Fin");
}
