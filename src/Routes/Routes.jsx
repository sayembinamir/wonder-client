import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Blog from "../pages/Blog/Blog";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AddAToys from "../pages/AddAToys/AddAToys";
import Alltoy from "../pages/AllToy/Alltoy";
import Details from "../pages/Details/Details";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ToyDetails from "../pages/AllToy/ToyDetails";
import PrivetRoute from "../privateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
      },
      {
         path:'/addatoy',
         element:<AddAToys></AddAToys>
      },
      {
        path:'/alltoy',
        element:<Alltoy></Alltoy>
      },
     
      {
        path:'mytoys',
        element:<MyToys></MyToys>

      },

      {
        path: "toy/:id",
        element: (
          <PrivetRoute>
            <ToyDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
           ` https://wonder-server.vercel.app/toys/${params.id}`
          ),
      },
   
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:5173/details/${params.id}`)
        
      
      },
      {
        path: "updatetoy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(
            `https://wonder-server.vercel.app/toys/${params.id}`
          ),
      },
  
    ]
    },
    {
      path: '*',
      element: <NotFoundPage></NotFoundPage>
  },
  ]);


  export default router;