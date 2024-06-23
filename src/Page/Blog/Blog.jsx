import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { Link } from "react-router-dom";

const Blog = () => {
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

    // Sort blogs by publish date
    const sortedBlogs = useMemo(() => {
        return [...blogs].sort((a, b) => new Date(b.Publish_date) - new Date(a.Publish_date));
    }, [blogs]);

    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-5xl font-bold rubik-custom py-12">
                <span className="text-red-700">Latest From</span> Our Blog
            </p>
            <div className="flex justify-between">
                <div className="space-y-4">
                    {
                        blogs.map(blog =>
                            <div key={blog._id}>
                                <div className="flex gap-4">
                                    <div className="avatar space-y-4">
                                        <div className="w-56">
                                            <img src={blog.Image} alt={blog.Title} />
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <p className="text-base text-red-500">{blog.category || "Others"}</p>
                                        <Link to={`/blogDetails/${blog._id}`}><p className="text-xl font-bold mb-8">{blog.Title}</p></Link>
                                        <p className="text-gray-500">{blog.Publish_date} {blog.posted_by}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <p>SEARCH</p>
                    <input type="text"
                        placeholder="Search"
                        onChange={handleSearch}
                        className="border-2 p-2"
                    />
                    <div className="py-4 text-xl">
                        <p className="text-base mb-2 mt-4">CATEGORIES</p>
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
                    </div>
                    <div>
                        <p className="text-xl font-semibold mb-2 mt-2">RECENT POSTS</p>
                        <div>
                            {
                                sortedBlogs.slice(0, 3).map(blog => (
                                    <div key={blog._id} className="flex items-center mb-4">
                                        <div className="w-20 mr-4">
                                            <img src={blog.Image} alt={blog.Title} />
                                        </div>
                                        <Link to={`/blogDetails/${blog._id}`}>
                                            <p className="text-base font-semibold">{blog.Title}</p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
