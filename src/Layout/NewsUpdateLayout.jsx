import { Outlet } from "react-router-dom";
import HeaderTop from "../Shared/HeaderTop/HeaderTop";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const NewsUpdateLayout = () => {
    return (
        <div>
           <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default NewsUpdateLayout;