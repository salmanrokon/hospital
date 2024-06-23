import { CiPill } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="bg-slate-50 max-w-6xl mx-auto px-4">
            <form>
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-24 mt-16 mb-16">
                    <div className="w-full md:w-1/2 relative -ml-4">
                        {/* Increased height to 700px for small devices and 650px for medium devices */}
                        <img className="h-[700px] md:h-[650px] w-full object-cover" src="https://i.ibb.co/VqP9mDR/doctor-with-stethoscope-ns774d1mrzrnhh59.jpg" alt="Doctor with stethoscope" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent z-10"></div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        {/* Vertically center the content of the form container */}
                        <CiPill className="rotate-12 text-3xl mb-4 text-blue-500" />
                        <p className="text-3xl font-bold">Login</p>
                        <p className="mb-6">Log in to your account</p>
                        <div>
                            <label>
                                <p>Email</p>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-10" />
                            </label>
                        </div>
                        <div>
                            <label>
                                <p>Password</p>
                                <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
                                <p className="flex gap-2">
                                    <p className="text-blue-500 cursor-pointer">Forgot password? </p><span><Link to="/register"><p>Sign Up</p></Link></span>
                                </p>
                            </label>
                        </div>
                        <button className="btn bg-blue-500 rounded-3xl mt-6 w-full max-w-xs">Login</button>
                        <button className="btn btn-outline rounded-3xl mt-4 w-full max-w-xs flex items-center justify-center">
                            <FcGoogle className="text-lg mr-2" /> Log in with Google
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
