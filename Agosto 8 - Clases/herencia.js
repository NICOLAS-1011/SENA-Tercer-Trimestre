class Persona {
    constructor(nombre, documento){
        this._nombre = nombre;
        this._documento = documento;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set documento(documento){
        this.documento = documento;
    }

    get nombre(){
        return this._nombre;
    }

    get documento(){
        return this._documento;
    }

    datosCompletos(){
        return `${this.nombre} ${this.documento}`
    }
}

const ob = new Persona();
console.log(typeof(ob));

class Aprendiz extends Persona {
    constructor(nombre, documento, ficha, programa){
        super(nombre, documento)
        this._ficha = ficha
        this._programa = programa 
    }

    set ficha(ficha){
        this._ficha = ficha;
    }

    get ficha(){
        return this._ficha;
    }
    
    set programa(programa){
        this._programa = programa;
    }

    get programa(){
        return this._programa;
    }
    datosCompletos(){
        return `${this.nombre} ${this.documento} ${this.ficha} ${this.programa}`
    }
}

const ap1 = new Aprendiz ("Juan P", 777, 91291, "ADISO");
console.log(ap1.nombre);
console.log(ap1.programa);
console.log(ap1.datosCompletos())