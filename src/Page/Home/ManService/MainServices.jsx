import { FaWheelchair } from "react-icons/fa";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { PiBrain } from "react-icons/pi";

const MainServices = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between my-12 p-4">
            <div className="flex items-center gap-4">
                <FaWheelchair className="text-5xl text-red-600" />
                <div>
                    <p className="text-3xl font-bold">DIAGNOSE</p>
                    <p>Examination & Diagnosis</p>
                    <hr className="bg-red-400  border-red-400 my-4" />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <LiaStethoscopeSolid className="text-6xl text-red-600" />
                <div>
                    <p className="text-3xl font-bold">TREATMENT</p>
                    <p>Treatment of the disease</p>
                    <hr className="bg-red-400  border-red-400 my-4" />
                </div>
                
            </div>
            <div className="flex items-center gap-4 ">
                <PiBrain className="text-6xl text-red-600" />
                <div>
                    <p className="text-3xl font-bold">CARE HEALTHY</p>
                    <p>Care and recuperation</p>
                    <hr className="bg-red-400  border-red-400 my-4" />
                </div>
            </div>
        </div>
    );
};

export default MainServices;
