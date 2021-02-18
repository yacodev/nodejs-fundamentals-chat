function success (req,res,message,status){
  res.status(status || 200).send({
    error:'',
    body:message
  });
}
function error (req,res,message,status,err){
  console.log('[error]',err)
  res.status(status || 401).send({
    error:message,
    body:''
  });
}

module.exports = {success,error}; 