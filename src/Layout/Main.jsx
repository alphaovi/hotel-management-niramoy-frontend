import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import HeaderTop from "../Shared/HeaderTop/HeaderTop";

const Main = () => {
    
    
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;