import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Admineditblog() {
  const [blog, setblog] = useState([]); // Initialize blog as an empty array
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/v1/blog/getoneblog/${id}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch blog: ${response.statusText}`);
        }
        const data = await response.json();
        setblog(data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    try {
      const response = await fetch(`/api/v1/blog/updateblog/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ title, content }), 
       
      });
  
      if (response.ok) {
        settitle("");
        setcontent("");
        // Move JSON parsing inside the if block
        const data = await response.json();
        console.log("blog updated successfully:", data);
        window.location.href= "/AdminRoute/Blogs"
      } else {
        throw new Error(`Failed to update blog: ${response.statusText}`);
      }
    } catch (error) {
      console.log("Error updating blog", error.message);
      // Handle error
    }
  };
  const handleGoBack = async()=>{
    window.location.href = "/AdminRoute/blogs";
  }
  
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold mb-4">Edit blog</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required={true}
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500"
          />
        </div>
       
        <div>
          <label htmlFor="projectLink" className="block text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            required={true}
            onChange={(e) => setcontent(e.target.value)}
            className="w-1/2 border border-gray-300 rounded px-3 py-10 focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="flex gap-5">
          <button
            type="submit"
            className="bg-teal-500 font-light text-white px-4 py-1 rounded hover:bg-white hover:text-teal-500"
          >
            Update blog
          </button>
          <button
          onClick={handleGoBack}
            type="submit"
            className="bg-teal-500 font-light text-white px-4 py-1 rounded hover:bg-white hover:text-teal-500"
          >
            Go back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admineditblog;
