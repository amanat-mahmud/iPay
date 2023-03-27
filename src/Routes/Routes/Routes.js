import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Addmoney from "../../Pages/Home/OurService/Addmoney/Addmoney";
import SendMoney from "../../Pages/Home/OurService/SendMoney/SendMoney";
import Payment from "../../Pages/Home/OurService/Payment/Payment";
import Recharge from "../../Pages/Home/OurService/Recharge/Recharge";
import PayBill from "../../Pages/Home/OurService/PayBill/PayBill";

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
        element: <SendMoney/>
    },
    {
        path: '/payment',
        element: <Payment/>
    },
    {
        path: '/paybill',
        element: <PayBill/>
    },
    {
        path: '/recharge',
        element: <Recharge/>
    }
    ],
    errorElement: <Error></Error>,
  },
]);
