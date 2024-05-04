import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

function Admin() {
  const [user, setUser] = useState([]);
  const [query, setquery] = useState([]);
  const [course, setcourse] = useState([]);
  const [blog, setblog] = useState([]);
  const [project, setproject] = useState([]);
  const [carousel, setcarousel] = useState([]);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/user/alluser");
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });
  //fetched data of all messsages

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/contact/getcontact");
        const data = await response.json();
        setquery(data.contacts);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });
  //fetched data of all course
  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/courses/allcourses");
        const data = await response.json();
        setcourse(data.courses);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });
  //fetching data of all blog
  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/blog/getallblog");
        const data = await response.json();
        setblog(data.allBlogs);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });
  //fetfling data of all projects
  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/project/getallproject");
        const data = await response.json();
        setproject(data.project);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });

  //fetching data of all carousel
  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/carousel/getallcarousel");
        const data = await response.json();
        setcarousel(data.data);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });

  return (
    <>
    <AdminNavbar/>
      <div className="p-10">
        <div>
          <h1 className="text-xl font-bold mb-4">User Details</h1>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {user.map((elem, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{elem.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{elem.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-8" />

        <hr />
          <h1 className="text-xl font-bold mb-4 mt-5">Queries</h1>
        <div className="mt-20 max-h-[50vh] overflow-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Message
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {query.map((query, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{query.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 ">
                    <h1 className="w-1/2">{query.message.slice(0,40)}</h1>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Reply
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />

        <div className="mt-20">
        <h1 className="text-xl font-bold mb-4">Courses</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {course.map((course, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{course.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        <div className="mt-20">
        <h1 className="text-xl font-bold mb-4">Blogs</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blog.map((blog, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


        <div className="mt-20">
        <h1 className="text-xl font-bold mb-4 mt-10">Projects</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {project.map((project, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </div>
    </>
  );
}

export default Admin;
