import { Outlet } from "react-router-dom";
import NavBarMain from "../Page/NavBar/NavBarMain";
import Footer from "../Page/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBarMain></NavBarMain>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default Main;