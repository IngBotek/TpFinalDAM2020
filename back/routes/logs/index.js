var express = require ('express');
var routerLogs = express.Router();
var mysql = require('../../mysql');

// Solicita el ultimo registro de log de una valvula
routerLogs.get('/:id', function(req, res) {
    mysql.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId=? ORDER BY fecha DESC',[req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

// Solicita todo el registro de logs de una valvula
routerLogs.get('/:id/all', function (req,res){
    mysql.query('SELECT * FROM Log_Riegos where electrovalvulaId=?', [req.params.id],function(err,result){
            if (err){
                res.send(err);
            }
            res.send(result);
    });
});

//Inserta un nuevo registro de log de una valvula
routerLogs.post('/', function (req,res){
    mysql.query('INSERT INTO Log_Riegos (apertura,fecha,electrovalvulaId) values (?,?,?)', [req.body.apertura, req.body.fecha, req.body.electrovalvulaId], function(err, result, fields) {
            if (err){
                res.send(err);
            }
            res.send(result);
    });
});

module.exports = routerLogs;
