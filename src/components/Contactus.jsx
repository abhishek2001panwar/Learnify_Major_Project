import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import { Input, Button, Textarea } from "@nextui-org/react";

function Contactus() {
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[80%] bg-transparent ml-[40vh] p-8 ">
          <h1>Contact Us</h1>
          <form action="" className="">
            <Input
              type="email"
              label="Email"
              variant="bordered"
              defaultValue=""
              className="max-w-xs mb-3 mt-5"
              errorMessage="Please enter a valid email"
            />
            <Textarea
              label="Description"
              placeholder="Enter your description"
              className="max-w-xs mb-5 bg-white default"
            />
            <Button color="primary" variant="ghost">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactus;
