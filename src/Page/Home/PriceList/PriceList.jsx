import { SiTicktick } from "react-icons/si";
import { useState } from "react"; // Import useState hook for state management
import { useInView } from "react-intersection-observer";

const PriceList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1); // State to track hovered index

    // Function to handle mouse enter
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    // Function to handle mouse leave
    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (
        <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
            <div className="max-w-7xl mx-auto text-center py-20">
            <p className="text-lg">Price List</p>
            <p className="text-4xl"><span className="text-red-600 font-bold">Protect</span> With Health Care Card</p>

            <div className="flex flex-col lg:flex-row justify-center my-12 ">
                <div 
                    className={`border-2 flex flex-col items-center px-8 
                        ${hoveredIndex === 0 ? 'shadow-lg' : ''}`} // Apply shadow on hover
                    onMouseEnter={() => handleMouseEnter(0)} // Handle mouse enter event
                    onMouseLeave={handleMouseLeave} // Handle mouse leave event
                >
                    <p>Trial</p>
                    <p className="text-lg font-bold"><span className="text-4xl font-bold text-red-600">$5</span>/Month</p>
                    <p className="py-4 mb-4 break-all w-[200px] ">Free with 14 days trial, then you can choose plan</p>
                    <hr />
                    <div className="text-left pl-4 -ml-5 flex-1">
                        <p className="space-y-2">
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> 1 Cleaner</p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> Floor Cleaning</p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> 2 Rooms</p>
                        </p>
                    </div>
                    <div className="mt-auto mb-4 button-container">
                        <button className="btn bg-red-600 w-full rounded-none text-white py-4">GET STARTED NOW</button>
                    </div>
                </div>
                {/* Repeat for other pricing boxes, adjusting the index */}
                <div 
                    className={`border-2 flex flex-col items-center px-8 
                        ${hoveredIndex === 1 ? 'shadow-lg' : ''}`}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    <p>Standard</p>
                    <p className="text-lg font-bold"><span className="text-4xl font-bold text-red-600">$29</span>/Month</p>
                    <p className="py-4 mb-4 break-all w-[200px] ">Free with 14 days trial, then you can choose plan</p>
                    <hr />
                    <div className="text-left pl-4 -ml-5 flex-1">
                        <p className="space-y-2">
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> 3 Cleaners</p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> All House Cleaning </p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> Equipment Cleaning </p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> All Rooms </p>
                        </p>
                    </div>
                    <div className="mt-auto mb-4 button-container">
                        <button className="btn bg-red-600 w-full rounded-none text-white py-4">GET STARTED NOW</button>
                    </div>
                </div>
                <div 
                    className={`border-2 flex flex-col items-center px-8 
                        ${hoveredIndex === 2 ? 'shadow-lg' : ''}`}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    <p>Premium</p>
                    <p className="text-lg font-bold"><span className="text-4xl font-bold text-red-600">$59</span>/Month</p>
                    <p className="py-4 mb-4 break-all w-[200px] ">Free with 14 days trial, then you can choose plan</p>
                    <hr />
                    <div className="text-left pl-4 -ml-5 flex-1">
                        <p className="space-y-2">
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> 4 Cleaners</p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> All House Cleaning </p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> Equipment Cleaning </p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> Normal Clean </p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> All Rooms </p>
                        </p>
                    </div>
                    <div className="mt-auto mb-4 button-container">
                        <button className="btn bg-red-600 w-full rounded-none text-white py-4">GET STARTED NOW</button>
                    </div>
                </div>
                <div 
                    className={`border-2 flex flex-col items-center px-8 
                        ${hoveredIndex === 3 ? 'shadow-lg' : ''}`}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                >
                    <p>Ultimate</p>
                    <p className="text-lg font-bold"><span className="text-4xl font-bold text-red-600">$99</span>/Month</p>
                    <p className="py-4 mb-4 break-all w-[200px] ">Free with 14 days trial, then you can choose plan</p>
                    <hr />
                    <div className="text-left pl-4 -ml-5 flex-1">
                        <p className="space-y-2">
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> 4 Cleaners</p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> All House Cleaning </p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> Equipment Cleaning </p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> Normal Clean </p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> All Rooms </p>
                            <p className="flex items-center text-green text-lg gap-2"><SiTicktick className="text-green-600 text-lg" /> Exterior Glasses </p>
                        </p>
                    </div>
                    <div className="mt-auto mb-4 button-container">
                        <button className="btn bg-red-600 w-full rounded-none text-white py-4">GET STARTED NOW</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PriceList;
