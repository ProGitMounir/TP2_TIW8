// server.ts ou index.ts

import express from "express";
import http from "http"; // pour créer un serveur HTTP brut
import { Server } from "socket.io"; // serveur Socket.IO

const app = express();
const port = 3000;

// Crée un serveur HTTP à partir de Express
const server = http.createServer(app);

// Initialise Socket.IO avec le serveur HTTP
const io = new Server(server, {
  cors: {
    origin: "*", // ⚠️ En dev uniquement. À restreindre en prod
    methods: ["GET", "POST"]
  }
});

// Log les connexions Socket.IO
io.on("connection", (socket) => {
  console.log("Un client est connecté :", socket.id);

  // Quand on reçoit une action du client
  socket.on("action", (msg) => {
    console.log("Action reçue :", msg);

    // Propagation à tous les clients sauf l’émetteur
    socket.broadcast.emit("action", msg);
  });

  socket.on("disconnect", () => {
    console.log("Client déconnecté :", socket.id);
  });
});

// Partie Express (routes, static, etc.)
import path from "path";
const DIST_DIR = path.join(__dirname, "../../../Client/dist");
app.use(express.static(DIST_DIR));

// Lance le serveur HTTP avec Express et Socket.IO
server.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
