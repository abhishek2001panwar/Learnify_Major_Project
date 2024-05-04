
import React, { useContext } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import Sidebar from "./partials/Sidebar";
import { ProjectContext } from "../utils/Context";

function Project() {
  const projects = useContext(ProjectContext);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div>
        <h1 className="ml-[40vh] text-3xl font-semibold p-10 text-center">Available Projects</h1>
        <div className="w-[80%] bg-transparent ml-[40vh] p-20 flex flex-wrap gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <i className="ri-arrow-right-circle-fill text-3xl"></i>
                <div className="flex flex-col">
                  <p className="text-md">{project.title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{project.description.slice(0, 150)}<Link className="text-teal-500" href={`/projectdetail/${project._id}`}>....more</Link></p>
              </CardBody>
              <Divider />
              <CardFooter>
              <Link className="text-teal-500" href={`/projectdetail/${project._id}`}>
           View Project
    </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
