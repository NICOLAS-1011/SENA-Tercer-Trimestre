//1. Funcion de suma -- TAREA
//2. Funcion de busqueda -- TAREA
//3. Pasar a funciones clasicas y flechas 5 ciclos y 5 condicionales 
//4. En el ejercicio de lpp. Hacerlo en funcion clasica y flecha sin usar funciones propias de array

//3.

console.log("CONDICIONALES")
console.log("")


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
console.log("")

//condicional-2

function condi2(a, b, c) {
    if (a==b && c==a && b==c) {
        console.log("TODOS LOS NUMEROS SON IGUALES")
    } else if (a==b || b==c || a==c ) {
        console.log("DOS NUMEROS SON IGUALES")
    } else if (a!=b && b!=c && c!=a) {
        console.log("TODOS LOS NUMEROS SON DISTINTOS")
    }
}

condi2(3,3,3)

var condicional2 = (a, b, c) => {
    if (a==b && c==a && b==c) {
        console.log("TODOS LOS NUMEROS SON IGUALES")
    } else if (a==b || b==c || a==c ) {
        console.log("DOS NUMEROS SON IGUALES")
    } else if (a!=b && b!=c && c!=a) {
        console.log("TODOS LOS NUMEROS SON DISTINTOS")
    }
}

condicional2(6,6,5)
console.log("")

//condicional-3

function condi3(numero) {


if (numero >= 0 && numero <= 9.999) {
    x = (numero.length)
    console.log(`El número tiene ${x} digito(s)`)
} else {
    console.log(`El numero ${numero} no es valido`)
}
}

condi3("5.1")


var condicional3 = numero => console.log (`El numero tiene ${numero.length} digitos`);

condicional3("9.27")
console.log("")

//condicional-4

function condi4(nota) {

if (nota >= 0 && nota <= 2) {
    console.log("Su nota es BAJO")
} else if (nota >= 3 && nota <=5) {
    console.log("Su nota es INSUFICIENTE")
}else if (nota == 6 ) {
    console.log("Su nota es SUFICIENTE")
}else if (nota == 7 || nota == 8) {
    console.log("Su nota es BIEN")
}else if (nota == 9 || nota == 10) {
    console.log("Su nota es EXCELENTE")
} else {
    console.log("ESTE NÚMERO NO ES VÁLIDO, DIGITE UNO NUEVAMENTE")
}
}

condi4(7)

var condicional4 = (nota) => {
    if (nota >= 0 && nota <= 2) {
        console.log("Su nota es BAJO")
    } else if (nota >= 3 && nota <=5) {
        console.log("Su nota es INSUFICIENTE")
    }else if (nota == 6 ) {
        console.log("Su nota es SUFICIENTE")
    }else if (nota == 7 || nota == 8) {
        console.log("Su nota es BIEN")
    }else if (nota == 9 || nota == 10) {
        console.log("Su nota es EXCELENTE")
    } else {
        console.log("ESTE NÚMERO NO ES VÁLIDO, DIGITE UNO NUEVAMENTE")
    }
}

condicional4(3)
console.log("")

//condicional-5

function condi5(dia) {

if (dia >= 1 && dia <= 31) {
    console.log("Es el mes de enero")
} 
else if (dia >= 32 && dia <= 59) {
    console.log("Es el mes de febrero")
}
else if (dia >= 60 && dia <= 90) {
    console.log("Es el mes de marzo")
}
else if (dia >= 91 && dia <= 120) {
    console.log("Es el mes de abril")
}
else if (dia >= 121 && dia <= 151) {
    console.log("Es el mes de mayo")
}
else if (dia >= 152 && dia <= 181) {
    console.log("Es el mes de junio")
}
else if (dia >= 182 && dia <= 212) {
    console.log("Es el mes de julio")
}
else if (dia >= 213 && dia <= 243) {
    console.log("Es el mes de agosto")
}
else if (dia >= 244 && dia <= 273) {
    console.log("Es el mes de septiembre")
}
else if (dia >= 274 && dia <= 304) {
    console.log("Es el mes de octubre")
}
else if (dia >= 305 && dia <= 334) {
    console.log("Es el mes de noviembre")
}
else if (dia >= 335 && dia <= 365) {
    console.log("Es el mes de diciembre")
} 
else if (dia < 1 || dia > 365) {
    console.log("Numero no valido")
}
}

condi5(215)

var condicional5 = (dia) => {
    if (dia >= 1 && dia <= 31) {
        console.log("Es el mes de enero")
    } 
    else if (dia >= 32 && dia <= 59) {
        console.log("Es el mes de febrero")
    }
    else if (dia >= 60 && dia <= 90) {
        console.log("Es el mes de marzo")
    }
    else if (dia >= 91 && dia <= 120) {
        console.log("Es el mes de abril")
    }
    else if (dia >= 121 && dia <= 151) {
        console.log("Es el mes de mayo")
    }
    else if (dia >= 152 && dia <= 181) {
        console.log("Es el mes de junio")
    }
    else if (dia >= 182 && dia <= 212) {
        console.log("Es el mes de julio")
    }
    else if (dia >= 213 && dia <= 243) {
        console.log("Es el mes de agosto")
    }
    else if (dia >= 244 && dia <= 273) {
        console.log("Es el mes de septiembre")
    }
    else if (dia >= 274 && dia <= 304) {
        console.log("Es el mes de octubre")
    }
    else if (dia >= 305 && dia <= 334) {
        console.log("Es el mes de noviembre")
    }
    else if (dia >= 335 && dia <= 365) {
        console.log("Es el mes de diciembre")
    } 
    else if (dia < 1 || dia > 365) {
        console.log("Numero no valido")
    }
}

condicional5(278)


console.log("CICLOS")
console.log("")

//ciclo-1 

function ci1(numero) {
    for (divisor = 1; numero >= divisor; divisor++) {
            if (numero % divisor === 0) {
                console.log(divisor);
            } 
}
console.log(`Estos son los divisores del numero ${numero}`)
}

ci1(21)

var ciclo1 = numero => {
    for (divisor = 1; numero >= divisor; divisor++) {
        if (numero % divisor === 0) {
            console.log(divisor);
        } 
    }
    console.log(`Estos son los divisores del numero ${numero}`)
}

ciclo1(40)

//ciclo-2

function c2(numero) 
{
    if (numero<=1) return false;
    for (var i = 2; i <= numero-1; i++)
        if (numero % i == 0) console.log("Este numero no es primo");
    console.log("Este numero es primo");
}

c2(3)

var ciclo2 = numero => {
    if (numero<=1) return false;
    for (var i = 2; i <= numero-1; i++)
        if (numero % i == 0) console.log("Este numero no es primo");
    console.log("Este numero es primo");
}

ciclo2(6)

//ciclo-3

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