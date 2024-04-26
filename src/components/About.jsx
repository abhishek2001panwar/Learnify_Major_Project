import React from "react";
import Sidebar from "./partials/Sidebar";
import { Image } from "@nextui-org/react";

function About() {
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[80%] bg-transparent ml-[40vh] p-8">
          <div className="flex flex-col items-center  w-full h-screen bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl">
              <h1 className="text-4xl font-light mb-4">About Us</h1>
              <Image
                width={300}
                height={200}
                alt="NextUI hero Image with delay"
                src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              />
            <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6">

              <p className="text-lg w-1/2 mt-5 ml-[35vh] text-center p-5 rounded-2xl border-2 border-gray-400 shadow-3xl bg-opacity-30 backdrop-filter backdrop-blur-lg">
                Welcome to our platform! We are dedicated to providing you with
                high-quality interactive learning experiences tailored to your
                needs. Our mission is to empower individuals to achieve their
                learning goals through engaging content and innovative teaching
                methods.
              </p>
              <p className="text-lg w-1/2 mt-5 ml-[35vh] rounded-2xl text-center p-5 border-2 border-gray-400 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                Whether you're a beginner looking to explore new subjects or an
                expert seeking to expand your knowledge, we have something for
                everyone. Join us on this learning journey and unlock your full
                potential!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
