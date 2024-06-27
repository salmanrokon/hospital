import { useParams } from "react-router-dom";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const EditDoctors = () => {
    const { id } = useParams();
    const axiosSecure = UseAxiosSecure();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: doctors = [], isLoading } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await axiosSecure.get('/doctors');
            return res.data;
        }
    });

    // Show a loading state while the data is being fetched
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const doctor = doctors.find(doctor => doctor._id === id);

    // Handle the case where the doctor is not found
    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="relative max-w-4xl mx-auto p-8 shadow-lg rounded-lg bg-slate-300 mt-4">
            <h2 className="text-3xl font-bold text-center mb-8">Update Doctor Information</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Doctor ID</label>
                        <input
                            type="text"
                            defaultValue={doctor.doctor_id}
                            {...register("doctor_id", { required: "Doctor ID is required" })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.doctor_id && <p className="text-red-500 text-xs mt-1">{errors.doctor_id.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
                        <input
                            type="text"
                            defaultValue={doctor.doctor_name}
                            {...register("doctor_name", { required: "Doctor Name is required" })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.doctor_name && <p className="text-red-500 text-xs mt-1">{errors.doctor_name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Degree</label>
                        <input
                            type="text"
                            defaultValue={doctor.degree}
                            {...register("degree", { required: "Degree is required" })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.degree && <p className="text-red-500 text-xs mt-1">{errors.degree.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Speciality</label>
                        <input
                            type="text"
                            defaultValue={doctor.speciality}
                            {...register("speciality", { required: "Speciality is required" })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.speciality && <p className="text-red-500 text-xs mt-1">{errors.speciality.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Visit Time</label>
                        <input
                            type="text"
                            defaultValue={doctor.visit_time}
                            {...register("visit_time", { required: "Visit Time is required" })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.visit_time && <p className="text-red-500 text-xs mt-1">{errors.visit_time.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Visit Fee</label>
                        <input
                            type="text"
                            defaultValue={doctor.visit_fee}
                            {...register("visit_fee", { required: "Visit Fee is required" })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.visit_fee && <p className="text-red-500 text-xs mt-1">{errors.visit_fee.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Experience</label>
                        <input
                            type="text"
                            defaultValue={doctor.experience}
                            {...register("experience", { required: "Experience is required" })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            {...register("image", { required: "Image is required" })}
                            className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">Info</label>
                        <textarea
                            defaultValue={doctor.info}
                            {...register("info", { required: "Info is required" })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.info && <p className="text-red-500 text-xs mt-1">{errors.info.message}</p>}
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-[700px] translate-y-1/2 z-10">
                <img src={doctor.image} alt="" className="w-full h-[420px]"/>
            </div>
        </div>
    );
};

export default EditDoctors;
