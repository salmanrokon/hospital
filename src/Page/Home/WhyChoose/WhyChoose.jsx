import { FaAmbulance, FaBook, FaMicroscope, FaWheelchair } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicalDrip } from "react-icons/gi";
import './styles.css';
import { useInView } from "react-intersection-observer";

const WhyChoose = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (
        <div>
            <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
                <div className="py-8 px-4 mb-20 text-center">
                    <p className="text-base md:text-lg lg:text-xl">WHY CHOOSE HOPE MEDICAL</p>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-black">
                        <span className="text-red-500">The Best</span> For Your Health
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center lg:items-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10 w-full lg:w-10/12 lg:-mt-16 px-4 lg:px-0 space-y-6">
                        <div className="flex items-center gap-4">
                            <FaBook className="text-6xl md:text-7xl lg:text-9xl text-red-600" />
                            <div>
                                <p className="text-lg md:text-xl lg:text-2xl">MEDICAL COUNSELING</p>
                                <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus.
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaMicroscope className="text-6xl md:text-7xl lg:text-9xl text-red-600" />
                            <div>
                                <p className="text-lg md:text-xl lg:text-2xl">MEDICAL FACILITES</p>
                                <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus.
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <GiMedicalDrip className="text-6xl md:text-7xl lg:text-9xl text-red-600 font-bold" />
                            <div>
                                <p className="text-lg md:text-xl lg:text-2xl">PERSONAL SERVICES</p>
                                <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus.
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaUserDoctor className="text-6xl md:text-7xl lg:text-9xl text-red-600" />
                            <div>
                                <p className="text-lg md:text-xl lg:text-2xl">TOP LEVEL DOCTORS</p>
                                <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus.
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaAmbulance className="text-6xl md:text-7xl lg:text-9xl text-red-600" />
                            <div>
                                <p className="text-lg md:text-xl lg:text-2xl">24 HOURS SERVICES</p>
                                <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus.
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaWheelchair className="text-6xl md:text-7xl lg:text-9xl text-red-600" />
                            <div>
                                <p className="text-lg md:text-xl lg:text-2xl">DEDICATED PATIENT CARE</p>
                                <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus.
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                    Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2  px-4 lg:px-0">
                        <img className={`mx-auto ${inView ? 'image-slide-in' : ''}`} src="https://i.ibb.co/XxSJ3LD/Lady-Doctor.png" alt="Lady Doctor" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
