/* import { createRoot } from 'react-dom/client';
import * as React from 'react';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />); */

// fonctionne
/* import { createRoot } from 'react-dom/client'
import * as React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
) */

// ne fonctionne pas
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
//import './index.css'
declare global {
  interface Window { mystore: unknown }
}
window.mystore = store

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)


