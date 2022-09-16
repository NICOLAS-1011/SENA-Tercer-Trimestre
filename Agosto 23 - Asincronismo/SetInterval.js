//Funcion para llenar un arreglo con numeros aleatorios, esta funcion pasarla a un settimeout que dure 3 segundos mientras transcurren los 3 segundos llenar un vector de numeros uno a tra ves de una funcion (5 y 25)


// function llenarArreglo(){
//     for (let i = 0; i < 5; i++) {
//         console.log(a=[Math.round((Math.random()) * 100)])
//     }
// }

// setTimeout(llenarArreglo, 3000)

// function vector() {
//     for (let i = 0; i < 5; i++) {
//         console.log(v=[1])
//     }
    
// }

// vector()



// setTimeout(saludos)
// console.log('Debo ejecutarme antes del timeout')
// function saludos(nombre, rol){
//     console.log(`hola mi nombre es ${nombre}`)
//     console.log(`yo soy ${rol}`);
// }

// a=[]

// function llenarArreglo(arreglo){
//     for (let i = 0; i < 5; i++) {
//         arreglo=Math.round((Math.random()) * 100) 
//     }
//     console.log(arreglo)









// }

// setTimeout(llenarArreglo, 3000, a=[])

// function vector() {
//     for (let i = 0; i < 5; i++) {
//         console.log(v=[1])
//     }
    
// }

// vector()

a=[]

function llenarArreglo(){
    for (let i = 0; i < 5; i++) {
        a[i]=Math.round((Math.random()) * 100)
    }
    console.log(a)
}


setTimeout(llenarArreglo, 3000)

v=[]
function vector() {
    for (let i = 0; i < 5; i++) {
        v[i]=1
    }
    console.log(v)
    
}

vector()

//-----------------------------
//-----------------------------
//-----------------------------

// x=Math.round(Math.random() * (25-5) +5)

// function numerosAleatorios(limite){
//     var numeros=[]
//     for (let i = 0; i < limite; i++) {
//         numeros[i]=Math.round(Math.random() * (100-20) +20)
//     }
//     console.log(numeros)
// }

// function numerosUno(limite){
//     var numeros1 = []
//     for (let i = 0; i < limite; i++) {
//         numeros1[i] = 1
//     }
//     console.log(numeros1)
// }

// numerosUno(x)
// setTimeout(numerosAleatorios, 3000, x)



//Intervalos

for (let j = 0; j < 10; j++) {
    setTimeout(() => {
        console.log(j)
    }, 1000);
}

setInterval(() => {
    console.log('i love pdf')
}, 1000);

// CICLO CON FRENO      

    //repetir con el intervalo de 2 segundos
let timerId = setInterval(() => console.log('tick'), 2000)

    //despuesde 5 segundos para
setTimeout(() => {
    clearInterval(timerId);
    console.log('punto de pare')
}, 5000);

//Que un arrelo que se llene aleatoriamene de 15 elementos se imprima infinitamente y se reinicie


setInterval(() => {
    
    for (let i = 0; i < 15; i++) {
        var ar=[]
        ar=Math.round((Math.random()) * 100)
    }
    console.log(ar)
    
}, 1000);


var ar=

//Operacion ternaria

vec=[]
for (let i = 0; i < 10; i++) {
    vec[i]=Math.round((Math.random()) * 100)
}

var k = 0
    setInterval(() => {
        console.log(vec[k])
        k++;
        k == 10? k = 0 : k=k
    }, (1000));


// Callbacks

function pruebaCallback(callback1, callback2, name) {
    callback1(name);

    setTimeout(() => {
        console.log('dentro de prueba')
    }, 2000);

    callback2(name);
}

function saludo(nombre){
    console.log("Hola " + nombre + " , t pico la kla")
}

function cuentaLetras(nombre) {
    console.log(nombre.length)
}

pruebaCallback(saludo, cuentaLetras, "ana")



//Hacer una receta de cocina, secuencias 
// setTimeout(() => {
//     console.log("")
// }, 000);

function salchipapa(call1, call2, call3, call4) {
    
    call1();
    call2();
    call3();
    call4();

    setTimeout(() => {
        console.log("Comase una buena salchipapa casera")
    }, 21000);
} 

function papas() {
    setTimeout(() => {
        console.log("Seleccionar las papas")
    }, 2000);
    setTimeout(() => {
        console.log("Lavar las papas")
    }, 3000);
    setTimeout(() => {
        console.log("Pelar las papas")
    }, 4000);
    setTimeout(() => {
        console.log("Lavar las papas")
    }, 5000);
    setTimeout(() => {
        console.log("Picar las papas a su gusto")
    }, 6000);
    setTimeout(() => {
        console.log("Eche la papas en el aceite")
    }, 7000);
    setTimeout(() => {
        console.log("Retire las papas del aceite")
    }, 11000);
    setTimeout(() => {
        console.log("Coloque las papas en un recipiente")
    }, 12000);
}

function salchicha() {
    setTimeout(() => {
        console.log("Seleccionar las salchichas que necesita")
    }, 8000);
    setTimeout(() => {
        console.log("Retire la envoltura de las salchichas y lavelas")
    }, 9000);
    setTimeout(() => {
        console.log("Pique las salchichas")
    }, 10000);
    setTimeout(() => {
        console.log("Eche las salchichas en el aceite")
    }, 13000);
    setTimeout(() => {
        console.log("Retire las salchichas del aceite")
    }, 17000);
    setTimeout(() => {
        console.log("Vierta las salchichas en el mismo recipiente de las papas")
    }, 18000);
}

function aceite() {
    setTimeout(() => {
        console.log("Ponga a calentar el aceite")
    }, 4500);
    setTimeout(() => {
        console.log("Apague el aceite")
    }, 19000);
}

function salsaRosada(){
    setTimeout(() => {
        console.log("Busque salsa roja y mayonesa")
    }, 14000);
    setTimeout(() => {
        console.log("Vierta en un recipiente cantidades proporcionales de salsa roja y mayonesa")
    }, 15000);
    setTimeout(() => {
        console.log("Revuelva la salsa roja y la mayonesa")
    }, 16000);
    setTimeout(() => {
        console.log("Agrege la salsa rosada a la salchipapa")
    }, 20000);
}

salchipapa(papas, salchicha, aceite, salsaRosada)