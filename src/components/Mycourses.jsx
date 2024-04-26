import React from "react";
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
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div>
          <h1 className="ml-[40vh] text-3xl font-semibold  p-10 text-center">
             MyCourses
          </h1>
          <div className="w-[80%] bg-transparent ml-[40vh]   p-20 flex flex-wrap gap-8">
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
                  Make beautiful websites regardless of your design
                  experience.Make beautiful websites regardless of your design
                  experience.
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
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCourses;
