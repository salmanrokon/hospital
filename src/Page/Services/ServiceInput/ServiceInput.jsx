import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';

const ServiceForm = () => {
    const { register, handleSubmit, control } = useForm();
    const { fields: doctorFields, append: addDoctor } = useFieldArray({ control, name: "doctors" });
    const { fields: languagesFields, append: addLanguage } = useFieldArray({ control, name: "Head_of_department.languages" });
    const { fields: pricingFields, append: addPricing, remove: removePricing } = useFieldArray({ control, name: "pricing" });

    const onSubmit = async (data) => {
        try {
            await axios.post('/api/services', data);
            alert('Service added successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add service');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 border-2 mt-4 mb-4 bg-slate-100">
            <div className="col-span-3">
                <h2 className="text-2xl font-bold mb-4 text-center">Service Information</h2>
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700">Service</label>
                <input className="border p-2 w-full" {...register('service')} />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700">Doctor Name</label>
                <input className="border p-2 w-full" {...register('doctor_name')} />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700">Doctor ID</label>
                <input className="border p-2 w-full" {...register('doctor_id')} />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700">Service Image URL</label>
                <input className="border p-2 w-full" {...register('service_image')} />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700">Doctor Degree</label>
                <input className="border p-2 w-full" {...register('doctor_degree')} />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700">Info</label>
                <input className="border p-2 w-full" {...register('Info')} />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700">Lab Facility</label>
                <input type="checkbox" {...register('lab_facility')} />
            </div>
            <div className="col-span-1">
                <label className="block text-gray-700">Icon</label>
                <input className="border p-2 w-full" {...register('icon')} />
            </div>
            <div className="col-span-3">
                <label className="block text-gray-700">Detail Info</label>
                <textarea className="border p-2 w-full" {...register('detail_info')}></textarea>
            </div>
            <div className="col-span-3">
                <label className="block text-gray-700">Visit Hours</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map(day => (
                        <div key={day} className="flex items-center space-x-2">
                            <span className="capitalize">{day}</span>
                            <input className="border p-2 w-full" {...register(`visit_hours.${day}`)} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-3">
                <h2 className="text-2xl font-bold mb-4">Pricing</h2>
                {pricingFields.map((field, index) => (
                    <div key={field.id} className="flex items-center space-x-2 mb-2">
                        <input className="border p-2 w-full" {...register(`pricing.${index}.service`)} placeholder="Service" />
                        <input className="border p-2 w-full" {...register(`pricing.${index}.price`)} placeholder="Price" />
                        <button type="button" onClick={() => removePricing(index)} className="bg-red-500 text-white p-2 rounded">Remove</button>
                    </div>
                ))}
                <button type="button" onClick={() => addPricing({ service: '', price: '' })} className="mt-2 bg-blue-500 text-white p-2 rounded">Add Pricing</button>
            </div>
            <div className="col-span-3">
                <h2 className="text-2xl font-bold mb-4">Doctors</h2>
                {doctorFields.map((field, index) => (
                    <div key={field.id} className="grid grid-cols-3 gap-2 mb-2">
                        <input className="border p-2 w-full" {...register(`doctors.${index}.name`)} placeholder="Name" />
                        <input className="border p-2 w-full" {...register(`doctors.${index}.id`)} placeholder="ID" />
                        <input className="border p-2 w-full" {...register(`doctors.${index}.doctor_image`)} placeholder="Image URL" />
                    </div>
                ))}
                <button type="button" onClick={() => addDoctor({ name: '', id: '', doctor_image: '' })} className="mt-2 bg-blue-500 text-white p-2 rounded">Add Doctor</button>
            </div>
            <div className="col-span-3">
                <h2 className="text-2xl font-bold mb-4">Head of Department</h2>
                <div className="grid grid-cols-4 gap-2 mb-2">
                    <input className="border p-2 w-full" {...register('Head_of_department.name')} placeholder="Name" />
                    <input className="border p-2 w-full" {...register('Head_of_department.years_of_experience')} placeholder="Years of Experience" />
                    <input className="border p-2 w-full" {...register('Head_of_department.phone_number')} placeholder="Phone Number" />
                    <input className="border p-2 w-full" {...register('Head_of_department.doctor_image')} placeholder="Image URL" />
                </div>
                <label className="block text-gray-700">Languages</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {languagesFields.map((field, index) => (
                        <div key={field.id} className="flex items-center space-x-2">
                            <input className="border p-2 w-full" {...register(`Head_of_department.languages.${index}`)} placeholder="Language" />
                        </div>
                    ))}
                </div>
                <button type="button" onClick={() => addLanguage('')} className="mt-2 bg-blue-500 text-white p-2 rounded">Add Language</button>
            </div>
            <div className="col-span-3">
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit</button>
            </div>
        </form>
    );
};

export default ServiceForm;
