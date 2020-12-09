var express = require ('express');
var routerMedicion = express.Router();
var pool = require ('../../mysql');

// Solicita y devuelve la ultima medida de un sensor.
routerMedicion.get('/:id', function(req, res) {
    pool.query('SELECT * FROM Mediciones where dispositivoId=? order by fecha desc', [req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result[0]);
    });
});

// Solicita todas las mediciones existentes de un sensor.
routerMedicion.get('/:id/all', function(req, res) {
    pool.query('SELECT * FROM Mediciones where dispositivoId=? order by fecha desc', [req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

// Inserta un nuevo valor de medida en la base de datos. 
routerMedicion.post('/agregar', function(req, res) {
    pool.query('INSERT INTO Mediciones (fecha,valor,dispositivoId) values (?,?,?)', [req.body.fecha, req.body.valor, req.body.dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});


module.exports = routerMedicion;