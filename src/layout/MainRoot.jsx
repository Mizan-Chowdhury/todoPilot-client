import { Outlet } from "react-router-dom";
import Navbar from "../pages/components/Navbar";

const MainRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-2xl mx-auto">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainRoot;