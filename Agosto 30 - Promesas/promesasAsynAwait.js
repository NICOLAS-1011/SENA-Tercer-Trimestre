
function resultado() {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve ("Hecho")
        }, 1000);
    })
}

  async function nom() {
    console.log("Procedimiento")
    const espera = await resultado()
    console.log(espera)
  }

nom()


  //saludar y ser saludado con condicional
try {
    
function saludar() {
    return new Promise((resolve)=>{
            setTimeout(() => 
                resolve ("Hola"),
            2000)
        });
    }

async function resp() {
    console.log("Hola *Esperando saludo*")     
    let respuesta = await saludar();
    console.log(respuesta)
}
resp()

} catch (error) {
    console.log("Espantaste a las viejas")
}

