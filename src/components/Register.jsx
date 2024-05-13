import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

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
  // const notify = () => toast("you are redirecting to Admin section");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const user = { email, password };
  //   try {
  //     const response = await fetch("/api/v1/user/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     });
  //     const data = await response.json();
  //     if (data.isAdmin) {
  //           setTimeout(function () {
  //             navigate("/admin/users");
            
  //           }, 1000);
  //         } else {
  //           setTimeout(function () {
  //             navigate("/courses");
  //           }, 1000);


  //     // if (response.ok) {
  //     //   if (data.isAdmin) {
  //     //     setTimeout(function () {
  //     //       navigate("/admin/users");
  //     //     }, 1000);
  //     //   } else {
  //     //     setTimeout(function () {
  //     //       navigate("/courses");
  //     //     }, 1000);
  //       }
  //     // } else {
  //     //   // Handle unsuccessful login (e.g., display error message)
  //     //   console.log("Login failed");
  //     // }
  //   } catch (error) {
  //     console.log(error, "error logging in");
  //     throw new Error(error);
  //   }
  // };
  const handleSubmit = async (e) => {
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
        // Check if user is admin based on response data
        const isAdmin = data.isAdmin; // Adjust this based on the actual structure of the response
        if (isAdmin) {
          setTimeout(function () {
            navigate("/AdminRoute/users");
          }, 1000);
        } else {
          setTimeout(function () {
            navigate("/courses");
          }, 1000);
        }
      } else {
        // Handle unsuccessful login (e.g., display error message)
        console.log("Login failed");
      }
    } catch (error) {
      console.log("Error logging in:", error);
      // Handle error
    }
  };

  return (
    <div className="">
      <form
        className="mt-8 space-y-6  p-5 w-1/2 border-2 rounded-md shadow-md  absolute top-1/3 left-1/2 -translate-x-1/2  -translate-y-1/2 "
        onSubmit={handleSubmit}
        action="#"
        method="POST"
      >
      <h2 className="text-3xl font-light ">Login</h2>
        <div className="rounded-md  -space-y-px ">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
          </div>
          <div className="">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none mb-3 rounded-md relative block pl-2 w-1/2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
              className="appearance-none mb-3 rounded-md relative block pl-2 w-1/2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            // onClick={notify}
            type="submit"
            className="group relative  flex justify-center py-2 w-1/2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-white hover:text-teal-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
      <button className="mt-3 ml-10" onClick={toggleForm}>
        Not a user ? Create One
      </button>
<img className="w-[30vh] h-[30vh] absolute top-[5vh] left-[60vh] rounded-2xl shadow-2xl" src="https://media.istockphoto.com/id/1425163752/photo/security-shield-check-mark-with-document-folder-3d-illustration-storable.jpg?s=612x612&w=0&k=20&c=1O36tsbIizAHEi9zCKN8CxaIGRN0BVwd5X-G8KKFfPc=" alt="" />
          {/* <Toaster /> */}
        </div>
      </form>
    </div>
  );
};

const SignupForm = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const notify = () => toast("Welcome! you are now our user");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password, name, username };
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
        setTimeout(function () {
          notify();
          navigate("/courses");
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
      <form className="mt-8 space-y-6  rounded-md w-1/2 border-2 shadow-md absolute top-1/3 left-1/2 -translate-x-1/2  -translate-y-1/2" onSubmit={handleSubmit} method="POST">
        <div className="rounded-md shadow-sm -space-y-px p-4 ">
      <h2 className="text-2xl mb-3 font-light">Signup</h2>
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
              className="appearance-none rounded-none mb-3 relative block pl-2 w-1/2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
              className="appearance-none rounded-none mb-3 relative block pl-2 w-1/2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
              className="appearance-none mb-3  relative block pl-2 w-1/2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
              // autoComplete="current-password"
              required
              className="appearance-none mb-3 rounded-none relative block pl-2 w-1/2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        <div>
          <button
            onClick={notify}
            type="submit"
            className="group relative w-1/2   flex justify-center py-2  border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-white hover:text-teal-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up
          </button>
      <button className="mt-3" onClick={toggleForm}>
        ALready a user ?Login
      </button>
          <Toaster />
        </div>
        </div>
      </form>

    </div>
  );
};

export default Register;
