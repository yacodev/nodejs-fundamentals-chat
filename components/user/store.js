const Model = require('./model');

function addUser(user){
  const myUser =  new Model(user);
  return myUser.save();
}
function listUsers(){
  const user =  Model.find();
  return user;
}

module.exports = {
  add: addUser,
  list: listUsers,
}