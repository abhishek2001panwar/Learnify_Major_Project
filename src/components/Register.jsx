import React, { useState } from 'react';
import Sidebar from './partials/Sidebar';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div>
      <h2 className='text-3xl '>Login</h2>
    <form className="mt-8 space-y-6" action="#" method="POST">
  <div className="rounded-md shadow-sm -space-y-px ">
    <div>
      <label htmlFor="name" className="sr-only">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none mb-3 relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Name" />
    </div>
    <div>
      <label htmlFor="email-address" className="sr-only">Email address</label>
      <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none mb-3  relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" />
    </div>
    <div>
      <label htmlFor="password" className="sr-only">Password</label>
      <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none mb-3 rounded-none relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
    </div>
  </div>
  <div>
    <button type="submit" className="group relative  flex justify-center py-2 px-20 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-white hover:text-teal-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
     
      Sign up
    </button>
  </div>
</form>

      <button className='mt-3' onClick={toggleForm}>ALready a user ?Login</button>
    </div>
  );
};

const SignupForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div>
      <h2 className='text-3xl'>Signup</h2>
      <form className="mt-8 space-y-6" action="#" method="POST">
  <div className="rounded-md shadow-sm -space-y-px ">
   
    <div>
      <label htmlFor="email-address" className="sr-only">Email address</label>
      <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none mb-3  relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" />
    </div>
    <div>
      <label htmlFor="password" className="sr-only">Password</label>
      <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none mb-3 rounded-none relative block pl-2 px-32 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
    </div>
  </div>
  <div>
    <button type="submit" className="group relative  flex justify-center py-2 px-20 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-white hover:text-teal-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
     
      Sign up
    </button>
  </div>
</form>

      <button className='mt-3' onClick={toggleForm}>Not a user ? Create One</button>
    </div>
  );
};

export default Register;
