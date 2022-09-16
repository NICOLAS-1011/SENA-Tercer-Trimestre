//ARREGLO 

var numero=[];
    for(let i=0; i< 20; i++) {
        numero[i]=Math.round((Math.random()*100));
    }
console.log(numero)

//SUMA

function suma() {

    let sum = 0
    for (let i = 0; i < numero.length; i++) {
        sum += numero[i];
    }
    console.log(`Suma: ${sum}`);
}

suma()

//PROMEDIO

function promedio() {

    let sum = 0
    for (let i = 0; i < numero.length; i++) {
        sum += numero[i];
    }
    cantidad = 20
    console.log(`Promedio: ${sum / cantidad}`);
}

promedio()

//VALOR MAX

function valorMax() {
    console.log(`Valor maximo: ${Math.max(...numero)}`);
}

valorMax()

//VALOR MIN

function valorMin() {
    console.log(`Valor minimo: ${Math.min(...numero)}`);
}

valorMin()

//MEDIANA 

function mediana() {
    numero = numero.sort((x, y) => x - y);
    let mitad = Math.floor(numero.length / 2);
    return numero.length % 2 == 1 ? numero[mitad] : (numero[mitad - 1] + numero[mitad + 2]) / 2; 
}

console.log(`La mediana es: ` + mediana())