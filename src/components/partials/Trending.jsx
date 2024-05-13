
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button
} from "@nextui-org/react";

function Trending() {

  const [courses, setcourses] = useState([])
  useEffect(() => {
    const fetchData = async (req, res) => { 
      try {
        const response = await fetch('/api/v1/courses/allcourses')
        const data = await response.json()
        setcourses(data.courses) 

      } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
      }

    }
fetchData();
  })
  return (
    <div className="w-full   h-screen overflow-auto p-10 mb-20 m-10">
      <h1 className="text-3xl font-light p-10">Popular Courses</h1>

      <div className="w-full flex  flex-wrap overflow-y-auto gap-8 p-4   mb-20">
     
      { courses.map((elem ,index) => {
              return  <Card key={index} className="max-w-[458px]">
              <CardHeader className="flex gap-3">
                <i class="ri-arrow-right-circle-fill text-3xl"></i>

                <div className="flex flex-col">
                  <p className="text-md">{elem.title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                 {elem.description.slice(0, 150)}<Link className="text-teal-500" href={`/coursedetail/${elem._id}`}>....more</Link>
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
              <Link className="text-teal-500" href={`/coursedetail/${elem._id}`}>
           View Project
    </Link>
              </CardFooter>
            </Card>
            })}
      </div>
    </div>
  );
}

export default Trending;
