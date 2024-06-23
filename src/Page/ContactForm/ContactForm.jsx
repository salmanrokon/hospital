
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1 className="text-4xl font-bold mb-10 mt-10 text-center text-gray-800"><span className='text-red-700'>We Are Always Ready</span> To Help You</h1>
            <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-4 mb-4">
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                {...register('name', { required: true })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                {...register('subject', { required: true })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.subject && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            {...register('message', { required: true })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            rows="4"
                        />
                        {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;
