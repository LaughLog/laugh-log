const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("We are connected");

  socket.on("chat", (chat) => {
    io.emit("chat", chat);
  });

  socket.on("draw-line", ({ prevPoint, currentPoint, color }) => {
    socket.broadcast.emit("draw-line", { prevPoint, currentPoint, color });
  });

  socket.on("clear", () => io.emit("clear"));

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(8080, () => console.log("Listening to port 8080"));
