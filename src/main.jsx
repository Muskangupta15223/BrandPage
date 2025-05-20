import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactPage from './components/Contact.jsx'
import App from './App.jsx'
import ShopNow from './components/shopNow.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element:<App/>
  }
  ,
  {
   path:'/Contact',
   element:<ContactPage/>
   }
   ,
   {
    path:'/SignUp',
    element:<SignUp/>
    },
    {
      path:'/Login',
      element:<Login/>
      }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>

<RouterProvider router={router} />
  </StrictMode>,
)
