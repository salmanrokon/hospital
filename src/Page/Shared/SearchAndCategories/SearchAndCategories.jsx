import { useMemo, useState } from "react";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const SearchAndCategories = () => {
    const axiosPublic = UseAxiosPublic();
    const [searchTerm, setSearchTerm] = useState("");

    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs', searchTerm],
        queryFn: async () => {
            const res = await axiosPublic.get(`/blogs?search=${searchTerm}`);
            return res.data;
        }
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        refetch();
    };
      // Function to count categories
      const categoryCounts = useMemo(() => {
        const counts = blogs.reduce((acc, blog) => {
            const category = blog.category || "Others";
            if (!acc[category]) {
                acc[category] = 0;
            }
            acc[category]++;
            return acc;
        }, {});
        counts["All"] = blogs.length;
        return counts;
    }, [blogs]);

    const sortedBlogs =useMemo(()=>{
        return [...blogs].sort((a,b)=>new Date(b.Publish_date) -new Date(a.Publish_date))
    },[blogs]);

    return (
        <div>
               <div>
                    <p>SEARCH</p>
                    <input type="text"
                        placeholder="Search"
                        onChange={handleSearch}
                        className="border-2 p-2"
                    />
                    <div className="py-4 text-xl">
                        <p className="text-base">CATEGORIES</p>
                        <div className="flex justify-between">
                            <p>All</p>
                            <p> ({categoryCounts["All"]})</p>
                        </div>
                        <hr />
                        {
                            Object.keys(categoryCounts).filter(category => category !== "All").map(category => (
                                <li key={category} className="list-none">
                                    <div className=" flex justify-between">
                                        <div>{category}</div> <div>({categoryCounts[category]})</div>
                                    </div>
                                    <hr />
                                </li>
                            ))
                        }
                        <div className="mt-4 space-y-4">
                            {
                                sortedBlogs.slice(0,3).map(blog=> <li key={blog} className="list-none flex justify-between gap-2">
                                    <img className="w-1/2" src={blog.Image} alt="" />
                                    <Link to={`/blogDetails/${blog._id}`}><p className="w-1/2">{blog.Title}</p></Link>
                                </li>)
                            }
                        </div>
                       
                    </div>
                        
                </div>
        </div>
    );
};

export default SearchAndCategories;