const prom1 = new Promise ((resolve, reject) => {
    edad = 20
    if (edad >= 18) {
        resolve("Usted es mayor de edad, nuestra recomendacion es: ")
    } else {
        reject ("Usted es menor de edad, no puede comprar en linea")
    }
    t = 1000
    tadd = 1000
})

.then(value => {
    setTimeout(() => {
        console.log(value);
    }, t += tadd);
return "Verduras, Tabaco, Frutas, Alcohol";
})
.then(value => {
    setTimeout(() => {
        console.log(value)
    }, t += tadd);
})
.catch(value => {
    setTimeout(() => {
        console.log(value)
    }, t += tadd);
    return 
})


// const prom2 = new Promise ((resolve, reject) => {

// })