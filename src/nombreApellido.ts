//Crear un programa con una funcion que reciba por parametro su nombre y apellido y lo imprima por consola.
function ingresoDatos(nom: string, ape: string): void {
  console.log(nom + ape);
}
function dibujar_puntos() {
  let puntos = ".";
  for (let i: number = 0; i <= 30; i++) {
    puntos = puntos + ".";
  }
  console.log(puntos);
}
let nombre: string = prompt("Ingrese Nombre");
let apellido: string = prompt("Ingrese Apellido");
dibujar_puntos();
ingresoDatos(nombre, apellido);
dibujar_puntos();
