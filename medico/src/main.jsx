import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Developer from './pages/Developer.jsx'
import Blog from './pages/Blog.jsx'
import SymptomChecker from './components/SymptomChecker.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"about",
        element: <About/>,

      },
      {
        path:"contact",
        element:<Contact/>,
      },
      {
        path:"developer",
        element:<Developer/>,
      },
      {
        path:"blog",
        element:<Blog/>,
      },
      {
        path:"symptoms",
        element: <SymptomChecker/>,
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
