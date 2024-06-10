import { Outlet } from "react-router-dom";
import NavBarMain from "../Page/NavBar/NavBarMain";


const Main = () => {
    return (
        <div>
            <NavBarMain></NavBarMain>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Main;