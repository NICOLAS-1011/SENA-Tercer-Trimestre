//Hacer desviacion estandar de arreglos con funciones (media, etc)
// ordenar de mayor stock a menor y el promedio de precio de los productos dentro de una rreglo de acuerdo nuestra pagina web. Calcular la ganacia de producto de acuerdo a la cantidad de hay, cada una es una funcion que va dentro de una funcion grande que hay que llamar como callbacks. Leer paginas 349- 354 (capitulo Callbacks)


//Inventario

class Productos {
    constructor(sku, nombre, precio, descripcion, proveedor, cantidad){
        this._sku =sku
        this._nombre =nombre
        this._precio =precio
        this._descripcion =descripcion
        this._proveedor =proveedor
        this._cantidad =cantidad
    }

    get sku(){
        return this._sku;
    }
    set sku(sku){
        this._sku = sku;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    
    get proveedor(){
        return this._proveedor;
    }
    set proveedor(proveedor){
        this._proveedor = proveedor;
    }

    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
}

const P1 = new Productos (1, "Gafas", 50000, "Plastico flexible", "Transi", 10)
const P2 = new Productos (2, "Gafas X", 100000, "Metal basico", "Ais blus", 7)
const P3 = new Productos (3, "Estuche", 20000, "Cubierta Plastica", "Ais blus", 50)
const P4 = new Productos (4, "Lentes contacto", 250000, "Cristal fino", "Ais blus", 12)
const P5 = new Productos (5, "Marco", 170000, "Marcks", "Ojos tristes", 10)



var Inventario = [P1, P2, P3, P4, P5]
console.log(`PRECIOS DE INVENTARIO: ${P1.precio}, ${P2.precio} , ${P3.precio} , ${P4.precio} , ${P5.precio}`)

console.log("")
console.log("-----------------------DESVIACION ESTANDAR--------------------- ")

// PROMEDIO

function promedio() {
    let suma=0;
for (let i = 0; i < Inventario.length; i++) {      
    suma+=Inventario[i].precio;
}
return suma / Inventario.length;
}

console.log("El promedio de precios es: " + promedio())


//NUMERO MENOS PROMEDIO

var resultadoNum = []

function numMenosPro() {
    for (let i = 0; i <= Inventario.length -1; i++) {
       resultadoNum.push(Inventario[i].precio - promedio())
    }
    return resultadoNum
}

console.log("Los números menos el promedio son: " + numMenosPro())

//NUMEROS POTENCIADOS

var resPotenciados = []

function numPotenciados() {
    for (let i = 0; i < resultadoNum.length; i++) {
        resPotenciados.push(resultadoNum[i] * resultadoNum[i])
    }
    return resPotenciados
}

console.log("Y estos numeros potenciados son: " + numPotenciados())

//SUMA DE NUMEROS POTENCIADOS

var suma=0

function sumarNumPot() {
    
    for (let i = 0; i < resPotenciados.length; i++) {      
        suma+=resPotenciados[i];
    }
    return suma;
}
console.log("La suma de los numeros potenciados es de: " + sumarNumPot())

//DIVISION ENTRE SUMA Y CANTIDAD MENOS UNO

function divisionSumCan() {
    resDivision = (suma / (Inventario.length - 1))
    return resDivision
}

console.log("La division entre la suma y la cantidad menos uno es: " + divisionSumCan())

//RAIZ DE DIVISION

function resultadoDesviacion() {
    desviacionEstandar = Math.sqrt(resDivision)
    return desviacionEstandar
}

console.log("La desviación estandar de inventario es: " + resultadoDesviacion())
console.log("")


//Orden de menor a mayor
console.log("-----------------------ORDERNADOS POR CANTIDAD--------------------- ")


inventarioCantidad = [P1._cantidad, P2._cantidad, P3._cantidad, P4._cantidad, P5._cantidad ]
console.log("Cantidades en inventario: " + inventarioCantidad)

// console.log(inventarioCantidad.sort(function(a, b){return a - b}))

var aux=0;
    for (let i = 0; i < inventarioCantidad.length-1; i++) {
        for (let j = i+1; j < inventarioCantidad.length ; j++) {
            if (inventarioCantidad[i]>inventarioCantidad[j]) {
            aux=inventarioCantidad[j];
            inventarioCantidad[j]=inventarioCantidad[i];
            inventarioCantidad[i]=aux;
            }
        }        
    }
console.log("Orden de menor a mayor: " + inventarioCantidad);
console.log("")

//Ganancias de productos 
console.log("-----------------------GANANCIAS DE PRODUCTOS--------------------- ")
function ganancias() {
    for (let i = 0; i < Inventario.length; i++) {
        res = Inventario[i]._precio * Inventario[i]._cantidad
        console.log(`Las ganancias de ${Inventario[i].nombre} son: ${res}`)  
    }
}

ganancias()