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
import { motion } from "framer-motion";

function Courses() {
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/courses/allcourses");
        const data = await response.json();
        setcourses(data.courses);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });
  const handlePayment = async (courseId) => {
    try {
      const response = await fetch(
        `/api/v1/payment/create-checkout-session/${courseId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const session = await response.json();
      window.location.href = session.redirect_url;
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while processing payment.");
    }
  };
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div>
          <h1 className="ml-[40vh] text-3xl font-semibold  p-10 text-center">
            Available Courses
          </h1>
          <motion.div
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-[80%] bg-transparent ml-[40vh]   p-20 flex flex-wrap gap-8"
          >
            {courses.map((elem, index) => {
              return (
                <Card key={index} className="max-w-[400px]">
                  <CardHeader className="flex gap-3">
                    <i class="ri-arrow-right-circle-fill text-3xl"></i>

                    <div className="flex flex-col">
                      <p className="text-md">{elem.title}</p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p>
                      {elem.description.slice(0, 150)}
                      <Link
                        className="text-teal-500"
                        href={`/coursedetail/${elem._id}`}
                      >
                        ....more
                      </Link>
                    </p>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Link
                      className="text-teal-500"
                      href={`/coursedetail/${elem._id}`}
                    >
                      View Project
                    </Link>
                    <button onClick={()=> handlePayment(elem._id)}>
                     pay
                    </button>
                  </CardFooter>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Courses;
