import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function CoursesAdmin() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v1/courses/allcourses");
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/v1/courses/deletecourse/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setCourses(courses.filter(course => course._id !== id));
      } else {
        console.log("Failed to delete course");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-20">
        <h1 className="text-2xl font-light mb-10 flex justify-center items-center">Courses</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{course.title}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-5">
                  <Button size="sm" color="primary" variant="ghost">
                    <Link to={`/editCourse/${course._id}`}>Edit</Link>
                  </Button> 
                  <Button size="sm" color="danger" variant="ghost" onClick={() => handleDelete(course._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CoursesAdmin;
