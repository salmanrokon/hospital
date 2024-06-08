import { Outlet } from "react-router-dom";
import NavBarMain from "../Page/NavBar/NavBarMain";


const Main = () => {
    return (
        <div>
           
            <Outlet></Outlet>
            <NavBarMain></NavBarMain>
        </div>
    );
};

export default Main;