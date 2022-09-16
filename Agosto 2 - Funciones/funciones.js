//Crear una funcion
function impresora() {
    console.log("Soy una tasa");
}

//Llamar una función
impresora()

// Funcion suma
function suma(a, b) {
    return (a + b)
}

console.log(suma(1, 2))


//Funcion ecauacion cuadratica
function ecuacionCuadratica(a, b, c) {
    return ("PENDIENTE")
}


//Funciones con arreglos
function llenarVector(vector, tam) {
    for (let i = 0; i < tam; i++) {
        vector[i] = Math.round(Math.random() * 100)
    }
    return vector;
}

var v = []
var t = 10

llenarVector(v, t)
console.log(v);


//Funcion de suma -- TAREA
function suma(vector, tam) {
    for (let i = 0; i < tam; i++) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

        }
    }
}

var v = []
var t = 10

suma(v, t)
console.log(v)
console.log(res)


//Funcion de busqueda -- TAREA



//Condicional-1 

function condi1(a, b, c) {
    if (a != Math.min(a, b, c) && a != Math.max(a, b, c)) {
        console.log(a)
    } else if (b != Math.min(a, b, c) && b != Math.max(a, b, c)) {
        console.log(b)
    } else if (c != Math.min(a, b, c) && c != Math.max(a, b, c)) {
        console.log(c)
    }
}

condi1(23, 2, 12)

// var suma = (a, b) => a + b

var condicional1 = (a, b, c) => {
    if (a != Math.min(a, b, c) && a != Math.max(a, b, c)) {
        console.log(a)
    } else if (b != Math.min(a, b, c) && b != Math.max(a, b, c)) {
        console.log(b)
    } else if (c != Math.min(a, b, c) && c != Math.max(a, b, c)) {
        console.log(c)
    }
}

condicional1(123, 32, 121)