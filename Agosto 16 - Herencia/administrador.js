const Persona = require ('./persona.js')
const Proveedor = require ('./proveedor.js')


class Administrador extends Persona {
    constructor(nombre, correo, telefono, documento){
        super(nombre, correo, telefono)
        this._documento = documento
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

    get documento(){
        return this._documento;
    }
}

const Admin1 = new Administrador ("Paco", "paq@ka.sight", 3012012, 110)
console.log(Admin1)

function solicitarPedido() {
    console.log(`PROVEEDOR, SOLICITAMOS UN PEDIDO SOBRE LOS SIGUIENTES PRODUCTOS: `)
}


solicitarPedido()

module.exports=Administrador

// ${Proveedor.Pro1._nombre }