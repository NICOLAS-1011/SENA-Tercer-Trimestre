class Usuario {
    constructor(id, nombre, edad){
        this._id = id
        this._nombre = nombre
        this._edad = edad
    }
}

class Estudiante extends Usuario {
    constructor(id, nombre, edad, ficha, programa){
        super(id, nombre, edad)
        this._ficha = ficha
        this._programa = programa
    }
}

var e1 = new Estudiante (111, "Juanito", 18, 122121, "ADIS")
var e1 = new Estudiante (101, "Juanita", 18, 122121, "ADIS")

class Moto{
    constructor(placa, estudiante){
        this._placa = placa
        this._estudiante = estudiante
    }
}

var m1 = new Moto ("JUJ-95D", e1)
console.log(m1)

class Grupo {
    constructor(codGrupo, estudiantes){
        this._codGrupo = codGrupo
        this._estudiantes = estudiantes
    }
    incoporarEstudiantes(estudiante){
        this._estudiantes.push(estudiante);
    }
}

var g1 = []
var grupo1 = new Grupo (909, g1)
console.log(grupo1)
grupo1.incoporarEstudiantes(e1);
grupo1.incoporarEstudiantes(e2);
console.log(grupo1)

