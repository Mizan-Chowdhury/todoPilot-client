import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layout/MainRoot";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>
    }
])

export default MyRouter;