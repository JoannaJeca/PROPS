import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout"
import Hero from "../Pages/Hero"

export const MainRouter = createBrowserRouter ([
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                index:true,
                element:<Hero/>
            }
        ]
    }
])