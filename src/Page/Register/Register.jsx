import { useForm } from 'react-hook-form';
import { CiStethoscope } from 'react-icons/ci';
import { FaCapsules, FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="flex flex-col lg:flex-row max-w-7xl w-full lg:h-[700px] mx-auto mt-10 bg-white shadow-2xl rounded-3xl overflow-hidden gap-8 lg:gap-16">
                <div className="w-full lg:w-2/5 flex justify-center items-center mb-6 lg:mb-0 relative">
                    <img
                        src="https://i.ibb.co/Lxhpjh8/original-c044dbebb5111a4c02dd1cc8c3826e8c.jpg"
                        alt="Registration"
                        className="w-full h-60 lg:h-full rounded-t-3xl lg:rounded-tr-3xl lg:rounded-b-3xl shadow-blue-300 shadow-xl object-cover"
                    />
                    <div className='absolute translate-x-0 translate-y-0 lg:translate-x-20 lg:translate-y-14 w-fit object-cover'>
                        <img className='w-24 lg:w-full h-full' src="https://i.ibb.co/ZYh3pv0/e53e8760a712ca7f9753944e270cc2df.png" alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-3/5 p-6 lg:p-10">
                    <FaHeartbeat className='text-2xl -rotate-45 -translate-x-4 lg:-translate-x-16 text-blue-700' />
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-blue-600">
                        Let's protect yourself and <br /> connect with us
                        <CiStethoscope className='text-3xl text-blue-600 font-extrabold rotate-12 -translate-y-2 lg:-translate-y-4 lg:translate-x-56' />
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                {...register('name', { required: true })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                {...register('email', { required: true })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                {...register('password', { required: true })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                            <input
                                {...register('profilePicture', { required: true })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="file"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="flex items-center mt-4 gap-4 lg:gap-10">
                        <FaCapsules  className='text-3xl text-blue-600 font-semibold rotate-12 -translate-x-1 lg:-translate-x-6' />
                        <div>
                            <span>Already have an account?</span>
                            <Link to="/login" className="text-indigo-600 ml-1">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
