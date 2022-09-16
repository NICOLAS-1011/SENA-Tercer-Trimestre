arregloNom = ["Pedro", "Ana", "Lucas", "Nicolas", "Andres", "Luis", "Carla", "Nicolas"]


function buscarNom(nombre) {
    for (let i = 0; i < arregloNom.length; i++) {
        if (nombre == arregloNom[i]) {
            console.log("El nombre de " + arregloNom[i] + " se encuentra en la posicion: " + [i]);
        }
    }
}

buscarNom("Nicolas")

console.log("")


arregloPre = [10000, 58000, 13000, 47000, 55000]

function ordenarPre() {
    auxOrd = 0
    for (let i = 0; i < arregloPre.length; i++) {
        for (let j = i + 1; j < arregloPre.length; j++) {
            if (arregloPre[i] > arregloPre[j]) {
                auxOrd = arregloPre[j]
                arregloPre[j] = arregloPre[i]
                arregloPre[i] = auxOrd 
            }
        }
    }
    console.log(arregloPre)
}

ordenarPre()

console.log("")

arregloNum = [1011082191, 1011082192, 1011082193, 1011082194, 1011082195, 1011082196]


function buscarNum(numero) {
    for (let i = 0; i < arregloNum.length; i++) {
        if (numero == arregloNum[i]) {
            console.log("El numero " + arregloNum[i] + " se encuentra en la posicion: " + [i]);
        }
    }
}

buscarNum(1011082194)