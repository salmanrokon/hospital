import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div>
            <AwesomeSlider className='h-[600px]'>
                <div>
                    <img src="https://i.ibb.co/m5hSGR8/toporionbd.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-transparent">
                        <div className='text-white space-y-4 text-center md:text-left p-5 md:p-10'>
                            <h2 className='text-lg md:text-2xl'>FEEL THE DIFFERENCE WITH US</h2>
                            <p className='text-4xl md:text-6xl lg:text-9xl font-bold'>Your Health Is</p>
                            <p className='text-2xl md:text-4xl lg:text-5xl font-bold'>Our Priority</p>
                            <div className='space-x-5'>
                                <button className='btn rounded-sm text-white bg-red-800 border-0 px-6'>GET A QUOTE</button>
                                <button className='btn btn-outline border-white text-white px-6'>OUR SERVICES</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/hYNn0Hr/top-orion.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-transparent">
                        <div className='text-white space-y-4 text-center md:text-left p-5 md:p-10'>
                            <h2 className='text-lg md:text-2xl'>FEEL THE DIFFERENCE WITH US</h2>
                            <p className='text-4xl md:text-6xl lg:text-9xl font-bold'>Your Health Is</p>
                            <p className='text-2xl md:text-4xl lg:text-5xl font-bold'>Our Priority</p>
                            <div className='space-x-5'>
                                <button className='btn rounded-sm text-white bg-red-800 border-0 px-6'>GET A QUOTE</button>
                                <button className='btn btn-outline border-white text-white px-6'>OUR SERVICES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;
