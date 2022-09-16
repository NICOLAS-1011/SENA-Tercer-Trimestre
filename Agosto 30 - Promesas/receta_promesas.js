//Hacer una receta de cocina, secuencias 

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


//RECETA CON PROMESAS

const receta = new Promise ((resolve, reject) =>{
    t = 1000
    tadd = 1000
    if (true) {
        resolve ("Comenzamos pai")
    } else {
        reject ("No comenzamos, no hay plata rey")
    }
})

.then(value => {
    console.log(value);
    return "Seleccionar las papas";
    })
.then(value => {
    setTimeout(() => {
        console.log(value)
    }, t);
    return "Lavar las papas"
})
.then(value => {
    setTimeout(() => {
        console.log(value)
    }, t += tadd);
    return "Pelela"
})
.then(value => {
    setTimeout(() => {
        console.log(value)
    }, t += tadd);
    
})
.catch(value => {
    console.log(value)
})