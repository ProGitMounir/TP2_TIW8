/* const express = require("express");
import { HelloRouteur } from "./routes/hello.router";
const app = express();
const port = 3000;

const path = require("path");
const DIST_DIR = path.join(__dirname, "../../../Client/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//app.use("/hello", HelloRouteur);
app.use(express.static(DIST_DIR)); */

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket: any) => {
  console.log("New client:", socket.id);

  socket.on("action", (action: any) => {
    console.log("Broadcasting action:", action);
    socket.broadcast.emit("action", action);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Socket.io server listening on port 3000");
});
