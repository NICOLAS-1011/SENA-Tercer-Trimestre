
//c2

function c2(numero) 
{
    if (numero<=1) return false;
    for (var i = 2; i <= numero-1; i++)
        if (numero % i == 0) console.log("Este numero no es primo");
    console.log("Este numero es primo");
}

c2(3)

//c3

function c3(numero) {
    let acumulador = 0;

    for (let i = 1; i <= numero / 2; i++){
        if (numero % i == 0) {
            acumulador += i;
        }
    }
    return acumulador != 0 && acumulador == numero;
}

console.log(c3(28)) 

//c4
