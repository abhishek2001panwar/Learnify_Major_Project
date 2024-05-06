import React, { useState } from 'react'

import AdminNavbar from './AdminNavbar'
import CoursesAdmin from './Admin/CoursesAdmin'
function CourseAdminPage() {

  

  return (
    <>
    <div className='w-full h-screen'>
      <div className='flex '>
      <div className=' w-[20%] h-screen  '>
       <AdminNavbar />
       </div>
       <div className='w-[80%] overflow-auto '>
        <CoursesAdmin/>
       </div>
      </div>
    </div>




    </>
  )
}

export default CourseAdminPage