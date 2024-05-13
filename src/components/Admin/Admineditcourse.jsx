import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Admineditcourse() {
  const [course, setCourse] = useState([]); // Initialize course as an empty array
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [content, setcontent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/v1/courses/singlecourse/${id}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch course: ${response.statusText}`);
        }
        const data = await response.json();
        setCourse(data.course);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    try {
      const response = await fetch(`/api/v1/courses/updatecourse/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ title, description, content }), 
       
      });
  
      if (response.ok) {
        settitle("");
        setdescription("");
        setcontent("");
        // Move JSON parsing inside the if block
        const data = await response.json();
        console.log("Course updated successfully:", data);
      } else {
        throw new Error(`Failed to update course: ${response.statusText}`);
      }
    } catch (error) {
      console.log("Error updating course", error.message);
      // Handle error
    }
  };
  const handleGoBack = async()=>{
    window.location.href = "/AdminRoute/courses";
  }
  
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold mb-4">Edit Course</h1>
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
          <label htmlFor="description" className="block text-gray-700">
            Description:
          </label>
          <input
            type="text"
            id="description"
            required={true}
            name="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
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
            Update Course
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

export default Admineditcourse;
