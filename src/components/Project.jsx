import React, { useEffect, useState ,useHistory } from "react";
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

function Project() {
  const [project, setproject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v1/project/getallproject" , {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setproject(data.project);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  const handleViewProject = async (id) => {
    const history = useHistory();
  
    try {
      const response = await fetch(`/api/v1/project/getoneproject/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
  
      if (response.ok) {
        // Assuming the route for viewing a single project is '/project/:projectId'
        history.push(`/project/${id}`);
      } else {
        console.log("Failed to fetch project data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div>
          <h1 className="ml-[40vh] text-3xl  font-semibold  p-10 text-center">
            Available Project
          </h1>
          <div className="w-[80%] bg-transparent ml-[40vh]  p-20 flex flex-wrap gap-8">


            { project.map((elem ,index) => {
              return  <Card key={index} className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <i class="ri-arrow-right-circle-fill text-3xl"></i>
                <div className="flex flex-col">
                  <p className="text-md">{elem.title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                 {elem.description.slice(0, 150)}<Link href={'/'}>....more</Link>
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link  target="blank" href={`/api/v1/project/getoneproject${elem.id}`}>
                  <Button onClick={() => handleViewProject(project.id)} color="default" variant="ghost">
                    View project
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

export default Project;
