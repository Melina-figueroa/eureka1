let clave: string;
let intentos: number = 1;

while (intentos <= 3 && clave != "eureka") {
  clave = prompt("Ingrese clave");
  intentos++;
}
if (clave === "eureka") {
  console.log("Bienvenido, clave correcta.");
} else {
  console.log("Intentos acabados.");
}
