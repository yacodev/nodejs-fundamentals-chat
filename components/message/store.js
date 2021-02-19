const Model = require('./model')

function addMessage(message){
  //list.push(message);
  const myMessage =  new Model(message);
  myMessage.save();
}
async function getMessage(filterUser){
  return new Promise((resolve,reject)=>{
    let filter = {}
    if (filterUser !== null){
      filter={user:filterUser};
    }
    //Pides todos los mensajes
    Model.find(filter)
      .populate('user')//popular (cambiar los id'213123saads' por el nombre de usuario)
      .exec((err,populated)=>{
        if(err){
          reject(err);
          return false;
        }
        resolve(populated);
      })
  })
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