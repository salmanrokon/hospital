import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchAndCategories from '../Shared/SearchAndCategories/SearchAndCategories';

const BlogDetails = () => {
    const { id } = useParams();
    const [blogDetails, setBlogDetails] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await fetch('http://localhost:5000/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog details');
                }
                const data = await response.json();
                setBlogDetails(data);
            } catch (error) {
                console.error('Error fetching blog details:', error);
            }
        };

        fetchBlogDetails();
    }, [id]);

    if (!blogDetails) {
        return <div>Loading...</div>;
    }

    const specificData = blogDetails.find(blog => blog._id === id);
    if (!specificData) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto py-12 flex justify-between">
            <div className='w-1/2'>
                <h1 className="text-2xl font-bold mb-4">{specificData.Title}</h1>

                <img src={specificData.Image} alt={specificData.Title} className="w-full max-w-lg" />
                <p className="text-xl text-gray-600">{specificData.Publish_date} by {specificData.posted_by}</p>
                <p className="text-base text-gray-800 mt-4">{specificData.Content}</p>
                <p className="text-base text-gray-800 mt-4">{specificData.Full_description}</p>
            </div>
            <div className='w-1/4'>
                <SearchAndCategories></SearchAndCategories>
            </div>
        </div>
    );
};


//From Blog component I need search & categories in BlogDetails component in right side as it was in Blog component.Give me the code

export default BlogDetails;
