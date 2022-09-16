//TAREA
//Buscar api que contenga datos del covid y hacer operaciones que demuestren cual es el porcentaje de personas fallecidas en un lapso de tiempo, promedio de edad, abstraccion y manipular para encontrar datos de promedios
//Mañana traer memoria con buena capacidad (5GB)
//traer promedios de valores importantes 

import fetch from 'node-fetch';

const URL = 'https://api.coronavirus.data.gov.uk/v1/data'

fetch(URL)
.then(res => res.json())
.then(data =>{
    let vec = Object.values(data);
    vec.forEach(element => (
        console.log(element)
    ));    

    var muertes = []
    var contagiados = []
    var posibles = []
    let sumaM = 0
    let sumaC = 0
    let sumaP = 0

    for (let i = 0; i < vec.length; i++) {
        for (let j = 0; j < vec[3].length; j++) {
            muertes.push(vec[3][j].death)
            contagiados.push(vec[3][j].confirmed)
            posibles.push(vec[3][j].latestBy)
        }    
    }

    for (let i = 0; i < muertes.length; i++) {      
        sumaM+=muertes[i];
        var res = sumaM / muertes.length
        var ult = muertes.pop()
    }

    //MUERTES ENTRE 2020-01-31 Y 2022-05-20   PAIS: UK
    console.log("El promedio de muertes es de: " + res);
    console.log("El porcentaje de muertes es de: " + (res / ult) * 100 + " %");
    
    for (let i = 0; i < contagiados.length; i++) {
        sumaC+=contagiados[i];
        var rCon = sumaC / contagiados.length
        //var ultC = contagiados.pop()
    }
    console.log("El promedio de contagiados es de: " + rCon)

    for (let i = 0; i < posibles.length; i++) {
        sumaP+=posibles[i];
        var rposibles = sumaP / posibles.length
    }
    console.log("El promedio de posibles contagiados es de: " + rposibles)
});