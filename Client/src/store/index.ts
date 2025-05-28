import { configureStore } from '@reduxjs/toolkit'
import eventsReducer from '../slices/eventsSlice'
import loggerMiddleware from '../middlewares/loggerMiddleware'
import socketMiddleware from '../middlewares/socketMiddleware'

export const store = configureStore({
  reducer: { events: eventsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, socketMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
