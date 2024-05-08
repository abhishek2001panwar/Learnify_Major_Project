
import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import {  useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function Register() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[80%] bg-transparent ml-[40vh] p-8">
          {showLogin ? (
            <LoginForm toggleForm={toggleForm} />
          ) : (
            <SignupForm toggleForm={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
}

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
const notify = () => toast('Welcome to Profile! you are now logged IN');

  const handleSubmit = async(e) => {
    e.preventDefault();

    const user = { email, password };
    try {
      const response = await fetch("/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        if(data.isAdmin){
          setTimeout(function() {
            notify();
            navigate('/admin/users');
          }, 2000);
        } else {
          setTimeout(function() {
            notify();
            navigate('/profile');
          }, 2000); 
        }
      }
      console.log(data);
    } catch (error) {
      console.log(error, "error creating user");
      throw new Error(error);
    }
  };

 
  return (
    <div>
      <h2 className="text-3xl ">Login</h2>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit} action="#" method="POST">
        <div className="rounded-md shadow-sm -space-y-px ">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none mb-3  relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none mb-3 rounded-none relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button onClick={notify}
            type="submit"
            className="group relative  flex justify-center py-2 px-20 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-white hover:text-teal-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
          <Toaster />
        </div>
      </form>

      <button className="mt-3" onClick={toggleForm}>
        Not a user ? Create One
      </button>
    </div>
  );
};

const SignupForm = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const notify = () => toast('Welcome! you are now our user');

const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();

    const user = { email, password, name , username };
    try {
      const response = await fetch("/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (response.ok) {
        setTimeout(function() {
          notify();
          navigate('/profile');
        }, 2000); 
      }
      console.log(data);
    } catch (error) {
      console.log(error, "error creating user");
      throw new Error(error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl">Signup</h2>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
        <div className="rounded-md shadow-sm -space-y-px ">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none rounded-none mb-3 relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-none mb-3 relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none mb-3  relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none mb-3 rounded-none relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button onClick={notify}
            type="submit"
            className="group relative  flex justify-center py-2 px-20 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-white hover:text-teal-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up
          </button>
          <Toaster />
        </div>
      </form>

      <button className="mt-3" onClick={toggleForm}>
        ALready a user ?Login
      </button>
    </div>
  );
};

export default Register;