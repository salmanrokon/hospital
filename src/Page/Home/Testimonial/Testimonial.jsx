import { useInView } from "react-intersection-observer";

const Testimonial = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });
    return (
        <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
            <div className="bg-[url('https://i.ibb.co/9rjFzwN/testimonial-bg1.webp')] bg-cover bg-center">
            <div className="max-w-7xl mx-auto text-center py-20">
                <p>TESTIMONIAL</p>
                <p className="text-4xl"><span className="text-red-600 font-bold">Trusted </span>From Clients</p>
            </div>
            <div className="flex justify-center">
                <div className="carousel max-w-7xl">
                    <div id="slide1" className="carousel-item relative flex flex-col items-center justify-center w-full text-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <p className="text-center py-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a nobis aliquid repellendus libero eius autem iste, nulla eligendi! Impedit.</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 my-12">
                            <a href="#slide4" className="btn btn-circle ">❮</a>
                            <a href="#slide2" className="btn btn-circle ">❯</a>
                        </div>
                        <div className="mb-8">
                            <p className="text-3xl text-red-600 font-bold">Kristina Castle</p>
                            <p>house-24,block-45/a,loss angel</p>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative flex flex-col items-center justify-center w-full text-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a nobis aliquid repellendus libero eius autem iste, nulla eligendi! Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a nobis aliquid repellendus libero eius autem iste, nulla eligendi! Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a nobis aliquid repellendus libero eius autem iste, nulla eligendi! Impedit.</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 my-12">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        <div className="mb-8 mt-10">
                            <p className="text-3xl text-red-600 font-bold">Kristina Castle</p>
                            <p>house-24,block-45/a,loss angel</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;
