import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layout/MainRoot";
import Home from "../pages/home/Home";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        children: [{
            path: '/',
            element: <Home></Home>
        }]
    }
])

export default MyRouter;