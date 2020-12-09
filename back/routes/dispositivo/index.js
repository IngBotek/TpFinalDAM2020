var express = require ('express');
var routerDispositivo = express.Router();
var mysql = require('../../mysql');

// Solicita y devuelve toda la lista de dispositivos registrados
routerDispositivo.get('/', function (req,res){
    mysql.query("SELECT * FROM Dispositivos",function(err,result){
            if (err){
                res.send(err);
            }
            res.send(result);
    });
});

module.exports = routerDispositivo;