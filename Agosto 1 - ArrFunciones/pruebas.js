//ARREGLO 
sum = 0

function numerosAleatorios() {

    var numero=[];
    for(let i=0; i< 20; i++) {
        numero[i]=Math.round((Math.random()*100));
    }
    return numero;
}

console.log(numerosAleatorios())


//SUMA

function suma() {

    numerosAleatorios()

    for (let i = 0; i < numerosAleatorios.numero.length; i++) {
        sum += numero[i];
    }

    console.log(`Suma: ${sum}`);
}

suma()

//PROMEDIO

function promedio(params) {
    let sum = 0;
    var numero = []
    for(let i=0; i< 20; i++) {
        numero[i]=Math.round((Math.random()*100));
    }
    console.log(numero)

    for (let i = 0; i < numero.length; i++) {
        sum += numero[i];
    }
    cantidad = 20

    console.log(`Promedio: ${sum / cantidad} `);
}

promedio()