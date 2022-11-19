let calcular = (numero1, numero2)=>{
    return new Promise ((res, rej)=>{
        setTimeout(()=>{
        let div = numero1/numero2
        if(div > 2){
            res(numero1+numero2)
        }else{
            rej('Operacion no valida')
        }
        }, 3000)
    })
}

module.exports = {calcular}