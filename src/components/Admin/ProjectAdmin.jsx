import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
function ProjectAdmin() {
  const [project, setproject] = useState([]);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/project/getallproject");
        const data = await response.json();
        setproject(data.project);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });

  const handleDelete = async(id)=>{
    try {
      const response = await fetch(`/api/v1/project/deleteproject/${id}`, {
        method: "DELETE",
      });
      if(response.ok){
        setproject(project.filter((project)=>project._id !== id))
      }     
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="mt-20">
        <h1 className="text-2xl font-light mb-10  flex justify-center items-center">
          Projects
        </h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Project Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {project.map((project, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-5">
                <Link to={`/editProject/${project._id}`}>
                  
                <Button  size="sm" color="primary" variant="ghost">
                    Edit
                  </Button> 
                  </Link>
                  <Button onClick={()=> handleDelete(project._id)} size="sm" color="danger" variant="ghost">
                    delete{" "}
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProjectAdmin;
