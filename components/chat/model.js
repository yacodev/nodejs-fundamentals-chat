const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref:'User',
  }
  ]
});

const model = mongoose.model('Chat',mySchema); //Nombre de la coleccion
module.exports = model;
