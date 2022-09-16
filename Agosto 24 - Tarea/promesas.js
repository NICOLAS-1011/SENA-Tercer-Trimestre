// Ejercicio de práctica 13.2 En este ejercicio, creará un contador que generará los valores en secuencia usando Promesas.
// 1. Configure una Promesa que se resuelva con un valor de Empezar a contar.
// 2. Cree una función llamada contador() que tenga un argumento que obtenga el valor y lo envíe a la consola.
// 3. Configure la siguiente función en Promise con cuatro instancias de then(), que deben generar un valor en la función de contador y devolver un valor que proporcionará entrada para la siguiente instancia de then(). Los valores devueltos deben ser uno, luego dos, luego tres. La salida de pantalla en la consola debe ser la siguiente:


function contador() {
const promesaContar = new Promise((resolve, reject) => {
resolve("Empezar a contar");
})


    .then(value => {
    console.log(value);
    return 1;
    })
    .then(value => {
    console.log(value);
    return 2;
    })
    .then(value => {
    console.log(value);
    return 3;
    })
    .then(value => {
    console.log(value);
    })
    }
contador()



// Ejercicio de práctica 13.3
// Este ejercicio demostrará cómo usar await para esperar una promesa dentro de una función asíncrona. Con await y async, cree un contador con timeout() e incremente un valor de contador global.
// 1. Cree un valor global para un contador.
// 2. Cree una función que tome un argumento. Retorna el resultado de una nueva Promesa, configurando una función setTimeout() que contendrá la instancia de resolución.
// 3. Incremente el contador dentro de setTimeout(), agregando uno cada segundo. Resuelva la Promesa con el valor del contador y el valor de la variable que estaba en el argumento de la función.
// 4. Cree una función asíncrona que envíe a la consola el valor del contador global y el valor del argumento de la función.
// 5. Cree una variable para capturar el valor de resolución devuelto por la función de espera. Envíe ese resultado a la consola.
// 6. Cree un ciclo para iterar 10 veces, incrementando el valor e invocando la función asíncrona, pasando el valor de la variable de incremento como parámetro en la función.
// Los resultados deberían ser similares a los siguientes:

var valor = 0

function resultadoPromesa(params) {
    return new Promise(resolve => {
        setTimeout(() => {
            
        }, 1000);
    })
}
