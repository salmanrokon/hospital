import{ useEffect, useState } from "react";
import Slider from "react-slick";
import "./styles.css"; // Assuming you have styles specific to the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

const MeetDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the component is visible
});
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors data:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''} bg-slate-200`}>
      <div className="text-center max-w-7xl mx-auto py-8">
        <p>MEET OUR DOCTORS</p>
        <p className="text-4xl font-extrabold">
          <span className="text-red-600">Professional &</span> Enthusiastic
        </p>
        <Slider {...settings}>
          {doctors.map((doctor) => (
            <div key={doctor._id} className="p-4 mt-72 md:mt-16 lg:mt-4">
              <div className="doctor-card bg-white p-4 rounded-lg shadow-lg">
                <img
                  className="w-full h-[300px] object-cover rounded-md mb-4"
                  src={doctor.image}
                  alt={doctor.doctor_name}
                />
                <h3 className="text-xl font-semibold mb-2">{doctor.doctor_name}</h3>
                <p className="text-gray-600">{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MeetDoctors;
///////================================
