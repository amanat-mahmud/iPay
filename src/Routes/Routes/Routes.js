import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Addmoney from "../../Pages/Home/OurService/Addmoney/Addmoney";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: '/addmoney',
        element: <Addmoney/>
    },
    {
        path: '/sendmoney',
        element: <Home/>
    },
    {
        path: '/payment',
        element: <Home/>
    },
    {
        path: '/paybill',
        element: <Home/>
    },
    {
        path: '/recharge',
        element: <Home/>
    }
    ],
    errorElement: <Error></Error>,
  },
]);
