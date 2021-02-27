const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//definimos el esquema
const mySchema = new Schema({
  chat:{
    type:Schema.ObjectId,
    ref:'Chat',
  },
  //el usuario sera un identficador de mondb
  //objectId = 3d3re43d2d32dfasd
  user: {
    type: Schema.ObjectId,
    ref:'User',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file:String,
});
//model= este es el esquema, todo lo que se cree tenga este esquema y se guarde en  la 
//base de datos tenga este nombre 
const model = mongoose.model('Message',mySchema); //Nombre de la coleccion
module.exports = model;
