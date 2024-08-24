import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@src/App'
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux"
import { store } from "@src/stores/store"
import '@tomtom-international/web-sdk-maps/dist/maps.css'
// import tt from '@tomtom-international/web-sdk-maps';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
