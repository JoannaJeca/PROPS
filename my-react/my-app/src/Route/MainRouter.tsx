import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout"
import HomeScreen from "../Pages/Homescreen";
// import Hero from "../Pages/Hero"

export const MainRouter = createBrowserRouter ([
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                index:true,
                element:<HomeScreen/>
            }
        ]
    }
])