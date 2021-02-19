const Model = require('./model')

function addChat(chat){
  const myChat =  new Model(chat);
  return myChat.save();
}
function listChats(userId){
  return new Promise((resolve,reject)=>{
    let filter = {};
    if (userId){
      filter={
        users:userId,
      }
    }
    //Pides todos los mensajes
    Model.find(filter)
      .populate('users')//popular (cambiar los id'213123saads' por el nombre de usuario)
      .exec((err,populated)=>{
        if(err){
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: listChats,
}