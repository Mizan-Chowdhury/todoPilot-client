import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layout/MainRoot";
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default MyRouter;
