import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/User/User.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/user",
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path:"/user/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
    {
      path:"/post",
      element:
    }
    ]
  },
  
  
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />

  </StrictMode>,
)
