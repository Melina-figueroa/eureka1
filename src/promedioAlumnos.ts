let numAlum: number[] = Number(prompt("Ingrese cantidad de alumnos: "));
let vAlumnos: string[] = new Array(numAlum); //nombres de alumnos
let vNota1: number[] = new Array(numAlum);
let vNota2: number[] = new Array(numAlum);
let vNota3: number[] = new Array(numAlum);
let Vnotas_total: number[] = new Array(numAlum);
let vPromedio: number[] = new Array(Vnotas_total);

function cargar_cantidadAlumnos(): void {
  for (let i: number = 0; i < numAlum; i++) {
    vAlumnos[i] = prompt("Nombre y apellido: ");
    vNota1[i] = Number(prompt("Nota 1er trimestre:"));
    vNota2[i] = Number(prompt("Nota 2do trimestre:"));
    vNota3[i] = Number(prompt("Nota 3er trimestre:"));
    Vnotas_total[i] = vNota1[i] + vNota2[i] + vNota3[i];
    vPromedio[i] = Vnotas_total[i] / 3;
    console.log(
      "Alumno/a:",
      vAlumnos[i],
      "Nota primer trimestre ",
      +vNota1[i],
      "Nota segundo trimestre ",
      +vNota2[i],
      "Nota tercer trimestre ",
      +vNota3[i],
      "su promedio es: ",
      vPromedio[i]
    );
  }
}
function bucar_alumnos():void{
let buscarAlumno: string = prompt("Indique Alumno a buscar");
let alumnoCargado: boolean= false;
let promedio:number=0;
while(let i:number=0;i<numAlum && !alumnoCargado){
  if (vAlumnos[i]=== buscarAlumno){
    alumnoCargado= true;
    promedio= vNota1[i] + vNota2[i] + vNota3[i];
    promedio /=3;
  }
  i++;
}
if (alumnoCargado){
  console.log("La nota de promedio es" + alumnoCargado + "es: " + promedio);
}
console.log("No se encontro a: " + alumnoCargado);
}
cargar_cantidadAlumnos();
buscarAlumno();

//Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
//Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
