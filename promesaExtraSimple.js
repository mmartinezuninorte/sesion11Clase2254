const promesa = require('./calcular')

promesa.calcular(14,6)
    .then((resultado)=>{
        console.log(resultado)
    })
    .catch((error) =>{
        console.log(error)
    })

