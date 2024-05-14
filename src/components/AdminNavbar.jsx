import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Image from '../../public/logo2.png'
function AdminNavbar() {
  return (
    <div className="p-8 fixed ">
      <div className="p-8">
        <h1 className="text-2xl font-light flex gap-3 font-dancing-script">
          <img className="h-10 w-10 rounded-lg" src={Image} alt="" />
          {/* <i class="ri-movie-fill pr-3"></i>*/} 
          <Link to={'/'} >Learnify</Link> 
        </h1>
      </div>

      <div className="p-3">
        <Link  to="/AdminRoute/users">
          <div className="flex items-center p-4 active:border-2 active:rounded-md ">
            <i class="ri-user-fill pr-3"></i>
            <span>Users</span>
          </div>
        </Link>
        <Link to="/AdminRoute/courses">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-graduation-cap-fill mr-3"></i>            <span>Courses</span>
          </div>
        </Link>
        <Link to="/AdminRoute/projects">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-slideshow-2-line pr-3"></i>
            <span>Projects</span>
          </div>
        </Link>
        <Link to="/AdminRoute/blogs">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
            <i class="ri-movie-2-line pr-3"></i>
            <span>Blog</span>
          </div>
        </Link>
        <Link to="/AdminRoute/queries">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
            <i class="ri-movie-2-line pr-3"></i>
            <span>Queries</span>
          </div>
        </Link>
       

        <h1 className="mt-5  mb-4 pl-3 border-b-2 pb-3 border-zinc-500">More Information</h1>
        <Link to="/AdminRoute/addblogs">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-add-circle-line pr-3"></i>
            <span>Add blog</span>
          </div>
        </Link>
        <Link to="/AdminRoute/addprojects">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-add-box-fill pr-3"></i>
            <span>Add project</span>
          </div>
        </Link>
        <Link to="/AdminRoute/addcourse">
          <div className="flex items-center p-4 active:border-2 active:rounded-md">
          <i class="ri-graduation-cap-fill pr-3"></i>
            <span>Add course</span>
          </div>
        </Link>
       

      </div>
    </div>
  );
}

export default AdminNavbar;
