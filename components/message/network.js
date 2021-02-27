const express = require('express');
const path = require('path');
const multer = require('multer');//gestion de archivos
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
//Gestion del archivo - obtener extension
const storage = multer.diskStorage({
  destination:'public/files/',
  filename: function(req,file,cb){
    cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
  }
})
const upload = multer({
  storage:storage
})
//redireccionamiento
//solicitar
router.get('/',(req,res)=>{
  //para filtrar mensajes de un usuario
  const filterMessages = req.query.user||null;
  //peticion de mensajes
  controller.getMessages(filterMessages)
    .then((messageList)=>{
      response.success(req,res,messageList,200);
    })
    .catch((e)=>{
      response.error(req,res,'Unexpected error',500,e)
    })
});
//Añadir
router.post('/',upload.single('file'),(req,res)=>{
  //peticion agrear mensaje 
  controller.addMessage(req.body.chat,req.body.user, req.body.message,req.file)
    .then((fullMessage)=>{
      response.success(req,res,fullMessage,201);
    })
    .catch((e)=>{
      response.error(req,res,'informacion invalida',400,'error en el controlador' );
    })
});
//Actualizar(modificaciones parciales)
router.patch('/:id',(req,res)=>{
  controller.updateMessage(req.params.id,req.body.message)
    .then((data)=>{
      response.success(req,res,data,200);
    })
    .catch(e=>{
      response.error(req,res,'error interno',500,e);
    });
})
//eliminar
router.delete('/:id',(req,res)=>{
  controller.deleteMessage(req.params.id)
    .then(()=>{
      response.success(req,res,`usuario ${req.params.id} eliminado`,200)
    })
    .catch(e=>{
      response.error(req,res,'error interno',500,e);
    })
})
module.exports = router;