const express = require('express');
const router = express.Router();
const response = require('./network/response');
var app = express();
app.use(express.json());
app.use(router);

router.get('/name',(req,res)=>{
  response.success(req,res, "lista desplegada");
});
router.post('/name',(req,res)=>{
  if (req.query.error=="ok"){
    response.error(req,res,'hubo un error');
  }else{
    response.success(req,res,'fue creado');
  }
});


app.listen(3000);
console.log('la aplicación esta escuchando en http://localhost:3000');