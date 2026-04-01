import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/products.css"
import "./styles/searchbar.css"
import { ProductProvider } from './context/productContext.jsx'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<ProductProvider>
  <App/>
</ProductProvider>
  </StrictMode>,
)
