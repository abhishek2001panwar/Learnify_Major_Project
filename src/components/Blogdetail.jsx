import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function Blogdetail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blog, setcourse] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  console.log("ID from URL params:", id); 

  useEffect(() => {
    const fetchcourse = async () => {
      if (!id) {
        setError("blog ID is undefined");
        setLoading(false);
        return;
      }
  
      try {
        const response = await fetch(`/api/v1/blog/getoneblog/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch blog: ${response.statusText}`);
        }
        const courseData = await response.json();
        setcourse(courseData.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchcourse();
  }, [id]); // Ensure that 'id' is included in the dependency array
  
  if (loading) {
    return <p>Loading blog details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blog) {
    return <p>No blog details found</p>;
  }

  return (
   <div className="flex justify-center items-center mt-32">
     <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-2xl ">
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-500 mb-3 mt-4 ">Description: {blog.content}</p>

      {/* Render more details as needed */}
    </div>
   </div>
  );
}

export default Blogdetail;
