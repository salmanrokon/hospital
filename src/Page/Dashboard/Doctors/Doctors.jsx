import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

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
                        
                    </div>
                </div>)
            }
        </div>
    );
};

export default Doctors;