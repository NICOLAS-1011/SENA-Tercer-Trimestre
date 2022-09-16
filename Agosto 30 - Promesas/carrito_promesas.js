//crear clase carrito con atributo cantidad 

class Carrito {
    constructor(nombre, precio, cantidad){
        this._nombre=nombre
        this._precio=precio
        this._cantidad = cantidad
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
    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
}

var carrito =[]
const p1 = new Carrito ("Azucar", 20000,4)
const p2 = new Carrito ("Arroz", 70000,2)
const p3 = new Carrito ("Sal", 10000,2)
const p4 = new Carrito ("Yuca", 5000, 7)
carrito.push(p1,p2,p3, p4)
console.log(carrito)

function actCantidad(cod, cant) {
    cod.cantidad = cant
}

// actCantidad(p4, 4)
// console.log(carrito)


function ingresarProductos(codigo, nombre, precio, cantidad) {
    carrito.push(codigo = new Carrito (nombre, precio, cantidad))
}

// ingresarProductos("p5", "Arepas", 15000, 1)
// console.log(carrito)


var suma= 0;
var plata = 400000


console.log("Su presupuesto es de: " + plata)
const presupuesto= new Promise((resolve, reject) => {

    function sumarPre() {
        for (let i = 0; i < carrito.length; i++) {
            total = carrito[i].precio * carrito[i].cantidad
            suma += total
        }
        console.log("El total es: " + suma)
    }
    sumarPre()

    if (suma<plata) {
        resolve("Le sobran: ")
    } else {
        reject("Su carrito exedió su presupuesto.")
    }
})

.then(() => {
    setTimeout(() => {
        for (let i = 0; i < carrito.length; i++) {
            var restante = plata - suma
        }
        console.log("Puede seguir añadiendo productos a su carrito, le quedan: " + restante)
    },1000);
return ;
})
.catch(value => {
    setTimeout(() => {
        console.log(value)
    }, 2000)
})