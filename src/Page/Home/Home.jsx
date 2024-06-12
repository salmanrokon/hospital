
import NabarTop from "../NavBar/NabarTop";
import Appointment from "./Appointment/Appointment";
import Banner from "./Home/Banner";
import MainServices from "./ManService/MainServices";
import WhyChoose from "./WhyChoose/WhyChoose";


const Home = () => {
    return (
        <div>
           <NabarTop></NabarTop>
           <Banner></Banner>
           <MainServices></MainServices>
           <WhyChoose></WhyChoose>
           <Appointment></Appointment>
        </div>
    );
};

export default Home;