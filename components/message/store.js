const db = require('mongoose');
const Model = require('./model')

db.Promise = global.Promise; //BP para acceder a la clase promise 
db.connect('mongodb+srv://cyaco33:jobsMANCH1955@cluster0.k1i5c.mongodb.net/test',{useNewUrlParser:true,});
console.log('[db] conectada con exito');
function addMessage(message){
  //list.push(message);
  const myMessage =  new Model(message);
  myMessage.save();
}
async function getMessage(filterUser){
  let filter = {}
  if (filterUser !== null){
    filter={user:filterUser};
  }
  //Pides todos los mensajes
  const messages = await Model.find(filter);
  return messages;
}
async function updateText(id,message){
  const foundMessage = await Model.findOne({
    _id:id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return(newMessage);
}
function removeMessage(id){
  return Model.deleteOne({
    _id:id
  })
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove:removeMessage
}