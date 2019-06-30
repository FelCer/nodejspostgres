const express = require('express');
const app = express();
var pgp = require("pg-promise")(/*options*/);
/* Ruta para conectar una api
require("../routes/") (app);
*/
var port = process.env.PORT || 3000;
app.get('/',(req,res)=> res.send('nodejs Postgres!!!'));


var db = pgp("postgres://postgres:2020@localhost:5432/looper");

db.one("SELECT * FROM usuarios")
    .then(function (data) {
        console.log("DATA:", data);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

// module.export es de express es para que otros modulos lo puedan ver
module.exports=app;