
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key=import.meta.env. VITE_image_hosting_key;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddDoctor = () => {
  const axiosPublic=UseAxiosPublic();
  const axiosSecure=UseAxiosSecure();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const imageFile={image: data.image[0]};
    axiosPublic.post(image_hosting_api, imageFile,{
      headers: {
        'Content-Type':'multipart/form-data'
      }
    })
    .then(res=>{
      console.log(res.data);
      if(res.data.success){
        const doctorInfo={
          doctor_id: data.doctor_id,
          doctor_name: data.doctor_name,
          image: res.data.data.display_url,
          degree:data.degree,
          speciality:data.speciality,
          visit_time:data.visit_time,
          visit_fee:data.visit_fee,
          experience:data.experience,
          info:data.info


        }
        axiosSecure.post('/doctors',doctorInfo)
        .then(res=>{
          console.log('server post',res.data)
          if(res.data.insertedId){
            Swal.fire({
              icon:'success',
              title: 'Doctor Added Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
    })
  };

  return (
    <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-lg bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Doctor Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Doctor ID</label>
          <input
            type="text"
            {...register("doctor_id", { required: "Doctor ID is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.doctor_id && <p className="text-red-500 text-xs mt-1">{errors.doctor_id.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
          <input
            type="text"
            {...register("doctor_name", { required: "Doctor Name is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.doctor_name && <p className="text-red-500 text-xs mt-1">{errors.doctor_name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Degree</label>
          <input
            type="text"
            {...register("degree", { required: "Degree is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.degree && <p className="text-red-500 text-xs mt-1">{errors.degree.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Speciality</label>
          <input
            type="text"
            {...register("speciality", { required: "Speciality is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.speciality && <p className="text-red-500 text-xs mt-1">{errors.speciality.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Visit Time</label>
          <input
            type="text"
            {...register("visit_time", { required: "Visit Time is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.visit_time && <p className="text-red-500 text-xs mt-1">{errors.visit_time.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Visit Fee</label>
          <input
            type="text"
            {...register("visit_fee", { required: "Visit Fee is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.visit_fee && <p className="text-red-500 text-xs mt-1">{errors.visit_fee.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Experience</label>
          <input
            type="text"
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
