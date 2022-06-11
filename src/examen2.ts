/*algoritmo secreto*/

function cargar(v:number):void{
  for(let i: number = 0; i < arrDimension.length , i++){
    v = Math.floor(Math.random() * 100);
   }
  }
  function mostrar(v:number[]):void{
    let c = " ";
    for(let i:number = 0; i < arrDimension.length; i++){
      c = v[i] + " ";
      console.log(c);  
    }
    }
    
    function metodo(v:number[],nro:number):number {
    for(let i:number = 0; i < arrDimension.length; i++){
      if(v[i]=nro){
        return v[i]++;
    }
     }
    }
let nro, ocu:number;
let dimension: number = Number(prompt("ingrese dimensión: "));
let arrDimension:number[] = new Array (dimension);
cargar(dimension,nro);
nro = Number(prompt('ingrese numero: '));
ocu = metodo (nro,arrDimension[],);
console.log("El numero "+nro+" ocupa la posición "+ocu);
mostrar(dimension,nro);


