const db = require('mongoose');

db.Promise = global.Promise; //configurar para mongoose utilice las promesas por defecto

async function connect(url){
  //conectando a la base de datos
  await db.connect(url,{useNewUrlParser:true,});
  console.log('[db] conectada con exito');
}

module.exports = connect;
