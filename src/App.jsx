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
import Profile from './components/Profile'
import Admin from './components/Admin'
import Projectdetail from './components/Projectdetail'
import Coursedetail from './components/Coursedetail'
import Blogdetail from './components/Blogdetail'
import Carouseldetail from './components/Carouseldetail'




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/courses" element={<Courses />} /> 
        <Route path="/coursedetail/:id" element={<Coursedetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/project" element={<Project/>} />
        <Route path='/projectdetail/:id' element={<Projectdetail />} />
        <Route path='/carouseldetail/:id' element={<Carouseldetail />} />


        <Route path="/blog" element={<Blog/>} />
        <Route path="/blogdetail/:id" element={<Blogdetail/>} />

        <Route path="/mycourses" element={<MyCourses/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/admin" element={<Admin/>} />


        



      </Routes>

    </div>
  )
}

export default App