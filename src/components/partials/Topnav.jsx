import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Topnav() {
  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState(null);
  const [project, setproject] = useState(null);
  const [blog, setblog] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() !== "") {
        try {
          const response = await fetch(
            `/api/v1/courses/allcourses?query=${query}`
          );
          const data = await response.json();
          setCourses(data.courses);
          const response2 = await fetch(
            `/api/v1/blog/getallblog?query=${query}`
          );
          const data2 = await response2.json();
          setblog(data2.allBlogs);
          const response3 = await fetch(
            `/api/v1/project/getallproject?query=${query}`
          );
          const data3 = await response3.json();
          setproject(data3.project);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      } else {
        setCourses(null); // Reset courses if query is empty
      }
    };
    fetchData();
  }, [query]);
  const handleRemove = () => {
    setQuery("");
    setCourses(null);
    setLoading(false);
  };

  return (
    <div className="w-full h-[10vh]  relative">
      <div className="flex justify-center items-center  gap-5 p-5 absolute">
        <i class="ri-search-line"></i>
        <input
          className="py-2  w-[70vh] text-md rounded-md border-none outline-none  bg-zinc-200"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <a href="#">
          {" "}
          <i onClick={handleRemove} class="ri-xrp-fill"></i>
        </a>
        {/* <Link to={"/profile"}>
          {" "}
          <i class="ri-id-card-fill font-bold text-2xl ml-[69vh]"></i>
        </Link> */}
      </div>

      {loading && <h1>Loading..</h1>}

      {!loading && courses && (
        <div className="absolute w-[70vh] max-h-[70vh] bg-zinc-200 m-14 overflow-auto z-99 rounded-md">
          {courses.map((item, index) => (
            <Link to={`/coursedetail/${item._id}`} key={index}>
              <div className="flex items-center p-4 hover:bg-gray-100 ">
                <img src="" alt="" />
                <span className="text-teal-600">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Topnav;
