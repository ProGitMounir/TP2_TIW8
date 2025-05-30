import type { Middleware } from "@reduxjs/toolkit";

// fichier de middleware pour logger les actions Redux
const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.group(`[Logger] ${action.type}`);
  console.log("Before:", store.getState());
  console.log("Action:", action);
  const result = next(action);
  console.log("After:", store.getState());
  console.groupEnd();
  return result;
};

export default loggerMiddleware;
