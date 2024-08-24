import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ShopProvider } from './contex/shopContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
  
    <ShopProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ShopProvider>
  </React.StrictMode> 
)
