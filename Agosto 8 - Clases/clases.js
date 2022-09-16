//CLASES
class Producto{
    constructor (nombre, precio){
        this._nombre = nombre;
        this._precio = precio
        
    }

    //lector
    get nombre(){
        return this._nombre;
    }

    //modificador
    set nombre(nombre){
        this.nombre = nombre;
    }

    //lector
    get precio(){
        return this._precio;
    }

    //modificador
    set precio(precio){
        this.precio = precio;
    }
}

let prod1 = new Producto ("PC", 1000)
let prod2 = new Producto ("Cel", 100)

console.log(prod1.nombre)
prod1._nombre = "Compu porta"
console.log(prod1.nombre)

console.log(prod1.precio)
prod1._precio = 99999
console.log(prod1.precio)

console.log("")

console.log(prod2.nombre)
prod2._nombre = "aifon"
console.log(prod2.nombre)


console.log(prod2.precio)
prod2._precio = 777
console.log(prod2.precio)