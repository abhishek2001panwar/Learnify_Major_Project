import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProjectPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`/api/v1/project/getoneproject/${projectId}`);
        if (response.ok) {
          const data = await response.json();
          setProject(data.project);
        } else {
          setError("Failed to fetch project details");
        }
      } catch (error) {
        setError("Error fetching project details");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  if (loading) {
    return <p>Loading project details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {project ? (
        <div>
          <h2>{project.title}</h2>
          <p>Description: {project.description}</p>
          {/* Render more details as needed */}
        </div>
      ) : (
        <p>No project details found</p>
      )}
    </div>
  );
}

export default SingleProjectPage;
