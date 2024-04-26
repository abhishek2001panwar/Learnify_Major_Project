import React from 'react';
import Sidebar from './partials/Sidebar';

const Service = () => {
  const services = [
    {
      title: "Online Course Creation",
      description: "Develop and host interactive online courses covering diverse topics, providing comprehensive learning materials and assessments."
    },
    {
      title: "Personalized Learning Paths",
      description: "Tailor learning experiences by offering personalized learning paths based on individual interests, goals, and proficiency levels."
    },
    {
      title: "Live Virtual Workshops",
      description: "Conduct live virtual workshops led by industry experts and instructors, offering real-time interaction, Q&A sessions, and hands-on activities."
    },
    {
      title: "Certification Programs",
      description: "Offer certification programs to validate learners' skills and knowledge, providing recognized credentials to enhance career prospects."
    }
  ];

  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[80%] bg-transparent ml-[40vh] p-8">
          <div className='w-full ma'>
            <section className="py-56 bg-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Our Services
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Explore our range of services to enhance your learning journey.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white overflow-hidden rounded-lg relative shadow-xl">
                      <div className='absolute top-[7%] h-[5vh] w-3 bg-teal-500 rounded-r-md'></div>
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
