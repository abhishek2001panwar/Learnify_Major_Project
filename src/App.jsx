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
import UserAdmin from './components/Admin/UserAdmin'
import QueryAdmin from './components/Admin/QueryAdmin'
import ProjectAdmin from './components/Admin/ProjectAdmin'
import CoursesAdmin from './components/Admin/CoursesAdmin'
import BlogAdmin from './components/Admin/BlogAdmin'
import CourseAdminPage from './components/CourseAdminPage'
import ProjectAdminPage from './components/ProjectAdminPage'
import BlogAdminPage from './components/BlogAdminPage'
import QueriesAdminPage from './components/QueriesAdminPage'
import Addblog from './components/Admin/Addblog'
import AddBlogPage from './components/AddBlogPage'
import Adminprojectpage from './components/Adminprojectpage'
import AdminAddcoursePage from './components/AdminAddcoursePage'




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
        <Route path="/admin/*" element={<Admin/>} />


      {/* Admin routes */}

      <Route path='/admin/users' element={<Admin/>}/>
      <Route path='/admin/queries' element={<QueriesAdminPage/>}/>
      <Route path='/admin/project' element={<ProjectAdminPage/>}/>
      <Route path='/admin/courses' element={<CourseAdminPage/>}/>
      <Route path='/admin/blogs' element={<BlogAdminPage/>}/>
      <Route path='/admin/addblogs' element={<AddBlogPage/>}/>
      <Route path='/admin/addprojects' element={<Adminprojectpage/>}/>
      <Route path='/admin/addcourse' element={<AdminAddcoursePage/>}/>



      </Routes>

    </div>
  )
}

export default App