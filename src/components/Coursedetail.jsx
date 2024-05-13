import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function Coursedetail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [course, setCourse] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  console.log("ID from URL params:", id); 

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) {
        setError("course ID is undefined");
        setLoading(false);
        return;
      }
  
      try {
        const response = await fetch(`/api/v1/courses/singlecourse/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch course: ${response.statusText}`);
        }
        const courseData = await response.json();
        setCourse(courseData.course);
      } catch (error) {
        console.error("Error fetching course:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourse();
  }, [id]); // Ensure that 'id' is included in the dependency array
  
  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!course) {
    return <p>No course details found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg ">
      {/* <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
      <p className="text-gray-700 mb-4"> {course.description}</p> */}
      <div
        className="text-gray-700 mb-4 shadow-lg"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />
      {/* Render more details as needed */}
    </div>
  );
}

export default Coursedetail;
