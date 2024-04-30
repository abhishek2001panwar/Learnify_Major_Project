import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image ,Button } from "@nextui-org/react";
import Sidebar from "./partials/Sidebar";

function Blog() {

const [blog, setblog] = useState([])


useEffect(() => {
   const fetchData = async (req, res) => {
   try {
     const response = await fetch('/api/v1/blog/getallblog');
     const data = await response.json();
     setblog(data.allBlogs);
   } catch (error) {
     console.log(error.message);
     res.status(500).json({ message: error.message });
   }
  };

   fetchData();

})

  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div>

      <h1 className="ml-[40vh] text-3xl font-semibold  p-10 text-center">Available Blog</h1>
        <div className="w-[80%] bg-transparent ml-[40vh]   p-20 flex flex-wrap gap-8">
        {blog.map((elem, index)=>{
          return <Card key={index} className="max-w-[400px]">
          <CardHeader className="flex gap-3">
          <i class="ri-arrow-right-circle-fill text-3xl"></i>

            <div className="flex flex-col">
              <p className="text-md">{elem.title}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{elem.content.slice(0 , 200 )}</p><Link className="text-teal-500" to={''}>....Read More</Link>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              
            >
              <Button color="default" variant="ghost">
                  View blog
                </Button>
            </Link>
          </CardFooter>
        </Card>


        })}
        

        </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
