import { createBrowserRouter } from "react-router";
import HomePage from "./src/pages/HomePage";


const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>
    }
])

export default router