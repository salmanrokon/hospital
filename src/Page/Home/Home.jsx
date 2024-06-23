
import NabarTop from "../NavBar/NabarTop";
import Appointment from "./Appointment/Appointment";
import Banner from "./Home/Banner";
import MainServices from "./ManService/MainServices";
import Map from "./Map/Map";
import MeetDoctors from "./MeetDoctors/MeetDoctors";
import PriceList from "./PriceList/PriceList";
import Testimonial from "./Testimonial/Testimonial";
import WhyChoose from "./WhyChoose/WhyChoose";


const Home = () => {
    return (
        <div>
           <NabarTop></NabarTop>
           <Banner></Banner>
           <MainServices></MainServices>
           <WhyChoose></WhyChoose>
           <Appointment></Appointment>
           <MeetDoctors></MeetDoctors>
           <Testimonial></Testimonial>
           <PriceList></PriceList>
           <Map></Map>
        </div>
    );
};

export default Home;