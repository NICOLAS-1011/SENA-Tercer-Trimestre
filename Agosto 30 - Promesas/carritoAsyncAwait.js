class Carrito {
    constructor(nombre, precio, cantidad) {
        this._nombre = nombre
        this._precio = precio
        this._cantidad = cantidad
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
}

var carrito = []
const p1 = new Carrito("Azucar", 20000, 4)
const p2 = new Carrito("Arroz", 70000, 2)
const p3 = new Carrito("Sal", 10000, 2)
const p4 = new Carrito("Yuca", 5000, 7)
carrito.push(p1, p2, p3, p4)

console.log(carrito)


function actCantidad(cod, cant) {
    cod.cantidad = cant
}
// actCantidad(p4, 4)

function ingresarProductos(codigo, nombre, precio, cantidad) {
    carrito.push(codigo = new Carrito(nombre, precio, cantidad))
}
// ingresarProductos("p5", "Arepas", 15000, 1)
// console.log(carrito)


var plata = 400000;
console.log("su presupuesto es de " + plata)


function subTotal() {
    suma = 0
    for (let i = 0; i < carrito.length; i++) {
        total = carrito[i].precio * carrito[i].cantidad
        suma += total
    }
    console.log("El total es: " + suma)
    resultado = plata - suma
}


function promesa1() {
    return new Promise((resolve, reject) => {
        if (suma < plata) {
            resolve(console.log("Le sobran: " + resultado))
        } else {
            reject(console.log("Su carrito exedió su presupuesto."))
        }
    })
}


async function mostrarPlata() {
    try {
        const h1 = await subTotal();
        const h2 = await promesa1();
    } catch (error) {

    }
}
mostrarPlata()