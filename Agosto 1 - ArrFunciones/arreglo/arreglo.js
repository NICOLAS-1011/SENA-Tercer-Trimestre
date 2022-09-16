
// arreglo
var numero=[];
for(let i=0; i< 20; i++) {
    numero[i]=Math.round((Math.random()*100));
}


//Valor maximo y minimo
console.log(numero);
console.log(`Valor maximo: ${Math.max(...numero)}`);
console.log(`Valor minimo: ${Math.min(...numero)}`);

//suma
let sum = 0;

for (let i = 0; i < numero.length; i++) {
    sum += numero[i];
}

console.log(`Suma: ${sum}`);

//promedio
function ArrayAvg() {
    var i = 0, summ = 0, ArrayLen = numero.length;
    while (i < ArrayLen) {
        summ = summ + numero[i++];
} 
    return summ / ArrayLen;
}
console.log(`Promedio: ${ArrayAvg()}`);

// mediana



//moda

numero.sort();
console.log(`Array ordenado: ${numero}`);

let duplicados = []
const arreglod = [...numero].sort()

for (let i = 0; i < arreglod.length; i++){
    if (arreglod[i+ 1]=== arreglod[i]) {
        duplicados.push(arreglod[i])
    }
}
console.log(`moda: ${duplicados}`)



