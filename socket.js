const socketIO = require("socket.io");
const socket = {};
function connect(server){
  //inicializar io dentro de la variable socket
  socket.io=socketIO(server);
}

module.exports = {
  connect,
  socket,
}
