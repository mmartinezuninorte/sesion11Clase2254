const EventEmmiter = require('events')

const desencadenadorEvento = new EventEmmiter()

desencadenadorEvento.on('product',(start , end)=>{
    console.log(start*end)
})

desencadenadorEvento.emit('product', 3, 4)