const fs = require('fs')

fs.readFile('./prueba.txt', function (err, data){
    if (err) return console.error(err)
    console.log(data.toString())
})

console.log("Ejecucion fuera de fs")