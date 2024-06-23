import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from "react-awesome-slider";
import BookAppointment from "../../Shared/BookAppoinment/BookAppoinment";

const ServiceDetails = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                const initialService = data.find(service => service._id === id);
                setSelectedService(initialService);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [id]);

    const createMarkup = (text) => {
        return { __html: text.replace(/\n/g, '<br />') };
    };

    return (
        <div className="max-w-7xl mx-auto my-12">
            <div className="flex flex-col lg:flex-row w-full gap-10 justify-start px-4">
                {/* Left sidebar with departments and working hours */}
                <div className="w-full lg:w-1/4">
                    {/* Departments list */}
                    <p className="text-2xl font-semibold text-center">Departments</p>
                    <ul className="p-2 space-y-2 my-2">
                        {services.map(service => (
                            <li key={service._id} className="bg-gray-200 hover:bg-red-800 hover:text-white py-4 text-xl px-4">
                                <Link to={`/serviceDetails/${service._id}`} className="block">{service.service}</Link>
                            </li>
                        ))}
                    </ul>
                    {/* Working hours */}
                    <div className="bg-red-800 py-12 px-4 text-white mt-4">
                        <p className="text-xl mb-4 font-bold">WORKING HOURS</p>
                        {selectedService && selectedService.visit_hours && (
                            <ul className="space-y-2 font-semibold">
                                {Object.entries(selectedService.visit_hours).map(([day, hours]) =>
                                    <li key={day} className="flex justify-between">
                                        <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span> ------------- {hours}
                                    </li>
                                )}
                            </ul>
                        )}
                        <button className="btn mt-4 rounded-none w-full bg-white text-red-800 hover:bg-gray-200">REQUEST A CONSULTATION</button>
                    </div>
                    <BookAppointment></BookAppointment>
                </div>

                {/* Main content area */}
                <div className="w-full lg:w-3/4">
                    {selectedService && (
                        <>
                            {/* Service details */}
                            <div>
                                <p className="text-3xl font-bold mb-4">{selectedService.service}</p>
                                <div>
                                    <img src={selectedService.service_image} alt={selectedService.service} className="mb-4 rounded-lg" />
                                    <p dangerouslySetInnerHTML={createMarkup(selectedService.Info)}></p>
                                </div>
                            </div>

                            {/* Pricing */}
                            <p className="text-2xl font-semibold mt-8">Our best Prices</p>
                            <div className="max-w-5xl border-2 mt-4 border-gray-200 rounded-lg">
                                {selectedService.pricing && (
                                    <ul className="p-4">
                                        {Object.entries(selectedService.pricing).map(([item, price]) =>
                                            <li key={item} className="flex justify-between py-2">
                                                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span> ---------- {price}
                                            </li>
                                        )}
                                    </ul>
                                )}
                            </div>
                            <hr className="mt-8 h-1 bg-gray-200" />

                            {/* Doctors */}
                            <div className="mt-8">
                                <p className="text-2xl font-semibold mb-4">OUR BEST DOCTORS</p>
                                {selectedService.doctors && (
                                    <div className="max-w-full">
                                        <AwesomeSlider animation="cubeAnimation">
                                            {selectedService.doctors.map((doctor) => (
                                                <div key={doctor.id} className="relative">
                                                    {/* Check image path and existence using console.log */}
                                                    <img
                                                        className="w-full h-[550px] rounded-lg"
                                                        src={doctor.doctor_image}
                                                        alt={doctor.name}
                                                        onError={(e) => {
                                                            e.target.src = "path/to/default-image.jpg"; // Set default image on error
                                                            console.error("Error loading image:", doctor.doctor_image);
                                                        }}
                                                    />
                                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                                                        {/* Check doctor name value using console.log */}
                                                        <p className="text-white text-center">{(doctor.name)}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </AwesomeSlider>
                                    </div>
                                )}
                            </div>
                        
                                <div className="mt-20 max-w-5xl ">
                                    <p className="text-3xl font-bold"><span className="text-red-700">Head</span> of department</p>
                                    {
                                        selectedService.Head_of_department && (
                                            <div className="flex items-center ">
                                               <div className="text-xl w-1/3">
                                               <p>{selectedService.Head_of_department.name }</p>
                                                <p>Years of Experience: {selectedService.Head_of_department.years_of_experience }</p>
                                                <p>Phone Number: {selectedService.Head_of_department.phone_number }</p>
                                                <Link><p  className="py-8 text-red-700">View Full Profile &gt;</p></Link>
                                               </div>
                                                <div className="ml-30">
                                                    <img className="w-3/5 ml-40  " src={selectedService.Head_of_department.doctor_image} alt="" />
                                                  
                                                </div>
                                               
                                            </div>
                                        )
                                    }
                                      <hr />
                                      
                                </div>
                             
                           
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
