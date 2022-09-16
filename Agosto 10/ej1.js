class Publicacion {
    constructor(titulo, precio) {
        this._titulo = titulo
        this._precio = precio
    }
}

class Libro extends Publicacion {
    constructor(titulo, precio, numPaginas) {
        super(titulo, precio)
        this._numPaginas = numPaginas
    }
}

class CD extends Publicacion {
    constructor(titulo, precio, minutos) {
        super(titulo, precio)
        this._minutos = minutos
    }
}

const L1 = new Libro("Cien años", 70000, 245)
const CD1 = new CD("Caperuza", 10000, 30.24)

console.log(L1)
console.log(CD1)