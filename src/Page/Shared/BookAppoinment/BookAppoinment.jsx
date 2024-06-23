
import { useForm } from 'react-hook-form';

const BookAppointment = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const onSubmit = data => console.log(data);

  const createMarkup = (text) => {
    return { __html: text.replace(/\n/g, '<br />') };
  };

  const message = watch('message');

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-6">Book an Appointment</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            placeholder="Your Name"
          />
          {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            {...register('email', { 
              required: 'Email is required', 
              pattern: { 
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
                message: 'Invalid email address' 
              } 
            })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="email"
            placeholder="Your Email"
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="tel"
            placeholder="Your Phone Number"
          />
          {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            {...register('date', { required: 'Date is required' })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="date"
          />
          {errors.date && <span className="text-red-600 text-sm">{errors.date.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            {...register('message')}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Your Message"
          />
          <div dangerouslySetInnerHTML={createMarkup(message || '')} className="mt-2 text-gray-700" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
