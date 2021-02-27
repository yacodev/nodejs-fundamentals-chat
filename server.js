const express = require('express');
const db = require('./db');
const router = require('./network/routes');
//conectar a la base de datos
db('mongodb+srv://cyaco33:jobsMANCH1955@cluster0.k1i5c.mongodb.net/test');
var app = express();//inicializar express
app.use(express.json());//para utilizar el body-parse que biene incluido en exprres
//app.use(router);
router(app);
//configurar el puerto donde escucha la apliacion
app.listen(3000);
console.log('la aplicación esta escuchando en http://localhost:3000');