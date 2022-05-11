function sumar() {
  if (opcion===1){
    resultado=num1+num2;
    for(let indice:number=0;indice<=40;indice++){
      linea=linea+"-";
    }
}
function resta(){
  if (opcion===2){
    resultado=num1-num2;
    for(let indice:number=0;indice<=40;indice++){
      linea=linea+"-";
    }
}
let num1: number = Number(prompt('Ingrese número 1;'));
let num2: number = Number(prompt('Ingrese número 2;'));
let opcion:number=Number(prompt('Ingrese 1 para suma o 2 para restar'));

sumar();
resta();