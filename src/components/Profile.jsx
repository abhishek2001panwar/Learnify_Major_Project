import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../public/logo2.png'
function Profile() {
  return (
    <>
        <Link to={'/'} >
        <h1 className="text-2xl font-light flex gap-3 m-16">
          <img className="h-10 w-10 rounded-lg" src={Image} alt="" />
          Learnify 
        </h1>

        </Link>
    <div className="bg-white rounded-lg shadow-lg w-1/2 p-6 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">Frontend Developer</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">About Me</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          augue quis eros cursus, vitae consectetur libero viverra.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Contact</h3>
        <ul className="text-gray-700">
          <li>Email: john@example.com</li>
          <li>Phone: +123456789</li>
          <li>Location: City, Country</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Profile;
