import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

function CoursesAdmin() {
  const [course, setcourse] = useState([]);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/courses/allcourses");
        const data = await response.json();
        setcourse(data.courses);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });
  return (
    <>
      <div className="mt-20">
      <h1 className="text-2xl font-light mb-10  flex justify-center items-center">Courses</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Course Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              {/* <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {course.map((course, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{course.title}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-5">
                  <Button size="sm" color="primary" variant="ghost">
                    Edit
                  </Button>
                  <Button size="sm" color="danger" variant="ghost">
                    Delete{" "}
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
