const express = require('express');
const app = express();//inicializar express
const server = require('http').Server(app); //configurando los websockets

const cors = require('cors');//para habilitar las cabeceras
const db = require('./db');
const socket = require('./socket');////configurando los websockets
const router = require('./network/routes');
//conectar a la base de datos
db('mongodb+srv://cyaco33:jobsMANCH1955@cluster0.k1i5c.mongodb.net/test');

app.use(cors());
app.use(express.json());//para utilizar el body-parse que biene incluido en exprres
app.use('/app',express.static('public'));
//inicializar socket
socket.connect(server);
//app.use(router);
router(app);
//configurar el puerto donde escucha la apliacion
//app.listen(3000);
server.listen(3000, function(){
  console.log('la aplicación esta escuchando en http://localhost:3000');
});