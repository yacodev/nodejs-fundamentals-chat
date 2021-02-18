const db = require('mongoose');

db.Promise = global.Promise; //BP para acceder a la clase promise 

async function connect(url){
  await db.connect(url,{useNewUrlParser:true,});
  console.log('[db] conectada con exito');
}

module.exports = connect;
