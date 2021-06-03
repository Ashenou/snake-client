const net = require("net");
const {IP,PORT} = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that does something
    console.log("Server says: " + data);
    conn.write("Say:dots killer");
  });

  conn.on("connect", () => {
    console.log("Successfully connected");
    conn.write("Name: ABA");
  });
  return conn;
};

exports.connect = connect;