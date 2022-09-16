//Arreglo

var numero=[];
var impares=[];
var pares=[];

for(let i=0; i< 20; i++) {
    numero[i]=Math.round((Math.random()*100));
    
    let nro = numero[i] % 2
         
    if (nro === 1) {
        impares.push(numero[i]);    
    } else if (nro === 0){
        pares.push(numero[i]);
    }
}

    console.log(numero);
    console.log("Numeros impares: " + impares);
    console.log("Numeros pares: " + pares);
