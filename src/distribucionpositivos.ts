//Algoritmo CantidadDistribucionPositivos
let total: number = 0;
let porcentajePositivos: number = 0;
let cantidadPositivos: number = 0;
let num1: number = Number(prompt("Ingrese Valor."));
while (num1 != 0) {
  if (num1 > 0) {
    cantidadPositivos++;
  }
  total++;
  num1 = Number(prompt("Ingrese Valor."));
}
if (total > 0) {
  porcentajePositivos = (cantidadPositivos * 100) / total;
  console.log(cantidadPositivos, "Positivos:", porcentajePositivos, "% total:");
}
