const express = require('express');
const path = require('path');

const app = express()

app.use(express.static(__dirname + '/dist/mercadoFrontEnd'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/mercadoFrontEnd/index.html'));
});

app.listen(process.env.PORT || 5200,()=>{
    console.log('Servidor corriendo en el puerto '+ 5200 )
});