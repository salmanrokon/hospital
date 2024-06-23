import { useState, useEffect } from "react";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import Testimonial from "../../Home/Testimonial/Testimonial";
import PriceList from "../../Home/PriceList/PriceList";
import { PiBrainBold } from "react-icons/pi";
import { IoMdEye } from "react-icons/io";
import { FaHeart, FaMicroscope } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { GiMedicines } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { Link } from "react-router-dom";


const iconMap = {
    PiBrainBold: PiBrainBold,
    IoMdEye: IoMdEye,
    FaHeart : FaHeart ,
    FaMicroscope: FaMicroscope,
    MdBloodtype: MdBloodtype,
    ImLab: ImLab,
    GiMedicines:  GiMedicines,
    TbDental: TbDental
};

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const truncateText=(text,wordsLimit) => {
        //convert text into array for counting words
        const words=text.split(' ');
        //check the length of array
        if(words.length<=wordsLimit){
            return text;
        }
        //if excced of words limit truncate to length of array and
        return words.slice(0, wordsLimit).join(' ') + '...';
    };
    return (
        <div>
            <ServiceBanner />
            <div className="text-center py-24">
                <p className="text-base">OUR SERVICES</p>
                <p className="text-5xl"><span className="text-red-600">Best Solution </span>For Your Health</p>
            </div>
            <div className="grid grid-cols-4 max-w-7xl mx-auto mb-8">
                {services.map(service => {
                    const IconComponent = iconMap[service.icon];
                    return (
                        <div key={service._id} className="card card-compact bg-base-100 shadow-xl border-2 rounded-none hover:bg-slate-200 h-72">
                            <div className="flex justify-start pt-4 px-4">
                                {IconComponent && <IconComponent className="text-red-600 mb-8" size={42} />}
                            </div>
                            <p className="text-xl font-bold px-4 ">{service.service}</p>
                            <div className="card-body flex">
                                <p>{truncateText(service.Info,10)}</p>
                                <div className="card-actions">
                                  <Link to={`/serviceDetails/${service._id}`}>  <button className="btn btn-ghost -mx-4">More &gt;</button></Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Testimonial />
            <PriceList />
        </div>
    );
};

export default Services;
