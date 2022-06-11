/*TP Introducción a la Programación – COMISIÓN A TDF

Hacer un programa que simule la compra que hace un 
cliente en un supermercado. El cliente va tener que 
ingresar por teclado la CANTIDAD de productos que va 
a llevar, los PRODUCTOS que va a comprar, el PRECIO 
UNITARIO de cada producto y la CANTIDAD A COMPRAR DE 
CADA producto.
Finalizada la compra, el programa va a mostrar por 
pantalla el detalle de la compra, productos, 
cantidad, precio unitario y precio total.
Dependiendo del monto comprado, el cliente participa 
de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa 
por una
moto 0km
• si compra mas de 1000 pero menos de 2000 participa 
un tv led */

let cantidadProductos: number = Number(
  prompt("Ingrese Cantidad de Productos a llevar ")
);
let arregloDimProduc: number[] = cantidadProductos; //arreglo para guardar dimesion
let cantidadProductos: number[]; // cantidad numerica de productos a llevar
let productos: string; // productos a ingresar (HARINA, LECHE, HUEVOS)
let arregloProducto: string[] = productos; //se va a guardar los datos de (harina, leche, huevos)
let precioProducto: number; //precio unitario
let arregloPrecio: number[] = precioProducto;
let total: number[] = arregloPrecio;

function cargarDatos(): void {
  for (let i: number = 0; i < arregloDimProduc.length; i++) {
    productos = prompt("Ingrese Productos "); //ingreso de productos (HARINA, AZUCAR, LECHE)
  }
  for (let i: number = 0; i < arregloProducto.length; i++)
    precioProducto = Number(prompt("Ingrese Precio de ", productos));
}
for (let i: number = 0; 0 < productos.length; i++) {
  cantidadProductos = Number(prompt("Ingrese cantidad a llevar de", productos));
}

function obtenerPremio(): void {
  if (1000 < 0) {
    console.log("Seguí Participando ");
  } else if (3000 < 2000) {
    console.log("Participa por una moto 0km  ");
  } else if (3000 > 3001) {
    console.log("Participa por un vehículo 0km ");
  } else if (2000 < 1000) {
    console.log("Participa por un TV LED ");
  }
}

cargarDatos();
