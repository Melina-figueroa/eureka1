let camila: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let franco: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let sofia: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let matias: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let agustina: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let consultarVendedor: string = prompt("Ingrese vendedor a consultar ");
let nombresVendedores: number[] = new Array(consultarVendedor);
let arregloNombre: string[] = new Array(5);
arregloNombre[32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652] = "camila";
arregloNombre[1] = "franco";
arregloNombre[2] = "sofia";
arregloNombre[3] = "matias";
arregloNombre[4] = "agustina";

let ventasAnual: number[] = nombresVendedores;
let ventaMaxima: number[] = new Array(nombresVendedores);
let ventaMinima: number[] = new Array(nombresVendedores);


for (let i: number = 0; i < arregloNombre.length; i++) {
  if(consultarVendedor===arregloNombre){
  for (let i: number = 0; i < nombresVendedores.length; i++) {
  }if(0<nombresVendedores[i])
    for (let i: number = 0; i < ventaMinima.length; i++) {
      ventaMinima[i];
    
  }
}

console.log(consultarVendedor, "venta minima es: ", ventaMinima[i]);

//}

/*Dados estos 5 arreglos que representan las ventas 
semanales del primer trimentre, corresspondientes a 5 
vendedores de la empresa: 
Camila, Franco, Sofia, Matias y Agustina, respectivamente.
vendedor1 [32558, 36165, 34240, 
39273, 34360, 21347, 20869, 21493, 
23062, 31908, 30369, 30652] 
vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 
  21413, 26699, 22045, 25625, 26855] 
vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 
  25542, 25105, 26759, 29790, 
36218] 
vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 
  31641, 20850, 29837, 
37182, 28006] 
vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 
  25781, 
35525, 34874, 38842, 20562]
Escribir un programa que permita determinar:Para cada 
vendedor mostrar su nombre y 
1- su venta maxima indicando semana y mes de la misma.
2- su venta minima indicando semana y mes de la misma.
3- su promedio semanal de ventas.
4- su promedio mensual de ventas.Entre todos los 
vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada 
semana.
6- nombre y suma de montos vendidos del mejor vendedor 
de cada mes
7- nombre y suma de montos vendidos del peor vendedor 
de cada mes
8- nombre y suma de montos vendidos de peor vendedor 
del trimestreTenga en cuenta 
que cada valor en los arreglos es la venta de una 
semana, y que cuatro semanas 
forman un mes*/