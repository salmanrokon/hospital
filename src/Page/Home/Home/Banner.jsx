import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div>
            <AwesomeSlider className='h-[850px]'>
                <div>
                    <img src="https://i.ibb.co/m5hSGR8/toporionbd.jpg" alt="" />
                    <div className="absolute flex h-full top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-4 mt-40 ml-5 translate-x-[650px]'>
                            <h2 className='text-xl text-center'>FEEL THE DEFFERENCE WITH US</h2>
                            <p className='text-9xl font-bold'>Your Helth Is</p>
                            <p className='text-5xl font-bold text-center'>Our Priority</p>
                            <div className='space-x-5 text-center'>
                                <button className='btn rounded-sm text-white bg-red-800 border-0 px-6'>GET A QUOTE</button>
                                <button className='btn btn-outline border-white text-white px-6'>OUR SERVICES</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/hYNn0Hr/top-orion.jpg" alt="" />
                    <div className="absolute flex h-full top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-4 mt-40 ml-5 translate-x-[650px]'>
                            <h2 className='text-xl text-center'>FEEL THE DEFFERENCE WITH US</h2>
                            <p className='text-9xl font-bold'>Your Helth Is</p>
                            <p className='text-5xl font-bold text-center'>Our Priority</p>
                            <div className='space-x-5 text-center'>
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
