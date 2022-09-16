//objeto literal ejemplo
const aprendiz = {
    nombre: "Maria",
    doc: 1011,
    competencias: [`diseño`, 'analisis', 'desarrollo'],
    //objeto dentro de objeto
    formacion: {
        programa: 'ProgSoft',
        ficha: 245322
    }
}

console.log(aprendiz)

//para agregar
aprendiz.ficha = 2453232;

//para modificar
aprendiz.nombre = "Maria José"
console.log(aprendiz)

//para añadir a un arreglo
aprendiz.competencias.push('deporte');
console.log(aprendiz.competencias)
console.log(aprendiz)

//añadir a un objeto dentro de objeto
aprendiz.formacion.jornada = "mañana"
console.log("ee", aprendiz)

var aprendiz2 = aprendiz;
console.log("aaaa", aprendiz2);

//añade objeto en cascada ya que apuntan y se referencian del mismo lugar
aprendiz2.sede = "Suaca";
console.log("mod", aprendiz)
console.log("mod", aprendiz2)