const store = require('./store');
const { socket } = require('../../socket');
//////////////
function addMessage(chat,user, message,file){
  // validcion de datos
  return new Promise((resolve,reject)=>{
    //comprobar  si hay usuario y mensaje
    if (!chat||!user || !message){
      console.error('[messageController] no hay usuario o mensaje');
      reject('Faltan datos');
      return false;
    }
    //tratamiento del archivos
    let fileUrl='';
    if(file){
      fileUrl='http://localhost:3000/app/files/'+file.filename;
    }
    //formato del mensaje
    const fullMessage = {
      chat:chat,
      user : user,
      message: message,
      date: new Date(),
      file:fileUrl,
    }
    store.add(fullMessage);
    socket.io.emit('message',fullMessage);
    resolve(fullMessage);
  })
}
//////////////
function getMessages(filterUser){
  return new Promise((resolve,reject)=>{
    resolve(store.list(filterUser));
  })
}
//////////////
function updateMessage(id,message){
  return new Promise(async (resolve,reject)=>{
    //verificamo que tenemos id y message
    if(!id || !message){
      reject('invalided data');
      return false;
    }
    const result = await store.updateText(id,message);
    resolve(result);
  })
}
//////////////
function deleteMessage(id){
  return new Promise((resolve,reject)=>{
    //validamos el id
    if(!id){
      reject('Id invalido');
      return false;
    }
    store.remove(id)
      .then(()=>{
        resolve();
      })
      .catch(e=>{
        reject(e);
      })
  })
}
//////////////
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}