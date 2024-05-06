import React from 'react'
import ProjectAdmin from './Admin/ProjectAdmin'
import AdminNavbar from './AdminNavbar'
function ProjectAdminPage() {
  return (
    <>
    <div className='w-full h-screen'>
      <div className='flex '>
      <div className=' w-[20%] h-screen  '>
       <AdminNavbar />
       </div>
       <div className='w-[80%] overflow-auto '>
        <ProjectAdmin/>
       </div>
      </div>
    </div>
    
    </>
  )
}

export default ProjectAdminPage