const express = require('express');
const db = require('./db');
const router = require('./network/routes');
db('mongodb+srv://cyaco33:jobsMANCH1955@cluster0.k1i5c.mongodb.net/test');
var app = express();
app.use(express.json());
//app.use(router);
router(app);

app.listen(3000);
console.log('la aplicación esta escuchando en http://localhost:3000');