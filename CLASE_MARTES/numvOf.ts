//crear una funcion que reciba un valor numerico y devuelva true si es par o false si es impar (con retorno)

function valorNum(num: number): boolean {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let numero: number = Number(prompt("Ingrese Valor"));
let valor: boolean = valorNum(numero);
console.log("El numero", numero, "es", valor);
