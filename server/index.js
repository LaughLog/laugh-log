const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;
const app = express();

const server = http.createServer(app);

app.get("/", (_req, res) => {
  res.send(`<html>
                  <body>
                      <h1 style="color:blue;text-align: center;margin-top: 100px;">EC2 배포 성공</h1>
                      <div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%)">
                          <img src="https://picsum.photos/400/400?random=1">
                      </div>
                  </body>
                 </html>`);
});

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

server.listen(5001, () => console.log("Listening to port 5001"));
