var express = require('express');
var app = express();
var puerto = 3000;
var cors=require('cors');

var dispositivo = require('./routes/dispositivo');
var medicion = require('./routes/medicion');
var logs = require('./routes/logs');

var corsOptions={origin: '*', optionsSucessStatus:200}; //Aceptamos todos los origenes.

app.use(express.json());
app.use(cors(corsOptions));

// Middleware's
app.use('/api/dispositivo',dispositivo);
app.use('/api/medicion',medicion);
app.use('/api/logs',logs);

// Alerta por consola de API corriendo.
app.listen(puerto,function(req,res){
    console.log("Api funcionando");
});