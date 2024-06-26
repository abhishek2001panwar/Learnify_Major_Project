import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
const Addblog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const notify = () => toast('Blog added checkout user page');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, content };
    try {
      const response = await fetch("/api/v1/blog/addblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setContent("");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-32 ">
      <h2 className="text-2xl font-light mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-5">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-medium mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Enter content"
            required
          ></textarea>
        </div>

        <button
        onClick={notify}
          type="submit"
          className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-white hover:text-teal-500 transition duration-300"
        >
          Add Blog
        </button>
        <Toaster />
      </form>
    </div>
  );
};

export default Addblog;
