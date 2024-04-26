import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Courses from './components/Courses'
import About from './components/About'
import Contactus from './components/Contactus'
import Service from './components/Service'
import Register from './components/Register'
import Project from './components/Project'
import Blog from './components/Blog'
import MyCourses from './components/Mycourses'




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/courses" element={<Courses />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/mycourses" element={<MyCourses/>} />



      </Routes>

    </div>
  )
}

export default App