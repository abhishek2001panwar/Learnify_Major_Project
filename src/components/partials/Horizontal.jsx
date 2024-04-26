// import React from 'react'

// function Horizontal() {
//   return (
//     <div className='w-full h-[70vh] '>
//         <div className='w-full h-[60vh] relative '>
//             <div className='overflow-hidden'>
//             {/* <img className='absolute bg-zinc-200 w-full h-full object-cover rounded-md' src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGV8ZW58MHx8MHx8fDA%3D" alt=""  /> */}

//             </div>
//            <div className='absolute top-[60%] left-[10%]'>
//            <h1 className='text-3xl font-bold'>Movie Name</h1>
//             <h2 className=''> Description</h2>
//            <div className='flex gap-5'>
//            <h1><span><i class="ri-calendar-event-line mr-2"></i></span>Relesae date</h1>
//             <h1><span><i class="ri-calendar-event-line mr-2"></i></span>Movie</h1>
//            </div>

// <button className='px-5 py-2 mt-5 bg-teal-500  rounded-md text-white'>Watch Trailer</button>

//            </div>

//         </div>
//     </div>
//   )
// }

// export default Horizontal

//new
import React, { useState } from "react";

function Horizontal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      name: "Course 1",
      description:
        "The web, a vast interconnected network of digital information accessible via browsers, revolutionizes communication, commerce, and knowledge sharing. It enables global connectivity, empowers businesses to reach broader audiences, and facilitates seamless access to diverse content, shaping modern society's information landscape and fostering digital innovation.",
      releaseDate: "2024-04-27",
      viewCourseLink: "#",
    },
    {
      name: "Course 2",
      description: "Machine Learning (ML), a subset of artificial intelligence (AI), empowers systems to learn from data and improve over time without explicit programming. ML algorithms analyze patterns, make predictions, and automate decision-making tasks, driving innovations in diverse fields such as healthcare, finance, and autonomous vehicles, revolutionizing how we solve complex problems.",
      releaseDate: "2024-04-28",
      viewCourseLink: "#",
    },
    // Add more courses as needed
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-[70vh] relative bg-zinc-100">
      <div className="overflow-hidden">
        <div className="w-full h-[70vh] relative">
          {/* Render current course */}
          <div className="absolute top-[40%] left-[10%]">
            <h1 className="text-3xl font-bold mb-7">
              {courses[currentIndex].name}
            </h1>
            <h2>{courses[currentIndex].description}</h2>
            <div className="flex gap-5 mt-5">
              <h1>
                <span>
                  <i className="ri-calendar-event-line mr-2"></i>
                </span>
                {courses[currentIndex].releaseDate}
              </h1>
              <h1>
                <span>
                  <i className="ri-calendar-event-line mr-2"></i>
                </span>
                <a href={courses[currentIndex].viewCourseLink}>View Course</a>
              </h1>
            </div>
            <button className="px-5 py-2 mt-20 bg-teal-500 hover:text-teal-500 hover:bg-zinc-200 rounded-md text-white">
              View course
            </button>
          </div>
        </div>
      </div>
      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-[50%]  left-0 transform -translate-y-1/2"
      >
        <i class="ri-arrow-left-s-fill  text-zinc-400 text-5xl font-bold"></i>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[50%] right-0 transform -translate-y-1/2"
      >
        <i class="ri-arrow-right-s-fill  text-zinc-400 text-5xl font-bold"></i>
      </button>
    </div>
  );
}

export default Horizontal;
