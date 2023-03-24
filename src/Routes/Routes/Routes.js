import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Addmoney from "../../Pages/Home/OurService/Addmoney/Addmoney";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>
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
        errorElement: <Error></Error>
    }
])