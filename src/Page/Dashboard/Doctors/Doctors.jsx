import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const Doctors = () => {
    
    const axiosSecure = UseAxiosSecure();
    const { data: doctors = [] } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await axiosSecure('/doctors')
            return res.data;
        }
    })
    const truncateText=(text,wordsLimit)=>{
        if(!text) return '';
        //convert text into array for counting words
        const words=text.split(' ');
        
        //check the length of array
        if(words.length<=wordsLimit){
            return text;
        }
        return words.slice(0,wordsLimit).join(' ') + '...';
    }
 
    return (
        <div className="mt-20 grid grid-cols-3 gap-10 p-4">
            
            {
                doctors.map(doctor => <div key={doctor._id} className="card card-compact bg-base-200 rounded-none  shadow-xl ">
                    <figure>
                        <img
                            src={doctor.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{doctor.doctor_name}</h2>
                        <p>{doctor.speciality}</p>
                        <p>{truncateText(doctor.info,10)}</p>
                        <Link to={`/dashboard/edit-doctors/${doctor._id}`}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-500">Update</button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Doctors;