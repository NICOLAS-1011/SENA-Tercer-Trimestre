class Autos {
    constructor(numSeMo, marca, año, precio){
        this._numSeMo = numSeMo
        this._marca = marca
        this._año = año
        this._precio = precio
    }
    
    get numSeMo(){
        return this._numSeMo;
    }

    get marca(){
        return this._marca;
    }

    get año(){
        return this._año;
    }

    get precio(){
        return this._precio;
    }    
}

class Autos_compactos extends Autos{
    constructor(numSeMo, marca, año, precio, pasajeros){
        super(numSeMo, marca, año, precio)
        this._pasajeros = pasajeros
    }

    get pasajeros(){
        return this._pasajeros;
    }
    
}


class Autos_lujo extends Autos{
    constructor(numSeMo, marca, año, precio, pasajeros){
        super(numSeMo, marca, año, precio)
        this._pasajeros = pasajeros
    }

    get pasajeros(){
        return this._pasajeros;
    }
}

class Camionetas extends Autos{
    constructor(numSeMo, marca, año, precio, capCarga, numEjes, rodada){
        super(numSeMo, marca, año, precio)
        this._capCarga = capCarga
        this._numEjes = numEjes
        this._rodada = rodada
    }
    get capCarga(){
        return this._capCarga;
    }
    get numEjes(){
        return this._numEjes;
    }
    get rodada(){
        return this._rodada;
    }
    
    datos(){
        return `
        Numero serie del motor: ${this._numSeMo}
        Marca: ${this._marca}
        Modelo año: ${this._año}
        Precio: ${this._precio}
        Pasajeros: ${this._pasajeros}
        `
    }

}

class Vagonetas extends Autos{
    constructor(numSeMo, marca, año, precio, pasajeros){
        super(numSeMo, marca, año, precio)
        this._pasajeros = pasajeros
    }
    get pasajeros(){
        return this._pasajeros;
    }

    datos(){
        return `
        Numero serie del motor: ${this._numSeMo}
        Marca: ${this._marca}
        Modelo año: ${this._año}
        Precio: ${this._precio}
        Pasajeros: ${this._pasajeros}
        `
    }
}



const Ac1 = new Autos_compactos (123, "Nissan", 2017, 45000000, 4)
const Al1 = new Autos_lujo (777, "BMW", 2022, 500000000, 2)
const Ca1 = new Camionetas (868, "Toyota", 2019, 60000000, "650 klg", 2, "Doble")
const Va1 = new Vagonetas (494, "Chevrolet", 2014, 25000000, 15)

console.log(Ac1)
console.log(Al1)
console.log(Ca1)
console.log(Va1.datos())