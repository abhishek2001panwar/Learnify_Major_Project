import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import { Input, Button, Textarea } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';

function Contactus() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const notify = () => toast('Query received ! We Will get to you ASAP');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userMessage = { email, message };
      const response = await fetch("http://localhost:4000/api/v1/contact/contactus", {
        method: "POST",
        body: JSON.stringify(userMessage),
        headers: {
          "Content-type": "application/json",
        },
      });
      const newContact = await response.json();
      console.log(newContact);
      if (response.ok) {
        setEmail("");
        setMessage("");
        response =""
      }
     
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-1/2 flex  gap-5 shadow-md bg-transparent ml-[40vh] p-8 absolute top-1/2 left-1/3 rounded-md -translate-x-1/2 -translate-y-1/2 border-2 ">
          <form onSubmit={handleSubmit} className="w-1/2 ">
            <h1 className=" mb-2 text-xl font-light text-center">Contact us</h1>
            <Input
              type="email"
              label="Email"
              variant="bordered"
              defaultValue=""
              className="max-w-xs mb-3 mt-5"
              errorMessage="Please enter a valid email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              label="message"
              placeholder="Enter your message"
              className="max-w-xs mb-5  default"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={notify} type="submit" color="primary" variant="ghost">
              Submit
            </Button>
            <Toaster />
          </form>
          <img className="h-[40vh] rounded-2xl w-1/2" src="https://media.istockphoto.com/id/1776836524/photo/contact-us-written-cartoon-style-speech-bubble-on-blue-background.jpg?s=612x612&w=0&k=20&c=rMEY1OsxZ21wVHbKCsi6lj9fo8RwLkKLmMvRjq88ZPo=" alt="" />
        </div>
      </div>
    </>
  );
}

export default Contactus;
