//const { connect } = require("./client");


let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
};

const handleUserInput = function (data) {

  //console.log(`data`, data);
  if (data === "w") return connection.write("Move: up");
  else if (data === "s") return connection.write("Move: down");
  else if (data === "a") return connection.write("Move: left");
  else if (data === "d") return connection.write("Move: right");
  else if (data === "l") return connection.write("Say: lol");
  else if (data === "\u0003") return process.exit();
};

//exports.setupInput = setupInput;
module.exports = {setupInput};