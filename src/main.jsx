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
import Post from './Components/Post/Post.jsx';
import PostDetais from './Components/PostDetalis/PostDetais.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
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
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Post></Post>
    },
    {
      path:"/post/:postId",
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostDetais></PostDetais>
    }
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />

  </StrictMode>,
)
