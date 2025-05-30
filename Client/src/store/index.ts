import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "../slices/eventsSlice";
import loggerMiddleware from "../middleware/loggerMiddleware";
import socketMiddleware from "../middleware/socketMiddleware";

// fichier de configuration du store Redux
export const store = configureStore({
  reducer: {
    events: eventsReducer, // le reducer pour gérer les événements
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, socketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
