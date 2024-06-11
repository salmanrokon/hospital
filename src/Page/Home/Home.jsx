
import NabarTop from "../NavBar/NabarTop";
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
        </div>
    );
};

export default Home;