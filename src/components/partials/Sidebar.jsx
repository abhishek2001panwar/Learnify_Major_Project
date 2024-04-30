import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Image from '../../../public/logo2.png'
function Sidebar() {
  return (
    <div className="p-8 fixed ">
      <div className="p-8">
        <h1 className="text-2xl font-light flex gap-3 font-dancing-script">
          <img className="h-10 w-10 rounded-lg" src={Image} alt="" />
          {/* <i class="ri-movie-fill pr-3"></i>*/} Learnify 
        </h1>
      </div>

      <div className="p-3">
        <Link  to="/">
          <div className="flex items-center p-4 active:border-2 active:rounded-md ">
            <i class="ri-home-4-line pr-3"></i>
            <span>Home</span>
          </div>
        </Link>
        <Link to="/courses">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-graduation-cap-fill mr-3"></i>            <span>Courses</span>
          </div>
        </Link>
        <Link to="/project">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-slideshow-2-line pr-3"></i>
            <span>Projects</span>
          </div>
        </Link>
        <Link to="/blog">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
            <i class="ri-movie-2-line pr-3"></i>
            <span>Blog</span>
          </div>
        </Link>
        <Link to="/mycourses">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-bookmark-fill pr-3"></i>
            <span>My courses</span>
          </div>
        </Link>

        <h1 className="mt-5  mb-4 pl-3 border-b-2 pb-3 border-zinc-500">More Information</h1>
        <Link to="/about">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-scroll-to-bottom-fill pr-3"></i>
            <span>About us</span>
          </div>
        </Link>
        <Link to="/contact">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-phone-fill pr-3"></i>
            <span>Contact us</span>
          </div>
        </Link>
        <Link to="/service">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-phone-fill pr-3"></i>
            <span>Services</span>
          </div>
        </Link>
        {/* <Link href="/movies">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-arrow-right-line pr-3"></i>
            <span>Explore More</span>
          </div>
        </Link> */}
        <Link to="/register">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-user-fill mr-3"></i>    
         <span>Register</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;
