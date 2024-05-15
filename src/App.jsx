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
import Admineditproject from './components/Admin/Admineditproject'
import Admineditcourse from './components/Admin/Admineditcourse'
import Admineditblog from './components/Admin/Admineditblog'
import Payment from './components/MyPayment'
import MyPayment from './components/MyPayment'
import Featureddetail from './components/Featureddetail'




function App() {
  const isAdmin = true
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
        <Route path="/cdetail/:id" element={<Featureddetail/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blogdetail/:id" element={<Blogdetail/>} />
        <Route path="/mycourses" element={<MyCourses/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/payment" element={<MyPayment/>} />


      {/* Admin routes */}

        <Route path="/AdminRoute/*" element={<Admin/>} isAdmin={isAdmin} />
      <Route path='/AdminRoute/users' element={<Admin/>}/>
      <Route path='/AdminRoute/queries' element={<QueriesAdminPage/>}/>
      <Route path='/AdminRoute/projects' element={<ProjectAdminPage/>}/>
      <Route path='/AdminRoute/courses' element={<CourseAdminPage/>}/>
      <Route path='/AdminRoute/blogs' element={<BlogAdminPage/>}/>
      <Route path='/AdminRoute/addblogs' element={<AddBlogPage/>}/>
      <Route path='/AdminRoute/addprojects' element={<Adminprojectpage/>}/>
      <Route path='/AdminRoute/addcourse' element={<AdminAddcoursePage/>}/>
      <Route path='/editProject/:id' element={<Admineditproject/>}/>
      <Route path='/editCourse/:id' element={<Admineditcourse/>}/>
      <Route path='/editBlog/:id' element={<Admineditblog/>}/>






      </Routes>

    </div>
  )
}

export default App
 
// App.js
// import React, { useEffect, useState } from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import Courses from './components/Courses'
// import About from './components/About'
// import Contactus from './components/Contactus'
// import Service from './components/Service'
// import Register from './components/Register'
// import Project from './components/Project'
// import Blog from './components/Blog'
// import MyCourses from './components/Mycourses'
// import Profile from './components/Profile'
// import Admin from './components/Admin'
// import Projectdetail from './components/Projectdetail'
// import Coursedetail from './components/Coursedetail'
// import Blogdetail from './components/Blogdetail'
// import Carouseldetail from './components/Carouseldetail'
// import UserAdmin from './components/Admin/UserAdmin'
// import QueryAdmin from './components/Admin/QueryAdmin'
// import ProjectAdmin from './components/Admin/ProjectAdmin'
// import CoursesAdmin from './components/Admin/CoursesAdmin'
// import BlogAdmin from './components/Admin/BlogAdmin'
// import CourseAdminPage from './components/CourseAdminPage'
// import ProjectAdminPage from './components/ProjectAdminPage'
// import BlogAdminPage from './components/BlogAdminPage'
// import QueriesAdminPage from './components/Admin/QueriesAdminPage'
// import Addblog from './components/Admin/Addblog'
// import AddBlogPage from './components/AddBlogPage'
// import Adminprojectpage from './components/Adminprojectpage'
// import AdminAddcoursePage from './components/AdminAddcoursePage'
// function App() {
//   const [isAdmin, setIsAdmin] = useState(false);

//   const checkAdminStatus = () => {
//     // For demonstration, let's assume user is an admin if true
//     setIsAdmin(true);
//   };

//   useEffect(() => {
//     checkAdminStatus();
//   }, []);

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/coursedetail/:id" element={<Coursedetail />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contactus />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/projectdetail/:id" element={<Projectdetail />} />
//         <Route path="/carouseldetail/:id" element={<Carouseldetail />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/blogdetail/:id" element={<Blogdetail />} />
//         <Route path="/mycourses" element={<MyCourses />} />
//         <Route path="/profile" element={<Profile />} />

//         {/* Admin routes */}
//         <Route path="/admin/*" element={
//             isAdmin ? (
//               <Admin>
//                 <Route path="/admin/users" element={<UserAdmin />} />
//                 <Route path="/admin/queries" element={<QueriesAdminPage />} />
//                 <Route path="/admin/projects" element={<ProjectAdminPage />} />
//                 <Route path="/admin/courses" element={<CourseAdminPage />} />
//                 <Route path="/admin/blogs" element={<BlogAdminPage />} />
//                 <Route path="/admin/addblogs" element={<AddBlogPage />} />
//                 <Route path="/admin/addprojects" element={<Adminprojectpage />} />
//                 <Route path="/admin/addcourse" element={<AdminAddcoursePage />} />
//               </Admin>
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;
