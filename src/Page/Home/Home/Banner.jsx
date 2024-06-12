import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div className="relative">
            <AwesomeSlider className='h-screen'>
                <div className="relative h-full">
                    <img src="https://i.ibb.co/m5hSGR8/toporionbd.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-transparent">
                        <div className='text-white space-y-4 p-5 text-center'>
                            <h2 className='text-xl '>FEEL THE DIFFERENCE WITH US</h2>
                            <p className='text-2xl,md:text-4xl lg:text-7xl font-bold'>Your Health Is</p>
                            <p className='text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-bold'>Our Priority</p>
                            <div className='space-x-5'>
                                <button className='btn rounded-sm text-white bg-red-800 border-0 px-6 py-2 sm:px-3 sm:py-1'>GET A QUOTE</button>
                                <button className='btn btn-outline border-white text-white px-6 py-2 sm:px-3 sm:py-1'>OUR SERVICES</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full">
                    <img src="https://i.ibb.co/hYNn0Hr/top-orion.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-transparent">
                        <div className='text-white space-y-4 p-5 text-center'>
                            <h2 className='text-xl '>FEEL THE DIFFERENCE WITH US</h2>
                            <p className='text-2xl,md:text-4xl lg:text-7xl font-bold'>Your Health Is</p>
                            <p className='text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-bold'>Our Priority</p>
                            <div className='space-x-5'>
                                <button className='btn rounded-sm text-white bg-red-800 border-0 px-6 py-2 sm:px-3 sm:py-1'>GET A QUOTE</button>
                                <button className='btn btn-outline border-white text-white px-6 py-2 sm:px-3 sm:py-1'>OUR SERVICES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;
