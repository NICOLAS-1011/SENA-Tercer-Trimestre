console.log(`Hola`);
setTimeout(() => {
   console.log('interrupcion por timeout'); 
}, 2000);
setTimeout(function(){
    console.log('settimeout con funcion clasica'); 
}, 1000);
function externa (){
    console.log('soy externa al settimeout')
}

setTimeout(externa, 500);

function saludos(){
    console.log('Hola Mundo')

}

setTimeout(saludos)
console.log('Debo ejecutarme antes del timeout')
function saludos(nombre, rol){
    console.log(`hola mi nombre es ${nombre}`)
    console.log(`yo soy ${rol}`);
}

saludos('juan', 'medico');
    setTimeout(saludos, 3000, "Natt", "Proogramer");

    //Escriba un settime dentro de un ciclo que se repita n veces, imprima la variable de ciclo dentro del settime, luego en otra ejecucion fuera del settimeout y explique el comportamiento. Alterne el ejercicio utilizando let y var en la variable del ciclo 
    // for -> settimeout -> ciclo

    

for (let i = 0; i < 5; i++) {
    let n = 10
    setTimeout(() => {
        console.log(n)
    }, 2000);

    console.log(n)
}

console.log(((Math.random()*100)+20)-20)

//como hallar un valor maximo y minimo entre un rango con el mathramdom