const Model = require('./model')

function addMessage(message){
  //añadimos nuevo dato
  const myMessage =  new Model(message);
  myMessage.save();
}
//////////////
async function getMessage(filterUser){
  return new Promise((resolve,reject)=>{
    //definir se tenemos que pasar un filtro o no
    let filter = {}
    if (filterUser !== null){
      filter={user:filterUser};
    }
    //Pides todos los mensajes
    Model.find(filter)
      .populate('user')//popular (cambiar los id'213123saads' por el nombre de usuario) y luego se tiene que ejecutar el populador
      .exec((err,populated)=>{
        if(err){
          reject(err);
          return false;
        }
        resolve(populated);
      })
  })
}
//////////////
async function updateText(id,message){
  //buscar en la base de datos el id que nos mandan
  const foundMessage = await Model.findOne({
    _id:id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return(newMessage);
}
 //////////////
function removeMessage(id){
  return Model.deleteOne({
    _id:id
  })
}
//////////////
module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove:removeMessage
}