import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Admineditproject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    projectLink: '',
  });

  const location = useLocation();
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/v1/project/getoneproject/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch project: ${response.statusText}`);
        }
        const projectData = await response.json();
        setFormData({
          title: projectData.title,
          description: projectData.description,
          projectLink: projectData.projectLink,
        });
      } catch (error) {
        console.error('Error fetching project:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/v1/project/updateproject/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Failed to update project: ${response.statusText}`);
      }
      window.location.href = '/project';
      // Handle successful update
    } catch (error) {
      console.error('Error updating project:', error);
      // Handle error
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleback =async()=>{
    window.location.href = '/AdminRoute/projects';
  }
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label htmlFor="title" className="block text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500"
          />
        </div>
        <div>
          <label htmlFor="projectLink" className="block text-gray-700">Project Link:</label>
          <input
            type="text"
            id="projectLink"
            name="projectLink"
            
            value={formData.projectLink}
            onChange={handleChange}
            className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500"
          />
        </div>
      <div className='flex gap-5'>
      <button type="submit" className="bg-teal-500 font-light text-white px-4 py-1 rounded hover:bg-white hover:text-teal-500">Update Project</button>
      <button onClick={handleback} type="submit" className="bg-teal-500 font-light text-white px-4 py-1 rounded hover:bg-white hover:text-teal-500">Go back</button>

      </div>
      </form>
    </div>
  );
}

export default Admineditproject;
