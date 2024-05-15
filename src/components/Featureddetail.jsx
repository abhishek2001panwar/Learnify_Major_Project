import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function Featureddetail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carousel, setcarousel] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  console.log("ID from URL params:", id); // Yahaan console mein ID print karo

  useEffect(() => {
    const fetchcarousel = async () => {
      if (!id) {
        setError("carousel ID is undefined");
        setLoading(false);
        return;
      }
  
      try {
        const response = await fetch(`/api/v1/carousel/getonecarousel/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch carousel: ${response.statusText}`);
        }
        const carouseldata = await response.json();
        setcarousel(carouseldata.carousel);
      } catch (error) {
        console.error("Error fetching carousel:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchcarousel();
  }, [id]); // Ensure that 'id' is included in the dependency array
  
  if (loading) {
    return <p>Loading carousel details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!carousel) {
    return <p>No carousel details found</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{carousel.title}</h2>
      <p className="text-gray-700 mb-4">Description: {carousel.description}</p>
      <div
        className="text-gray-700 mb-4 shadow-lg"
        dangerouslySetInnerHTML={{ __html: carousel.projectLink }}
      />
      {/* Render more details as needed */}
    </div>
  );
}

export default Featureddetail;
