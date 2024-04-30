import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import Sidebar from "./partials/Sidebar";

function Courses() {

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
    <>
      <div className="flex w-full">
        <Sidebar />
        <div>
          <h1 className="ml-[40vh] text-3xl font-semibold  p-10 text-center">
            Available Courses
          </h1>
          <div className="w-[80%] bg-transparent ml-[40vh]   p-20 flex flex-wrap gap-8">

            { courses.map((elem ,index) => {
              return  <Card className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <i class="ri-arrow-right-circle-fill text-3xl"></i>

                <div className="flex flex-col">
                  <p className="text-md">{elem.title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                 {elem.description.slice(0, 150)}<Link href="">....more</Link>
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link>
                  <Button color="default" variant="ghost">
                    View course
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

export default Courses;
