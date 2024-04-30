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
      }
      response =""
     
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[80%] bg-transparent ml-[40vh] p-8 ">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
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
              className="max-w-xs mb-5 bg-white default"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={notify} type="submit" color="primary" variant="ghost">
              Submit
            </Button>
            <Toaster />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactus;
