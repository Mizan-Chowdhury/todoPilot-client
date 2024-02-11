import { Outlet } from "react-router-dom";
import Navbar from "../pages/components/Navbar";
import Footer from "../pages/components/Footer";

const MainRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-2xl mx-auto">
                <Outlet></Outlet>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default MainRoot;