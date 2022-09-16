a = Math.round((Math.random()) * 100);

class Proveedor {
    constructor(nombre, correo, telefono, nit) {
        this._nombre = nombre
        this._correo = correo
        this._telefono = telefono
        this._nit = nit
    }

    get nombre() {
        return this._nombre;
    }

    //modificador
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get correo() {
        return this._correo;
    }

    //modificador
    set correo(correo) {
        this._correo = correo;
    }

    get telefono() {
        return this._telefono;
    }

    //modificador
    set telefono(telefono) {
        this._telefono = telefono;
    }

    get nit() {
        return this._nit;
    }

    //modificador
    set nit(nit) {
        this._nit = nit;
    }

    insertar(){return (`Proveedor ${a}
    Nombre: ${this._nombre} 
    Correo: ${this._correo} 
    Telefono: ${this._telefono} 
    Nit: ${this._nit}`)
        
    }

    
}


const Pro1 = new Proveedor(`Transition`, `tr777@gmail.com`, 21212121, 1010)
console.log(Pro1)

const Pro2 = new Proveedor("aa", "aa@aa.cok", 22, 222)
console.log(Pro2.insertar())
