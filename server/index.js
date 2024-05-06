const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;
const app = express();

const server = http.createServer(app);

app.get("/", (_req, res) => {
  res.send(`<html>
                  <body>
                      <div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%)">
                          Laugh Log Backend
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
  socket.on("add-blocks", (blockId, previousHtml, newBlock) => {
    io.emit("add-blocks", blockId, previousHtml, newBlock);
  });

  socket.on("delete-blocks", (blockId, previousBlockID, newContent) => {
    io.emit("delete-blocks", blockId, previousBlockID, newContent);
  });

  socket.on("set-block-content", (id, value) => {
    io.emit("set-block-content", id, value);
  });

  socket.on("set-block-tag", (id, tag) => {
    io.emit("set-block-tag", id, tag);
  });
});

server.listen(8080, () => console.log("Listening to port 8080"));
