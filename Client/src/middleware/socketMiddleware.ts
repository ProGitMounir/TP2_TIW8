import type { Middleware } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const socketMiddleware: Middleware = (store) => {
  // Recevoir action d’un autre client
  socket.on("action", (action) => {
    store.dispatch({ ...action, meta: { remote: true } });
  });

  return (next) => (action: any) => {
    // Éviter d’envoyer en boucle ce qui vient déjà du réseau
    if (!action.meta?.remote) {
      socket.emit("action", action);
    }

    return next(action);
  };
};

export default socketMiddleware;
