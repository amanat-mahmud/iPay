import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Error from "../../Pages/Error/Error";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <>Home</>
            },
            

        ],
        errorElement: <Error></Error>
    }
])