import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Horizontal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carousel, setCarousel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v1/carousel/getallcarousel", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error('Failed to fetch carousel data');
        }
        const data = await response.json();
        setCarousel(data.data || []);
        setIsLoading(false);
      } catch (error) {
        console.log(error); // Log the actual error
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full h-[70vh] relative bg-zinc-100 rounded-3xl">
      <div className="overflow-hidden">
        <div className="w-full h-[70vh] relative flex">
          {/* Render current course */}
          {carousel.map((elem, index) => (
            <div  className={`absolute top-[40%] left-[10%] transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} key={index}>
              <h1 className="text-3xl font-bold mb-7 text-slate-400">{elem.title}</h1>
              <h2 className="w-1/2">{elem.description}</h2>
              <div className="flex flex-col gap-5 mt-2">
                <h1>
                  <span>
                    <i className="ri-calendar-event-line mr-2 mb-5"></i>
                  </span>
                  <Link to={`${elem.projectLink}`} >Source Code</Link>
                </h1>
                <h1>
                  <span>
                    <i className="ri-calendar-event-line mr-2"></i>
                  </span>
                  <a href={`/carouseldetail/${elem._id}`}>View Course</a>
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-[50%]  left-0 transform -translate-y-1/2"
      >
        <i className="ri-arrow-left-s-fill text-zinc-200 text-5xl font-bold"></i>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[50%] right-0 transform -translate-y-1/2"
      >
        <i className="ri-arrow-right-s-fill text-zinc-200 text-5xl font-bold"></i>
      </button>
    </div>
  );
}

export default Horizontal;
