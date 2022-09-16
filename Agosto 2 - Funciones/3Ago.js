var coleccion = [{
        nombre: "Cien años de soledad",
        autor: "El gabriel",
        obras: [
            "El amor en tiempos del colera", "Cronica de una muerte...", "El coronel"
        ]
    },

    {
        nombre: "Pedro Paramo",
        autor: "El Rulfo",
        obras: ["El llano", "en llamas", "Dile que tu me quiere"]
    },

    {
        nombre: "Siervo sin tierra",
        autor: "El eduardo",
        obras: ["El cristo", "de espaldas", "Los hijos sol"]
    },

]

coleccion.forEach(function(n) {
    console.log(n.obras[n.obras.length - 1])
})


// console.log(coleccion)



// editorial = { edit1: "Edito1 del gabo", edit2: "Edito2 del }