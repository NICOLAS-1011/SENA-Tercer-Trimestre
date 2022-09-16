//ARREGLO A OPERAR ------------------ Otro ej: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 

arreglo = ["Arroz", "Papa", "Jopo", "Azucar", "Frijol", "Sal"]
console.log(arreglo)

//FUNCION DE ELIMINACION

function eliminarElementos(posEliminar) {

    //LEE EL NUMERO DEL PARAMETRO INTRODUCIDO Y ENVIA ESE NÚMERO A LA ÚLTIMA POSICIÓN DEL ARREGLO

    auxEli = 0
        for (let i = 0; i < arreglo.length; i++) {
            for (let j = i + 1; j < arreglo.length; j++) {
                if (j != posEliminar) {    
                    auxEli=arreglo[j];
                    arreglo[j]=arreglo[i];
                    arreglo[i]=auxEli
                }
            }   
        }

    console.log("")
    console.log(`Aquí envia la posicion introducida a la última y la elimina: ${arreglo}`)
    console.log("")

    //REALIZA LA ELIMINACIÓN DEL ÚLTIMO ELEMENTO DEL ARREGLO

    arreglo.pop()

    //ORGANIZA EL ARREGLO POR ALFABETO O ASCENDENCIA NUMERICA

    aux = 0;
        for (let i = 0; i < arreglo.length-1; i++) {
            for (let j = i+1; j < arreglo.length ; j++) {
                if (arreglo[i]>arreglo[j]) {
                    aux=arreglo[j];
                    arreglo[j]=arreglo[i];
                    arreglo[i]=aux;
                }
            }        
        }
    console.log(arreglo)
}

eliminarElementos(2)


//FUNCION RESUMIDA

arreglo = ["Arroz", "Papa", "Jopo", "Azucar", "Frijol", "Sal"]
console.log(arreglo)

function eliminarElementos(posEliminar) {
    
    auxEli = 0
        for (let i = 0; i < arreglo.length; i++) {
            for (let j = i + 1; j < arreglo.length; j++) {
                if (j != posEliminar) {    
                    auxEli=arreglo[j];
                    arreglo[j]=arreglo[i];
                    arreglo[i]=auxEli
                }
            }   
        }
    arreglo.pop()
    console.log(arreglo)
}

eliminarElementos(2)