import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
function BlogAdmin() {
    const [blog, setblog] = useState([]);

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

const handleDelete = async(id)=>{
  try {
    const response = await fetch(`/api/v1/blog/deleteblog/${id}`, {
      method: "DELETE",
    });
  //  if(response.ok){
  //   setblog(blog.filter((blog)=>blog._id!==id));
  //  }
  } catch (error) {
    console.log(error);
  }
}
  return (
    <>
     <div className="mt-20">
     <h1 className="text-2xl font-light mb-10  flex justify-center items-center">Blogs</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blog.map((blog, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-5">

                <Button size="sm" color="primary" variant="ghost">
                  <Link to={`/editBlog/${blog._id}`}>Edit</Link>
                  
                  </Button>
                  <Button onClick={()=>handleDelete(blog._id)} size="sm" color="danger" variant="ghost">
                    Delete{" "}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default BlogAdmin