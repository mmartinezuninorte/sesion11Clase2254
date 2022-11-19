const fs = require('fs')

const readFile = (fileName)=>{
    return new Promise((res,rej)=>{
        fs.readFile(fileName,(err, data)=>{
            if (err){
                return rej(err)
            }
            res(data.toString())
        })
    })
}

readFile('./prueba.txt')
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })