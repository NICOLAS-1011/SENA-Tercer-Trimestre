//CLASE NORMAL 
    class Persona {
        constructor (nombre, apellido, tipoDoc, numDoc, telefono, direccion, email){
        this._nombre = nombre;
        this._apellido = apellido
        this._tipoDoc = tipoDoc
        this._numDoc = numDoc
        this._telefono = telefono
        this._direccion = direccion
        this._email = email
        }
    }

    //------------------------------------------------------------------


    //SE PUEDE HEREDAR DE LA CLASE PERSONA 
class Aprendiz {
    constructor (nombre, apellido, tipoDoc, numDoc, nombreFicha, numFicha, competencias, jornada, telefono, direccion, email){

        this._nombre = nombre;
        this._apellido = apellido
        this._tipoDoc = tipoDoc
        this._numDoc = numDoc
        this._nombreFicha = nombreFicha
        this._numFicha = numFicha
        this._competencias = competencias
        this._jornada = jornada
        this._telefono = telefono
        this._direccion = direccion
        this._email = email
    }
}

let ap1 = new Aprendiz ("Nicolas", "Espitia", "TI", "111", "Pro SF", "1234", "Fulvo, Mas fulvo", "Morning", "9099090", "Cr 87", "eltu_lagrande6@gmail.com")

console.log(ap1)

//Asociacion con persona
class TarjetaCredido {
    constructor(numTarjeta, clave, propietario){
        this._numTarjeta = numTarjeta
        this.clave = clave
        this._propietario = propietario 
    }
}


//se agrega con aprendiz 
class Universidad {
    constructor(nombreUni, ubicacion, programas){
        this.nombreUni = nombreUni
        this.ubicacion = ubicacion
        this.programas = programas


    }
}


