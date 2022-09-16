const Persona = require ('./persona.js')

class Proveedor extends Persona {
    constructor(nombre, correo, telefono, nit){
        super(nombre, correo, telefono)
        this._nit = nit
    }

    get nombre(){
        return this._nombre;
    }

    get correo(){
        return this._correo;
    }

    get telefono(){
        return this._telefono;
    }

    get nit(){
        return this._nit;
    }
}

const Pro1 = new Proveedor ("Tranistions", "na@na.com", 310, 777)
console.log(Pro1)


function alertaProd(cantidadProd){
    if (cantidadProd < 15) {
        console.log("¡ALERTA! EXISTENCIAS DE PRODUCTO BAJAS. POR FAVOR REALIZAR PEDIDO DE ESTE PRODUCTO") 
    } else if (cantidadProd >= 16 && cantidadProd <= 30) {
        console.log ("EXISTENCIAS DE PRODUCTO EN NIVEL MEDIO")
    } else if (cantidadProd >30){
        console.log("EXISTENCIAS DE PRODUCTO EN NIVEL ADECUADO")
    }

}
alertaProd(16)

module.exports=Proveedor