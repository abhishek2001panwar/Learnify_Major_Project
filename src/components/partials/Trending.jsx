
import React from "react";
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
  return (
    <div className="w-full h-screen p-10 mb-20 m-10">
      <h1 className="text-3xl font-light p-10">Popular Courses</h1>

      <div className="w-full flex flex-wrap overflow-y-auto gap-8   mb-20">
      <Card className="max-w-[380px]">
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
  );
}

export default Trending;
