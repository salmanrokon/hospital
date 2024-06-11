import { FaAmbulance, FaBook, FaMicroscope, FaWheelchair } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicalDrip } from "react-icons/gi";

const WhyChoose = () => {
    return (
        <div>
            <div>
                <div className="py-8 px-4 mb-20">
                    <p>WHY CHOOSE HOPE MEDICAL</p>
                    <p className="text-5xl font-black"><span className="text-red-500">The Best</span> For Your Health</p>
                </div>
                <div className=" relative flex w-full">
                    <div className="grid grid-cols-2 space-y-24 relative z-10 w-10/12 gap-8 ">
                        <div className="flex items-center gap-4">
                            <FaBook className="text-7xl text-red-600"></FaBook>
                            <div>
                                <p className="text-2xl">MEDICAL COUNSELING</p>
                                <p>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <FaMicroscope className="text-7xl text-red-600" />
                            <div>
                                <p className="text-2xl">MEDICAL FACILITES</p>
                                <p>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <GiMedicalDrip className="text-7xl text-red-600 font-bold" />
                            <div>
                                <p className="text-2xl">PERSONAL SERVICES</p>
                                <p>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaUserDoctor className="text-7xl text-red-600" />
                            <div>
                                <p className="text-2xl">TOP LEVEL DOCTORS</p>
                                <p>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaAmbulance className="text-7xl text-red-600" />
                            <div>
                                <p className="text-2xl">24 HOURS SERVICES</p>
                                <p>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                        <FaWheelchair className="text-7xl text-red-600" />
                            <div>
                                <p className="text-2xl">DEDICATED PATIENT CARE</p>
                                <p>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                            </div>
                        </div>


                    </div>
                    <div className="absolute right-0 top-0 w-1/2" >
                        <img className="-my-44" src="https://i.ibb.co/XxSJ3LD/Lady-Doctor.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyChoose;