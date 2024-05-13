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

function MyCourses() {
  const [news, setnews] = useState([]);

 useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5ba7f2139b974424b96e2d208202bd76"
      );
      const data = await response.json();
      setnews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
 }, [])
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div>
          <h1 className="ml-[40vh] text-3xl font-semibold  p-10 text-center">
            MyCourses
          </h1>
          <div className="w-[80%] bg-transparent ml-[40vh]   p-20 flex flex-wrap gap-8">


            { news.map((elem ,index)=>(
              <Card className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <i class="ri-arrow-right-circle-fill text-3xl"></i>

                <div className="flex flex-col">
                  <p className="text-md">NextUI</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                {elem.title}
                {elem.content}
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
            )
            )
            }
          
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCourses;
